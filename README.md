# Anchor Labs

Static Vite + React landing page for Anchor Labs.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

The production output is generated in `dist`.

## Vercel Deployment

This project is ready to deploy on Vercel.

When importing the Git repository in Vercel, use:

- Framework Preset: `Vite`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`

These settings are also declared in `vercel.json`, so Vercel should detect them automatically.

## SEO Notes

The current SEO canonical URL and sitemap use:

```text
https://anchor-labs.vercel.app/
```

If you deploy to a custom domain, update that URL in:

- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`
