# Tiger Preservation Center of Nevada — Website

The website of The Tiger Preservation Center of Nevada, a 501(c)(3) nonprofit,
non-breeding rescue center giving lifetime homes to abused and neglected
exotic animals.

Built with [Next.js](https://nextjs.org) (App Router, TypeScript).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run build
```

## Deployment

Pushes to `main` trigger the **Deploy to Vercel** GitHub Actions workflow
(`.github/workflows/deploy.yml`), which hands the build off to Vercel.
It requires the `VERCEL_TOKEN` repository secret
([Vercel account settings → Tokens](https://vercel.com/account/tokens)).

The optional `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` secrets pin the exact
Vercel project; when absent, the workflow resolves (or creates) the project
by its name, `tiger-preservation-site`.

## Pages

- `/` — Home
- `/about` — Mission, facts, founders
- `/animals` — Meet the residents
- `/news` — News and events
- `/donate` — Donation page
- `/contact` — Contact details and form
