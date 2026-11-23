# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# bigonbuy.com contributor guide

bigonbuy.com is the corporate **trust and verification** site for the BIGONBUY group. It is not a marketing site. Its job is to show, on a domain matching the company names, each legal entity's legal name, CIN, registered office and the products it runs, plus founders, careers and contact routes.

## Rules

- All company facts live in `src/config/site.ts`. Never hardcode legal names, CINs, addresses, emails or product URLs elsewhere.
- Unknown values stay `null`; the UI omits them. Never show placeholders on a public page.
- Never invent statistics, customer counts, testimonials, logos, ratings, funding or partnerships.
- Do not show GSTINs or phone numbers unless the owners provide them.
- Product details stay on the product sites (loopd2c.com, chatji.ai, megaska.com). Link out; don't duplicate.
- Product support is routed to each product's own site, never to a bigonbuy.com inbox.

## Stack

Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS 4, fully static, deployed on Vercel. Design tokens and foundation components (`src/components/foundation`) are shared with loopdesk-website; keep them in sync rather than diverging.

Set `NEXT_PUBLIC_SITE_URL=https://www.bigonbuy.com` on the Vercel **production** environment only. Without it (and on previews) every page is `noindex` and robots.txt disallows all.

## Before every change

```bash
npm run lint
npm run typecheck
npm run build
```
