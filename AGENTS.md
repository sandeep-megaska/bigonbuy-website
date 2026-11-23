# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# bigonbuy.com contributor guide

bigonbuy.com is the corporate website of the BIGONBUY group: BIGONBUY Trading Private Limited (owns Megaska) and BIGONBUY Technologies Private Limited (owns LoopD2C and Chatji). Banks, payment providers and platforms also use it to verify the companies, so each entity's legal name, CIN, incorporation date, registered office, owners and brands must be accurate.

## Rules

- All company facts live in `src/config/site.ts`. Never hardcode legal names, CINs, addresses, emails or product URLs elsewhere.
- Unknown values stay `null`; the UI omits them. Never show placeholders on a public page.
- Registered details (name, CIN, address) must match the MCA record exactly, even where the record is known to need correction. Update them only after MCA reflects the change.
- Never invent statistics, customer counts, testimonials, logos, ratings, funding or partnerships.
- Do not show GSTINs or phone numbers unless the owners provide them.
- Product details stay on the product sites (loopd2c.com, chatji.ai, megaska.com). Link out; don't duplicate.
- Product support is routed to each product's own site, never to a bigonbuy.com inbox.

## Stack

Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS 4, fully static, deployed on Vercel. Token names, type scale, spacing and foundation components (`src/components/foundation`) are shared with loopdesk-website. Colours follow the bigONbuy logo (near-black and logo red); the logo SVGs in `public/brand` were traced from the original artwork.

The Vercel framework preset is pinned in `vercel.json` (`nextjs`).

Set `NEXT_PUBLIC_SITE_URL=https://www.bigonbuy.com` on the Vercel **production** environment only. Without it (and on previews) every page is `noindex` and robots.txt disallows all.

## Before every change

```bash
npm run lint
npm run typecheck
npm run build
```
