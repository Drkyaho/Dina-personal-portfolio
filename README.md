# Yourfolio — a creative data portfolio

A responsive, static React 19 + TypeScript + Vite portfolio. No backend, database, authentication, or API keys. Cobalt and lime art direction inspired by the supplied reference, with independently designed light and dark themes.

## Getting started

Use Node.js 22.12+ and pnpm 10 (the repository's `.mise.toml` also describes its toolchain).

```sh
pnpm install --frozen-lockfile
pnpm dev
```

The Figma Make environment already runs its own development server; do not start a second one there.

```sh
pnpm build       # production files in dist/
pnpm preview     # serve the production output locally, outside Make
pnpm format     # repository formatter
```

## Edit your portfolio

**Start with `src/data/portfolio.ts`.** It contains your profile, education, thesis, skills, tools, badges, three work experiences, two organizations, four projects, awards, certificates, and contact details. Replace square-bracket placeholders with your actual information. Empty URLs are deliberately not clickable; GitHub project buttons become enabled when their repository URLs are supplied. No credentials, research results, work details, or personal identity have been invented.

Add images to the corresponding `public/images/` subfolder, then set a content image field to a path such as `images/profile/portrait.webp` (no leading slash). Empty image fields show clearly labeled visual placeholders. Project fallback dashboards are explicitly illustrative, not project results. The abstract orbit image is decorative generated artwork, saved locally.

Use WebP/AVIF/JPEG for photography, preferably under 250 KB and around 1200px wide. Certificate scans should remain readable: use high-quality images and test them in the lightbox. Work cards use two image entries; each organizational stack uses three. Tool SVGs are local; replace or add a logo and update the tools array. Certificate categories are generated from content automatically.

Set `profile.email` to a plain email address, and social/repository/credential links to full `https://` URLs. Set your page title and description in `.figma/make/site.json`. Set its `openGraph.image` to the absolute URL of your final share image when the deployment address is known. Replace the favicon and update `icons.icon` if needed. Update the short `yourfolio.` wordmarks in Navigation and Contact if you want your own branding.

### Structure

```text
src/
  App.tsx                       # composition, reveals, preview state
  data/portfolio.ts             # centralized editable content
  components/
    Navigation.tsx              # sticky navigation, theme, mobile menu
    Home.tsx                    # cover
    About.tsx                   # profile, education, thesis, skills, tools, badges
    Experience.tsx              # work and independent polaroid stacks
    Projects.tsx                # carousel, indicators, swipe
    Credentials.tsx             # awards, filterable certificates
    Contact.tsx                 # contact and footer
    Shared.tsx                  # headings, placeholders, modal
    Icon.tsx                    # lightweight inline SVG icons
  index.css                     # responsive styles and theme variables
public/
  favicon.svg
  images/
    art/orbit.webp
    tools/*.svg
    profile/                    # add your photos here
    work/
    organizations/
    projects/
    awards/
    certificates/
.github/workflows/pages.yml     # free GitHub Pages deployment
```

Empty photo folders may not appear in Git until populated. All image paths go through Vite's `BASE_URL` helper. The site uses anchor navigation, so no SPA routing rewrites are needed. Fonts use Google Fonts with local sans-serif fallbacks; images and logos do not depend on external URLs.

## Deploy free on GitHub Pages

1. Push the entire source repository to GitHub, with `main` as the default branch (or edit the workflow branch).
2. Open repository **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Push to `main` or manually run **Actions → Deploy portfolio to GitHub Pages**.
4. The workflow installs dependencies, builds `dist`, and publishes it. Its deployment job provides the public URL.

`vite.config.ts` uses `base: './'` outside Make. Thus built script, CSS, image, and favicon paths work at both `https://username.github.io/` and `https://username.github.io/repository-name/`. No paid services or runtime server are required. Make's own URL override is preserved. The GitHub Pages workflow must run in your own GitHub repository; it has not been published on your behalf.

## Interaction / accessibility checklist

- Navigate all seven sections; scroll to see the active navigation update.
- On mobile, open the navigation and select a destination.
- Change themes, reload, and confirm the saved choice remains. With storage cleared, the initial theme follows the system preference; initialization runs before first paint.
- Use carousel arrows and each position indicator; swipe left/right on a phone.
- Shuffle both organizational stacks independently through all three photos.
- Filter certificates, open award/certificate previews, close using the button, Escape, or backdrop. Native modal dialogs trap focus and restore it to the trigger.
- Add real contact/repository URLs, then test each destination.
- Check at phone, tablet, and desktop widths, in both themes.
- Enable reduced motion: scrolling, reveals, and transitions should no longer animate.

Images load lazily below the cover. Theme colors are centralized in CSS variables. Missing links are intentionally inactive until your information is supplied.

## Asset credits

Tool marks are provided for identification by the open-source Simple Icons and Devicon collections and belong to their respective owners. Supplementary Excel/Power BI marks are vector identification placeholders; replace them with official brand assets if desired.
