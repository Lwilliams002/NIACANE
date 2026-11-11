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

## Contact form (Resend)

GitHub Pages only serves static files, so the form posts to a small Cloudflare Worker in `worker/` that holds the Resend API key and sends the email.

One-time setup:

1. In Resend, verify the `niacane.com` domain (adds DNS records) and create an API key.
2. Check `CONTACT_FROM` in `worker/wrangler.toml`.
3. Deploy the worker. `CONTACT_TO` is the inbox that receives requests; it is a secret so the address stays out of this public repo:

   ```bash
   cd worker
   npx wrangler login
   npx wrangler deploy
   npx wrangler secret put RESEND_API_KEY
   npx wrangler secret put CONTACT_TO
   ```

4. Copy the URL that `wrangler deploy` prints into `contactEndpoint` in `src/data.js`, commit and push.

Until step 4 is done the form shows a "call or email us" message instead of sending.
