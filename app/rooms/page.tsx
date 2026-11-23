import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rooms & Suites | Imperia Boutique Hotel Rabale",
  description: "Explore Amber Stone and Opal Suite room categories and published room details at Imperia Boutique Hotel, Rabale, Navi Mumbai.",
  alternates: { canonical: "https://imperiaboutiquehotel.info/rooms" },
  openGraph: {
    type: "website",
    url: "https://imperiaboutiquehotel.info/rooms",
    title: "Rooms & Suites | Imperia Boutique Hotel Rabale",
    description: "Explore Amber Stone and Opal Suite room categories and published room details at Imperia Boutique Hotel, Rabale, Navi Mumbai.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rooms & Suites | Imperia Boutique Hotel Rabale",
    description: "Explore Amber Stone and Opal Suite room categories and published room details at Imperia Boutique Hotel, Rabale, Navi Mumbai.",
  },
};

const rooms = [
  { name: "Amber Stone", label: "THE AMBER STONE ROOM", size: "220 sq. ft.", bed: "King bed", view: "City view", occupancy: "Up to 2 adults", description: "A comfortable room category listed with a king bed and city view." },
  { name: "Opal Suite", label: "THE OPAL SUITE", size: "350 sq. ft.", view: "City view", occupancy: "Additional living space", description: "A larger suite category listed with a city view and additional living space." },
];

export default function RoomsPage() {
  return <main className="site-shell">
    <div className="topbar"><span>Rabale · Navi Mumbai · Maharashtra</span><span>Rooms &amp; Suites</span></div>
    <header className="nav">
      <a className="brand" href="/" aria-label="Imperia Boutique Hotel home"><span className="brand-mark">I</span><span><span className="brand-name">IMPERIA</span><span className="brand-sub">BOUTIQUE HOTEL</span></span></a>
      <nav className="nav-links" aria-label="Main navigation"><a href="/">Home</a><a href="/rooms" aria-current="page">Rooms</a><a href="/contact">Contact</a></nav>
      <a className="nav-cta" href="/contact">Contact the hotel ↗</a>
    </header>
    <section className="rooms-section">
      <div className="rooms-heading"><div className="intro-kicker">Stay at Imperia</div><h2>Rooms &amp; Suites</h2><p>Explore the same room categories and published details shown on the main Imperia Boutique Hotel website.</p></div>
      <div className="room-detail-grid">{rooms.map(room => <article className="room-detail-card" key={room.name}>
        <div className="room-card-top"><span>{room.label}</span><span>IMPERIA · RABALE</span></div>
        <div className="room-card-body"><h3>{room.name}</h3><p className="room-description">{room.description}</p>
          <div className="room-specs"><div><small>ROOM SIZE</small><strong>{room.size}</strong></div><div><small>VIEW</small><strong>{room.view}</strong></div></div>
          <div><small>DETAILS</small><br/><strong>{room.occupancy}</strong></div>
          <a className="text-link" href="/contact">ENQUIRE ABOUT THIS ROOM <span>↗</span></a>
        </div>
      </article>)}</div>
      <p className="room-disclaimer">Room names, published dimensions and available room details are aligned with the main hotel website. Please confirm availability, rates, inclusions and specific facilities directly with the property before booking.</p>
    </section>
    <footer className="footer"><div className="footer-top"><a className="brand" href="/"><span className="brand-mark">I</span><span><span className="brand-name">IMPERIA</span><span className="brand-sub">BOUTIQUE HOTEL</span></span></a><p className="footer-copy">Hotel information and published room details for Imperia Boutique Hotel, Rabale, Navi Mumbai.</p><a className="button-light" href="/contact">Contact the hotel ↗</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Imperia Boutique Hotel</span><span><a href="/">Home</a> · <a href="/rooms">Rooms</a> · <a href="/contact">Contact</a></span><span>Rabale · Navi Mumbai · India</span></div></footer>
  </main>;
}
