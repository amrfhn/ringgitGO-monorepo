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

## Testing

Install development dependencies with `npm ci`.

### Unit and component tests (Jest)

Jest uses `next/jest`, jsdom, and React Testing Library. Name tests
`*.test.ts` or `*.test.tsx`; Playwright tests are excluded.

```bash
npm test
npm run test:watch
npm run test:coverage
```

Use Testing Library queries and `@testing-library/user-event` for user
interactions. Async Server Components should be covered by Playwright.

### Browser and backend HTTP tests (Playwright)

Install Chromium once:

```bash
npx playwright install chromium
```

If your network uses a corporate CA trusted by the operating system, use
`NODE_USE_SYSTEM_CA=1 npx playwright install chromium` on Node.js versions
that support system certificates. Do not disable TLS verification.

On Linux/CI, use `npx playwright install --with-deps chromium` if system
libraries are missing. Python 3.12+ and uv are also required; first run
`uv sync --locked --project ../ringgitgo-be`.

```bash
npm run test:e2e
npm run test:e2e -- --project=frontend
npm run test:e2e -- --project=backend
npm run test:e2e:ui
```

The shared suite starts and stops Next.js on port 3100 and FastAPI on port
8100. These ports must be free. It uses the Next.js development server, not
a production build. The `frontend` project runs Chromium browser tests
(`e2e/*.browser.spec.ts`); the `backend` project runs real HTTP API tests
(`e2e/*.api.spec.ts`) without launching a browser.
Both services start even when selecting a single project.
There is no frontend-to-backend user journey yet; add one when the UI
integrates with the API.

Reports are written to `playwright-report/` and failures to `test-results/`.
Open the HTML report with `npx playwright show-report`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
