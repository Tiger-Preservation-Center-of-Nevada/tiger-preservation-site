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
It requires three repository secrets:

| Secret | Where to find it |
| --- | --- |
| `VERCEL_TOKEN` | [Vercel account settings → Tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | `.vercel/project.json` after running `vercel link` |
| `VERCEL_PROJECT_ID` | `.vercel/project.json` after running `vercel link` |

## Pages

- `/` — Home
- `/about` — Mission, facts, founders
- `/animals` — Meet the residents
- `/news` — News and events
- `/donate` — Donation page
- `/contact` — Contact details and form
