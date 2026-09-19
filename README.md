# ADLUMEO — Attention into Growth

Official website and digital acquisition system for **ADLUMEO** (Social • Content • Paid Media).

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Prisma ORM, and Resend.

---

## ⚠️ Pre-Launch Production Blockers

Before driving real traffic or conducting client outreach, the following infrastructure items must be configured:

### 1. Persistent Database Migration (CRITICAL LAUNCH BLOCKER)
Vercel serverless functions run on ephemeral filesystems. **The local SQLite database (`dev.db`) will lose all stored leads whenever Vercel redeploys.**

> [!CAUTION]
> **Production lead capture is BLOCKED until this migration is completed.**
> Note: Supplying a PostgreSQL `DATABASE_URL` alone does **NOT** make the current SQLite Prisma schema production-ready.

To migrate to production PostgreSQL (e.g. Supabase, Neon, AWS RDS):
1. In `prisma/schema.prisma`, update the datasource provider:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```
2. Set `DATABASE_URL` in your Vercel Project Settings → Environment Variables.
3. Deploy the schema to PostgreSQL:
   ```bash
   npx prisma migrate deploy
   ```
4. Test submitting a test audit request and verify the lead persists in the PostgreSQL database.

---

### 2. Transactional Email Setup
For form submissions (Free Audit & Contact Form) to send email alerts and client confirmation receipts:
- Set `EMAIL_API_KEY` (e.g. from Resend).
- Set `EMAIL_FROM` to a verified domain sender address (e.g. `ADLUMEO <notifications@yourdomain.com>`).
- Set `LEAD_NOTIFICATION_EMAIL` to your internal team inbox where alerts should arrive.

*Note: If email credentials are not set in production, leads will still be saved to the database safely, but email dispatch will return `EMAIL_NOT_CONFIGURED` without faking success.*

---

### 3. Canonical Domain Configuration
- Set `NEXT_PUBLIC_SITE_URL` to your production URL (e.g. `https://adlumeo.com` or `https://adlumeo.vercel.app`).
- This ensures metadata tags, OpenGraph previews, canonical URLs, sitemaps (`/sitemap.xml`), and robots rules (`/robots.txt`) render with the correct domain.

---

## Environment Variables Overview

| Variable | Tier | Description |
| :--- | :--- | :--- |
| `DATABASE_URL` | **Required in Prod** | PostgreSQL connection string |
| `NEXT_PUBLIC_SITE_URL` | **Required in Prod** | Canonical domain URL |
| `EMAIL_API_KEY` | Conditional | Resend API key for transactional emails |
| `EMAIL_FROM` | Conditional | Verified sender address |
| `LEAD_NOTIFICATION_EMAIL` | Conditional | Internal agency notification recipient |
| `UPSTASH_REDIS_REST_URL` | Optional | Distributed rate limiting (Upstash Redis) |
| `UPSTASH_REDIS_REST_TOKEN` | Optional | Upstash Redis authentication token |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional | Public email link on Contact page |
| `NEXT_PUBLIC_WHATSAPP_NUMBER`| Optional | WhatsApp direct chat button |
| `NEXT_PUBLIC_FOUNDER_*` | Optional | Founder profile section (rendered only if set) |

---

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Setup local database**:
   ```bash
   npx prisma db push
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Compile and bundle verification**:
   ```bash
   npx tsc --noEmit
   npm run lint
   npm run build
   ```
