import { useEffect, useState } from 'react'
import {
  FaBars, FaBolt, FaCalendarAlt, FaChevronDown, FaChevronUp, FaCreditCard, FaFacebookF,
  FaHandHoldingMedical, FaInstagram, FaLeaf, FaMapMarkedAlt, FaMapMarkerAlt, FaPhone, FaPlay,
  FaSortDown, FaSortUp, FaStar, FaSun, FaTimes, FaDelicious,
} from 'react-icons/fa'
import * as d from './data.js'

const { media } = d

const ICONS = {
  bolt: FaBolt, sun: FaSun, medical: FaHandHoldingMedical, mineral: FaDelicious,
  map: FaMapMarkedAlt, calendar: FaCalendarAlt, card: FaCreditCard, phone: FaPhone,
}

function Icon({ name }) {
  if (name.startsWith('img:')) return <img src={media(name.slice(4))} alt="" />
  const C = ICONS[name]
  return <C aria-hidden="true" />
}

function Button({ href, children, icon, variant = 'green' }) {
  return (
    <a className={`btn btn-${variant}`} href={href}>
      {icon}
      <span>{children}</span>
    </a>
  )
}

/* Curved section edges, standing in for the original wave / mountain dividers. */
function Divider({ shape = 'waves', color, position = 'top' }) {
  const paths = {
    waves: 'M0,40 C180,90 360,0 600,40 C840,80 1020,10 1200,40 L1200,0 L0,0 Z',
    mountains: 'M0,0 L0,30 L180,70 L420,20 L640,80 L860,25 L1040,65 L1200,30 L1200,0 Z',
  }
  return (
    <svg className={`divider divider-${position}`} viewBox="0 0 1200 90" preserveAspectRatio="none" aria-hidden="true">
      <path d={paths[shape]} fill={color} />
    </svg>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <img src={media('Nia-Cane-Logo.png')} alt="Nia Cane — Natural Infused Antioxidants" />
        </a>
        <button className="nav-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={open ? 'nav open' : 'nav'} aria-label="Main">
          {d.nav.map((n) => (
            <a key={n.label} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
          ))}
        </nav>
        <div className="header-cta">
          <Button href={d.phone.href} icon={<FaPhone />}>{d.phone.label}</Button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-text">
        <h1>{d.hero.title}</h1>
        <p>{d.hero.text}</p>
        <div className="btn-row">
          <Button href="#menu" icon={<FaLeaf />}>Menu</Button>
          <Button href="#location" icon={<FaMapMarkerAlt />}>Locations</Button>
        </div>
      </div>
      <div className="hero-image" style={{ backgroundImage: `url(${media('naicane-new-hero-2-scaled.png')})` }} role="img" aria-label="A cup of Nia sugarcane juice beside fresh cane stalks" />
    </section>
  )
}

function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits-media">
        <video className="benefits-video" src={media('niacane-juice-pouring.mp4')} autoPlay muted loop playsInline preload="metadata" />
        <img className="benefits-stalks" src={media('sugar-cane-stalks-2.png')} alt="" />
      </div>
      <div className="benefits-body">
        <h2 className="title">The Health Benefits of Freshly Pressed Raw Sugarcane</h2>
        <div className="benefit-grid">
          {d.benefits.map((b) => (
            <div className="benefit" key={b.title}>
              <div className="benefit-icon"><Icon name={b.icon} /></div>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
        <Button href="#menu">View Menu</Button>
      </div>
    </section>
  )
}

function Favorites() {
  return (
    <section className="favorites">
      <div className="container center">
        <h2 className="title">Favorite Flavors</h2>
        <p className="lead">At Nia Cane, we believe variety is the spice of life. Here are our signature sugar cane infusions.</p>
      </div>
      <div className="scroller" tabIndex={0} aria-label="Favorite flavors">
        {d.favorites.map((f) => (
          <figure className="flavor-card" key={f.title}>
            <img src={media(f.image)} alt={`${f.title} sugarcane juice`} loading="lazy" />
            <figcaption>{f.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

function AboutVideo() {
  const [playing, setPlaying] = useState(false)
  return (
    <section className="about" id="about-us">
      <div className="about-frame">
        {playing ? (
          <iframe src={d.aboutVideo} title="Nia Cane video" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
        ) : (
          <button className="about-poster" style={{ backgroundImage: `url(${media('Sugar-cane-bkg-2.png')})` }} onClick={() => setPlaying(true)} aria-label="Play video">
            <span className="play"><FaPlay /></span>
          </button>
        )}
      </div>
    </section>
  )
}

function Wholesale() {
  const w = d.wholesale
  return (
    <section className="wholesale" style={{ backgroundImage: `url(${media('h2-bg-patton.png')})` }}>
      <Divider shape="mountains" color="#fff" position="top" />
      <img className="wholesale-person" src={media('niacane-customer-red.png')} alt="" />
      <div className="wholesale-body">
        <h2>{w.title}</h2>
        <h3>{w.subtitle}</h3>
        <p>{w.text}</p>
        <div className="counters">
          {w.counters.map((c) => (
            <div className="counter" key={c.title}>
              <img src={media(c.icon)} alt="" />
              <strong>{c.value}%</strong>
              <span>{c.title}</span>
            </div>
          ))}
        </div>
        <Button href="#menu" variant="white">View Menu</Button>
      </div>
      <img className="wholesale-cup" src={media('niacane-cup-general.png')} alt="Nia Cane cup" />
      <Divider shape="waves" color="#fff" position="bottom" />
    </section>
  )
}

function MenuItem({ item }) {
  return (
    <li className="menu-item">
      <img src={media(item.image)} alt="" loading="lazy" />
      <div>
        <h4>
          <span>{item.title}</span>
          {item.price && <em>{item.price}</em>}
        </h4>
        <p>{item.text}</p>
      </div>
    </li>
  )
}

function Menu() {
  const half = Math.ceil(d.flavors.length / 2)
  return (
    <section className="menu" id="menu">
      <div className="menu-panel">
        <div className="menu-head">
          <h2 className="title">Discover Our 20 Signature Flavors</h2>
          <img className="cups" src={media('niacane-cups-2.png')} alt="Small, medium and large cups" />
          <div className="sizes">
            {d.sizes.map((s) => (
              <div key={s.name}>
                <h3>{s.name}</h3>
                <p>{s.price}</p>
              </div>
            ))}
          </div>
          <p className="size-note">Choose 2 flavors. Extra flavor +$1</p>
        </div>
        <div className="menu-cols">
          <ul>{d.flavors.slice(0, half).map((f) => <MenuItem key={f.title} item={f} />)}</ul>
          <ul>{d.flavors.slice(half).map((f) => <MenuItem key={f.title} item={f} />)}</ul>
        </div>
      </div>
    </section>
  )
}

function Specials() {
  return (
    <section className="specials">
      <div className="specials-image" style={{ backgroundImage: `url(${media('niacane-gallon-2.png')})` }} role="img" aria-label="A gallon of Nia Cane sugarcane juice" />
      <div className="specials-list">
        <h2>SPECIAL ITEMS</h2>
        <ul>{d.specials.map((s) => <MenuItem key={s.title} item={s} />)}</ul>
      </div>
      <div className="slushes">
        <h2>ALL NATURAL SLUSHES</h2>
        <ul>{d.slushes.map((s) => <li key={s}>{s}</li>)}</ul>
      </div>
    </section>
  )
}

function Testimonials() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = d.testimonials.length
  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setI((x) => (x + 1) % n), 7000)
    return () => clearInterval(t)
  }, [paused, n])
  const t = d.testimonials[i]
  return (
    <section className="testimonials" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="container center">
        <img className="quote-mark" src={media('h2-down-quorts.svg')} alt="" />
        <h2 className="title">Testimonials</h2>
        <div className="testimonial" key={t.name} aria-live="polite">
          <div className="stars" aria-label="5 out of 5 stars">{[0, 1, 2, 3, 4].map((s) => <FaStar key={s} />)}</div>
          <p>{t.text}</p>
          <img src={media(t.image)} alt="" />
          <h3>{t.name}</h3>
          <span>{t.role}</span>
        </div>
        <div className="dots">
          {d.testimonials.map((x, k) => (
            <button key={x.name} className={k === i ? 'active' : ''} aria-label={`Show testimonial from ${x.name}`} onClick={() => setI(k)} />
          ))}
        </div>
      </div>
      <img className="grapes" src={media('garps-img-01.png')} alt="" />
    </section>
  )
}

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="faq" id="faq">
      <Divider shape="mountains" color="#fff" position="top" />
      <div className="faq-inner">
        <div className="faq-side">
          <img src={media('naia-cane-demo-side-best.png')} alt="Nia — the gold standard in fresh sugarcane juice" loading="lazy" />
          <div className="faq-card">
            <h3>Have Any Queries?</h3>
            <Button href="#menu" variant="dark">Order Now</Button>
          </div>
        </div>
        <div className="faq-list">
          <h2>Frequently Asked Questions</h2>
          {d.faqs.map((f, k) => (
            <div className={open === k ? 'faq-item open' : 'faq-item'} key={f.q}>
              <button aria-expanded={open === k} onClick={() => setOpen(open === k ? -1 : k)}>
                <span>{f.q}</span>
                {open === k ? <FaSortUp /> : <FaSortDown />}
              </button>
              {open === k && <p>{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  // Not connected to a mail service yet. Point this at Formspree / Web3Forms / etc.
  // by adding an action URL and removing the preventDefault below.
  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }
  return (
    <section className="contact" id="contact" style={{ backgroundImage: `url(${media('suagcane-bkg-flip-scaled.png')})` }}>
      <Divider shape="waves" color="#95B444" position="top" />
      <div className="contact-box">
        <img className="spin" src={media('rounded-arrow.svg')} alt="" />
        <h2 className="title">{d.contact.title}</h2>
        <p>{d.contact.text}</p>
        <form onSubmit={submit}>
          <div className="row">
            <input name="your-name" type="text" placeholder="Your Name*" aria-label="Your name" autoComplete="name" required />
            <input name="your-email" type="email" placeholder="Your Email*" aria-label="Your email" autoComplete="email" required />
          </div>
          <input name="your-phonenumber" type="tel" placeholder="Phone Number*" aria-label="Phone number" autoComplete="tel" required />
          <textarea name="your-message" placeholder="Your Message" aria-label="Your message" rows={5} />
          <button type="submit" className="btn btn-green"><span>Send request</span></button>
          {sent && (
            <p className="form-note" role="status">
              This form isn’t connected to email yet. Please call {d.phone.label} or write to {d.footer.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

function Locations() {
  const [i, setI] = useState(0)
  const L = d.locationsIntro
  const loc = d.locations[i]
  return (
    <section className="locations">
      <div className="container center">
        <h2 className="title">{L.heading}</h2>
        <p className="eyebrow">{L.subtitle}</p>
        <h3 className="title small">{L.title}</h3>
        <p className="lead dark">{L.text}</p>
      </div>
      <div className="tabs" id="location">
        <div className="tab-list" role="tablist" aria-label="Locations">
          {d.locations.map((x, k) => (
            <button key={x.name} role="tab" aria-selected={k === i} className={k === i ? 'active' : ''} onClick={() => setI(k)}>
              <img src={media('map-pin-alt.svg')} alt="" />
              <span>{x.name}</span>
            </button>
          ))}
          <address>
            {loc.lines.map((l) => <span key={l}>{l}</span>)}
            <a href={loc.tel}>{loc.phone}</a>
            <a href={loc.map} target="_blank" rel="noopener noreferrer">Get directions</a>
          </address>
        </div>
        <iframe
          key={loc.name}
          title={`Map of the ${loc.name} location`}
          src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.query)}&z=14&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section className="gallery" style={{ backgroundImage: `url(${media('stalk-divider-horizontal.png')})` }}>
      <div className="gallery-row">
        {d.gallery.map((g) => (
          <a key={g} href={d.footer.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Nia Cane on Instagram">
            <img src={media(g)} alt="" loading="lazy" />
            <span><FaInstagram /></span>
          </a>
        ))}
      </div>
    </section>
  )
}

function Toggle({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="toggle">
      <button aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>{title}</span>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {open && <div className="toggle-body">{children}</div>}
    </div>
  )
}

function Footer() {
  const f = d.footer
  const [hou, katy, sugar] = d.locations
  return (
    <footer className="footer">
      <div className="container center">
        <h2 className="title">{f.heading}</h2>
        <p className="lead green">{f.text}</p>
        <div className="feature-row">
          {f.features.map((x) => (
            <div key={x.title}>
              <span className="feature-icon"><Icon name={x.icon} /></span>
              <h3>{x.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-panel">
        <div>
          <img className="footer-logo" src={media('nia-logo-inverted-1.png')} alt="Nia Cane" />
          <p>{f.about}<b>{f.aboutBold}</b> today!</p>
          <div className="social">
            <a href={f.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href={f.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
        <div>
          <h3>HOUSTON</h3>
          <ul className="plain">
            {hou.lines.map((l) => <li key={l}><a href={hou.map} target="_blank" rel="noopener noreferrer">{l}</a></li>)}
            <li><a href={hou.tel}>{hou.phone}</a></li>
            <li><a href={`mailto:${f.email}`}>{f.email}</a></li>
          </ul>
        </div>
        <div>
          {[katy, sugar].map((x) => (
            <Toggle key={x.name} title={x.name}>
              <ul className="plain">
                {x.lines.map((l) => <li key={l}><a href={x.map} target="_blank" rel="noopener noreferrer">{l}</a></li>)}
                <li><a href={x.tel}>{x.phone}</a></li>
              </ul>
            </Toggle>
          ))}
          <Toggle title="Menu">
            <ul className="plain">
              {d.nav.map((n) => <li key={n.label}><a href={n.href}>{n.label}</a></li>)}
            </ul>
          </Toggle>
        </div>
      </div>
      <div className="footer-bar">
        <span>© {new Date().getFullYear()} Nia Cane</span>
        <img src={media('payment-group.png')} alt="Accepted payment cards" />
      </div>
    </footer>
  )
}

function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <a href="#top" className={show ? 'to-top show' : 'to-top'} aria-label="Back to top">
      <img src={media('lil-sticky-1.png')} alt="" />
    </a>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Favorites />
        <AboutVideo />
        <Wholesale />
        <Menu />
        <Specials />
        <Testimonials />
        <Faq />
        <Contact />
        <Locations />
        <Gallery />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
