This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Design system

The shared visual foundations live in [`app/design-system.css`](./app/design-system.css), imported by `app/globals.css`. Reuse its CSS variables for colors, typography, spacing width, radii, and accent treatments, along with shared classes such as `.page-shell`, `.eyebrow`, and `.button` (`.button-primary`, `.button-outline`, and `.button-quiet`).

The landing page in [`app/page.tsx`](./app/page.tsx) demonstrates the shared dark surfaces, warm orange accent, restrained borders, rounded cards, responsive grids, and accessible focus states. The hero uses a cropped, rotating Earth texture in [`public/earth-blue-marble.jpg`](./public/earth-blue-marble.jpg) (NASA/GSFC Blue Marble imagery); the supplied `public/landing-page-bg.jpg` remains in use for the dashboard preview. The moving testimonial cards and locally stored demo profile photos in `public/learners/` are fictional samples, not customer endorsements. Navigation links to `/courses`, `/login`, and `/signup` are destinations for future pages.

## Course page previews

The catalog at `/courses` and dynamic lesson previews at `/courses/[slug]` use the sample data in [`lib/courses.ts`](./lib/courses.ts). The lesson player, lesson outline, and completion progress are front-end demo states only; lesson progress resets on refresh, and real video, written content, downloads, access checks, and purchases still need service integration.

## Authentication

Authentication uses Neon Managed Better Auth. Add the entries from `.env.example` to `.env.local` (copy the example only if `.env.local` does not already exist, so existing values such as `DATABASE_URL` are preserved). Set `NEON_AUTH_BASE_URL` to the Auth URL from your Neon project's Auth configuration, and set `NEON_AUTH_COOKIE_SECRET` to a private random value of at least 32 characters (for example, generate one with `node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"`). Do not commit `.env.local` or expose the cookie secret to the browser.

The sign-up and sign-in pages are available at `/signup` and `/login`; email/password and GitHub sign-in both return users to `/account`. The account page requires an authenticated session. Signed-in users see their profile menu in the landing page, course catalog, and course preview headers, with links to their account and sign-out. Add the local app URL and any production app URL to the allowed redirect URLs in Neon Auth, and ensure the GitHub OAuth app callback URL matches the callback displayed by Neon.
