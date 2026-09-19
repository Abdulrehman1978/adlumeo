import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

export interface IRateLimiter {
  limit(identifier: string): Promise<RateLimitResult>;
}

// In-Memory Fallback for Local Development
class MemoryRateLimiter implements IRateLimiter {
  private store: Map<string, { count: number; resetAt: number }> = new Map();
  private maxRequests: number;
  private windowMs: number;

  constructor(maxRequests = 5, windowMs = 60 * 1000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  async limit(identifier: string): Promise<RateLimitResult> {
    const now = Date.now();
    const record = this.store.get(identifier);

    // Clean up expired records
    if (record && now > record.resetAt) {
      this.store.delete(identifier);
    }

    const current = this.store.get(identifier);
    if (!current) {
      this.store.set(identifier, { count: 1, resetAt: now + this.windowMs });
      return {
        success: true,
        limit: this.maxRequests,
        remaining: this.maxRequests - 1,
        reset: now + this.windowMs,
      };
    }

    if (current.count >= this.maxRequests) {
      return {
        success: false,
        limit: this.maxRequests,
        remaining: 0,
        reset: current.resetAt,
      };
    }

    current.count += 1;
    return {
      success: true,
      limit: this.maxRequests,
      remaining: this.maxRequests - current.count,
      reset: current.resetAt,
    };
  }
}

// Factory to produce Upstash Redis limiter if credentials exist, or Memory limiter
function createRateLimiter(): IRateLimiter {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (redisUrl && redisToken) {
    const redis = new Redis({
      url: redisUrl,
      token: redisToken,
    });

    const upstashLimiter = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "60 s"),
      analytics: true,
      prefix: "@adlumeo/rate-limit",
    });

    return {
      limit: async (identifier: string) => {
        const result = await upstashLimiter.limit(identifier);
        return {
          success: result.success,
          limit: result.limit,
          remaining: result.remaining,
          reset: result.reset,
        };
      },
    };
  }

  // Fallback to local memory limiter for development
  return new MemoryRateLimiter(5, 60 * 1000);
}

export const rateLimiter = createRateLimiter();
