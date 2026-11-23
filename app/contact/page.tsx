import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Location | Imperia Boutique Hotel Rabale",
  description: "Contact Imperia Boutique Hotel in Rabale, Navi Mumbai by phone or email. Find the hotel address and published check-in and check-out timings.",
  alternates: { canonical: "https://imperiaboutiquehotel.info/contact" },
  openGraph: {
    type: "website",
    url: "https://imperiaboutiquehotel.info/contact",
    title: "Contact & Location | Imperia Boutique Hotel Rabale",
    description: "Contact Imperia Boutique Hotel in Rabale, Navi Mumbai by phone or email. Find the hotel address and published check-in and check-out timings.",
  },
  twitter: {
    card: "summary",
    title: "Contact & Location | Imperia Boutique Hotel Rabale",
    description: "Contact Imperia Boutique Hotel in Rabale, Navi Mumbai by phone or email.",
  },
};

export default function ContactPage() {
  return <main className="site-shell">
    <div className="topbar"><span>Rabale · Navi Mumbai · Maharashtra</span><span>Contact &amp; Location</span></div>
    <header className="nav">
      <a className="brand" href="/" aria-label="Imperia Boutique Hotel home"><span className="brand-mark">I</span><span><span className="brand-name">IMPERIA</span><span className="brand-sub">BOUTIQUE HOTEL</span></span></a>
      <nav className="nav-links" aria-label="Main navigation"><a href="/">Home</a><a href="/rooms">Rooms</a><a href="/contact" aria-current="page">Contact</a></nav>
      <a className="nav-cta" href="tel:+918369011041">Call the hotel ↗</a>
    </header>
    <section className="intro"><div><div className="intro-kicker">Get in touch</div><h2>We look forward<br/>to welcoming you.</h2></div><div className="intro-copy"><p>For current room availability, rates, taxes, inclusions and booking enquiries, please contact the hotel directly.</p>
      <p><strong>Phone</strong><br/><a href="tel:+918369011041">+91 83690 11041</a><br/><a href="tel:+917700003843">+91 77000 03843</a></p>
      <p><strong>Email</strong><br/><a href="mailto:imperiabotiquehotel@gmail.com">imperiabotiquehotel@gmail.com</a></p>
    </div></section>
    <section className="location"><div><div className="intro-kicker">Find your way</div><h2>Visit Imperia.</h2>
      <p>MIDC, Plot No. P-52, Thane–Belapur Road, MIDC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701, India.</p>
      <p><strong>Check-in:</strong> 12:00 PM<br/><strong>Check-out:</strong> 11:00 AM</p>
      <p>Published timings; please reconfirm before arrival.</p>
      <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Imperia+Boutique+Hotel+Rabale+Navi+Mumbai" target="_blank" rel="noreferrer">Open location in maps <span>↗</span></a>
    </div><div className="location-visual" role="img" aria-label="Illustrative location image"/></section>
    <footer className="footer"><div className="footer-top"><a className="brand" href="/"><span className="brand-mark">I</span><span><span className="brand-name">IMPERIA</span><span className="brand-sub">BOUTIQUE HOTEL</span></span></a><p className="footer-copy">Imperia Boutique Hotel · Rabale · Navi Mumbai</p><a className="button-light" href="https://imperiaboutiquehotel.in/" target="_blank" rel="noreferrer">Main hotel website ↗</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Imperia Boutique Hotel</span><span><a href="/">Home</a> · <a href="/rooms">Rooms</a> · <a href="/contact">Contact</a></span><span>Rabale · Navi Mumbai · India</span></div></footer>
  </main>;
}
