# About this solution

A short walkthrough of what I built and how it works. The original assignment is kept unchanged in [README.md](README.md).

## Running it

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Node 20.9+ (developed on 22), pnpm 10. There is no `.env` to set up.

`pnpm typecheck`, `pnpm lint` and `pnpm format` are there too, and a Husky pre-commit hook runs ESLint and Prettier on staged files.

## The flow

The whole donation form lives on the home page as a three-step flow.

**Step 1 – how you want to help.** You pick between donating to the foundation or to a specific shelter, choose a shelter from the list (loaded from the API, required only for the shelter option), and set an amount - either one of the preset chips or your own number. Amounts are formatted with `Intl.NumberFormat` in the active language.

**Step 2 – who you are.** Name, surname, e-mail and phone. The phone field has a country picker with the SK/CZ flag and normalises whatever you type or paste - `+421`, `00421`, or a local number with a leading zero all end up as one canonical value. You can add up to five donors here. They show up as an accordion, so the form doesn't turn into an endless column of inputs.

**Step 3 – check and confirm.** A summary of everything entered, the consent checkbox, and submit.
Moving forward validates only the fields belonging to the current step, and if something is wrong, focus jumps to the first invalid field. Submitting POSTs the form and shows a success screen. A failure shows an error toast and keeps the filled-in data so you can retry.

Besides the form there's an **About** page with the total raised and the number of donors, and a **Contact** page. Everything is available in Slovak and English through the language switcher in the footer.

## What's used and why

**Next.js 16 (App Router) + TypeScript.** Pages and metadata are rendered on the server. Only the interactive parts are client components.

**TanStack Query** for everything coming from the API. Each endpoint has its own file in `src/lib/api/` exporting ready-made query or mutation options, so a component just calls `useQuery(sheltersQueryOptions())` and doesn't know about keys or fetching. After a successful donation the results query is invalidated, which is what keeps the About page numbers fresh.

**React Hook Form + Zod** for the form itself. Each step has its own Zod schema, and those schemas are also what defines which fields that step validates - so the step config can't drift out of sync with the validation rules. The three schemas are combined into one for the final submit. Validation messages are stored as translation keys rather than text, so errors change language along with the rest of the UI.

**React context** for the flow state - the current step, whether it's submitting, and the next/back/submit actions. It sits above the form provider in `contribution-context.tsx`, so any step can reach both without prop drilling.

**Mantine + styled-components.** Mantine handles the components - the country combobox, stepper, collapse, notifications. All the visual styling that matches the Figma is styled-components, in a `*.styles.ts` file next to each component. The two share one source of truth: the Mantine theme publishes the design tokens as CSS variables, which the styled-components read, so there's no second copy of the palette or the breakpoints.

**next-i18next** for localisation. Both languages are complete, including error messages and SEO texts. The language is stored in a cookie rather than the URL, so there's no locale prefix in the links.

**SEO.** Every page has its own title, description and `og:image`, and so does every form step. Since steps don't have real URLs, this works from two sides: the server reads a `?step=` parameter when generating metadata (for crawlers and shared links), and on the client the document title and that parameter are kept in sync as you move through the form.

**Accessibility** was on my mind throughout: inputs and radio/chip groups are properly labelled, the donor accordion exposes its expanded state, error toasts announce themselves as alerts, the results block is a live region while it loads, and validation moves focus to the field that needs fixing.

## What I'd do next

- **Tests.** There are none, and that's the first thing I'd add - starting with the Zod schemas, the phone parser and the payload mapping, since they're pure functions with the best return per test.
- **The first name field** is currently required (2–20 characters). The assignment lists it as optional, but backend requires it.
- **Dark mode** - the theme is set up with tokens, so it's mostly a matter of filling in the dark values. It wasn't part of the design.
