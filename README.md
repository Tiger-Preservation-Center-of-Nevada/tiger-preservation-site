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

The **Deploy to Vercel** GitHub Actions workflow
(`.github/workflows/deploy.yml`) hands builds off to Vercel:

- **Pull requests** run `npm run lint` and `npm run build`, then create a
  Vercel preview deployment and link it in a PR comment.
- **Pushes to `main`**, including merged pull requests, deploy straight to
  production.

It requires the `VERCEL_TOKEN` repository secret
([Vercel account settings → Tokens](https://vercel.com/account/tokens)).

The optional `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` secrets pin the exact
Vercel project; when absent, the workflow resolves (or creates) the project
by its name, `tiger-preservation-site`.

## Donations

`/donate` embeds the Qgiv donation form (`components/QgivForm.tsx`). Qgiv
only sends the form's resize messages to the site address saved in the
embed's settings in Qgiv (`https://www.tigerpreservationcenter.org/donate`),
so on localhost and preview deployments the form sits at a fixed 1000px
height instead of fitting its content. Colors and amounts are set in Qgiv,
not in this repo.

## Pages

- `/` — Home
- `/about` — Mission, facts, founders
- `/animals` — Meet the residents
- `/news` — News and events
- `/donate` — Donation page
- `/contact` — Contact details and form
