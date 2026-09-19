/**
 * ADLUMEO Environment Validation
 *
 * Three tiers:
 *   REQUIRED    — Build/startup fails without these (server-side only)
 *   CONDITIONAL — Warn at runtime if missing; features degrade gracefully
 *   OPTIONAL    — No warning; feature silently disabled
 *
 * IMPORTANT: Server-only credentials must NEVER use NEXT_PUBLIC_* prefix.
 */

/**
 * Called from server-side code (API routes, lib/) to validate critical vars.
 * Does not throw in development — warns instead.
 * In production, logs explicit errors for each missing required variable.
 */
export function validateServerEnv(): {
  valid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];
  const isProduction = process.env.NODE_ENV === "production";

  // ── REQUIRED in production ─────────────────────────────────────────────────

  const isSqliteOrMissing =
    !process.env.DATABASE_URL ||
    (isProduction && process.env.DATABASE_URL.startsWith("file:"));

  if (isSqliteOrMissing) {
    const msg =
      "[ADLUMEO][CRITICAL] Persistent PostgreSQL DATABASE_URL is not configured. " +
      "For production on Vercel, change Prisma provider to 'postgresql' in schema.prisma, " +
      "set a PostgreSQL DATABASE_URL (Supabase / Neon), and run 'npx prisma migrate deploy' before accepting real submissions.";
    if (isProduction) {
      errors.push(msg);
    } else {
      warnings.push("[ADLUMEO][WARN] Using SQLite fallback for local development.");
    }
  }

  // ── CONDITIONAL — runtime features degrade but do not fail ────────────────

  if (!process.env.LEAD_NOTIFICATION_EMAIL) {
    warnings.push(
      "[ADLUMEO][WARN] LEAD_NOTIFICATION_EMAIL is not set. " +
        "Internal lead notifications will not be sent. Leads are still saved to the database."
    );
  }

  if (!process.env.EMAIL_API_KEY) {
    const msg =
      "[ADLUMEO][WARN] EMAIL_API_KEY is not set. " +
        (isProduction
          ? "Transactional emails are DISABLED in production. Leads will be stored but no confirmation or notification emails will be sent."
          : "Email is mocked in development.");
    warnings.push(msg);
  }

  if (!process.env.EMAIL_FROM) {
    warnings.push(
      "[ADLUMEO][WARN] EMAIL_FROM is not set. " +
        "Transactional emails require a verified sender address."
    );
  }

  // Upstash Redis — optional but recommended for production rate limiting
  if (isProduction && !process.env.UPSTASH_REDIS_REST_URL) {
    warnings.push(
      "[ADLUMEO][WARN] UPSTASH_REDIS_REST_URL is not set. " +
        "Rate limiting is in-memory only — not globally effective across serverless instances."
    );
  }

  // ── LOG ───────────────────────────────────────────────────────────────────

  warnings.forEach((w) => console.warn(w));
  if (errors.length > 0) {
    errors.forEach((e) => console.error(e));
  }

  return { valid: errors.length === 0, errors, warnings };
}

/**
 * Returns a typed, safe read of server-side environment variables.
 * Never throws — missing values are explicitly undefined.
 * Never exposes NEXT_PUBLIC_* pattern for server secrets.
 */
export const serverEnv = {
  databaseUrl: process.env.DATABASE_URL,
  emailApiKey: process.env.EMAIL_API_KEY,
  emailFrom: process.env.EMAIL_FROM,
  leadNotificationEmail: process.env.LEAD_NOTIFICATION_EMAIL,
  upstashRedisUrl: process.env.UPSTASH_REDIS_REST_URL,
  upstashRedisToken: process.env.UPSTASH_REDIS_REST_TOKEN,
  nodeEnv: process.env.NODE_ENV as "development" | "production" | "test",
  isProduction: process.env.NODE_ENV === "production",
};
