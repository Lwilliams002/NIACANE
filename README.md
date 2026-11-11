# Nia Cane website

Static one-page site for Nia Cane (fresh pressed sugarcane juice, Houston). Built with React and Vite, hosted on GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Edit content

All text, prices, flavors, FAQs and locations are in `src/data.js`. Images and the video are in `public/media/`.

## Deploy

Pushing to `main` builds the site and publishes it to GitHub Pages through `.github/workflows/deploy.yml`.

## Not done yet

- The contact form does not send email. Connect it to a form service in `src/App.jsx` (`Contact` component).
