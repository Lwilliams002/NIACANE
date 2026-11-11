// Contact-form mail function for niacane.com.
// Receives the form as JSON, validates it, and sends one email through Resend.
// The Resend API key lives here as a secret; it is never shipped to the browser.
//
// Settings (see wrangler.toml and README):
//   RESEND_API_KEY   secret   Resend API key
//   CONTACT_TO       var      inbox that receives the requests
//   CONTACT_FROM     var      sender on a domain verified in Resend
//   ALLOWED_ORIGINS  var      comma-separated sites allowed to post here

const MAX = { name: 100, email: 200, phone: 40, message: 4000 }

function cors(request, env) {
  const origin = request.headers.get('Origin') || ''
  const allowed = (env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean)
  const ok = allowed.includes(origin)
  return {
    ok,
    headers: {
      'Access-Control-Allow-Origin': ok ? origin : allowed[0] || '',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
      Vary: 'Origin',
    },
  }
}

const clean = (v, max) => String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max)

export default {
  async fetch(request, env) {
    const { ok, headers } = cors(request, env)
    const reply = (status, body) =>
      new Response(JSON.stringify(body), { status, headers: { ...headers, 'Content-Type': 'application/json' } })

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers })
    if (request.method !== 'POST') return reply(405, { error: 'Method not allowed' })
    if (!ok) return reply(403, { error: 'Origin not allowed' })

    let data
    try {
      data = await request.json()
    } catch {
      return reply(400, { error: 'Invalid request' })
    }

    // Honeypot field: real visitors never see or fill it. Pretend success to bots.
    if (data.company) return reply(200, { ok: true })

    const name = clean(data['your-name'], MAX.name)
    const email = clean(data['your-email'], MAX.email)
    const phone = clean(data['your-phonenumber'], MAX.phone)
    const message = String(data['your-message'] ?? '').trim().slice(0, MAX.message)

    if (!name || !phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return reply(400, { error: 'Please fill in your name, a valid email and phone number.' })
    }
    if (!env.RESEND_API_KEY || !env.CONTACT_TO || !env.CONTACT_FROM) {
      return reply(500, { error: 'Mail is not configured' })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: env.CONTACT_FROM,
        to: env.CONTACT_TO.split(',').map((s) => s.trim()),
        reply_to: email,
        subject: `Website request from ${name}`,
        text: `New request from the Nia Cane website\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message || '(none)'}\n`,
      }),
    })

    if (!res.ok) {
      console.error('Resend error', res.status, await res.text())
      return reply(502, { error: 'Could not send the message' })
    }
    return reply(200, { ok: true })
  },
}
