const amenities = [
  ["01", "Thoughtful hospitality"],
  ["02", "Comfort-led rooms"],
  ["03", "Dining experiences"],
  ["04", "Convenient location"],
  ["05", "Attentive service"],
  ["06", "Spaces to unwind"],
];

const rooms = [
  {
    name: "Deluxe Room",
    eyebrow: "A COMFORTABLE CITY STAY",
    size: "220 sq. ft. / 20 sq. m.",
    bed: "One king bed",
    view: "City view",
    description:
      "A welcoming, thoughtfully arranged room for guests visiting Rabale for business or leisure. The Deluxe Room brings together a king bed, a city view and practical in-room essentials.",
    features: [
      "Air conditioning",
      "Wi-Fi",
      "In-room dining",
      "Mineral water",
      "Work desk",
      "Electric kettle",
      "Hot water",
      "Fire extinguisher",
      "Emergency exit map",
      "CCTV in property areas",
    ],
  },
  {
    name: "Suite Room",
    eyebrow: "MORE ROOM TO UNWIND",
    size: "350 sq. ft. / 33 sq. m.",
    bed: "One king bed",
    view: "City view",
    description:
      "A more spacious stay with a separate living area. The Suite Room combines a king bed with additional space to sit, work and relax, alongside the listed in-room amenities.",
    features: [
      "Separate living area",
      "Air conditioning",
      "Wi-Fi",
      "In-room dining",
      "Mineral water",
      "Laundry service",
      "Mini fridge / refrigerator",
      "Electric kettle",
      "Dining area and table",
      "Work desk",
      "Cash safety locker",
      "Bathtub and Jacuzzi",
      "Shaving mirror",
      "Toiletries and dental kit",
      "Hot and cold water",
      "TV and telephone",
      "Sofa and centre table",
      "Housekeeping and room service",
      "Fire extinguisher",
      "Emergency exit map",
      "CCTV in property areas",
    ],
  },
];

export default function Home() {
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Imperia Boutique Hotel",
    url: "https://imperiaboutiquehotel.info/",
    telephone: ["+91 83690 11041", "+91 77000 03843"],
    email: "imperiabotiquehotel@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. P-52, MIDC, Thane–Belapur Road, Rabale",
      addressLocality: "Navi Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400701",
      addressCountry: "IN",
    },
  };

  return (
    <main className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }} />
      <div className="topbar">
        <span>Rabale · Navi Mumbai · Maharashtra</span>
        <span>Official hotel information & visual journal</span>
      </div>
      <header className="nav">
        <a className="brand" href="#home" aria-label="Imperia Boutique Hotel home">
          <span className="brand-mark">I</span>
          <span><span className="brand-name">IMPERIA</span><span className="brand-sub">BOUTIQUE HOTEL</span></span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#story">Our story</a><a href="#rooms">Rooms</a><a href="#gallery">Gallery</a><a href="#experience">The experience</a>
        </nav>
        <a className="nav-cta" href="https://imperiaboutiquehotel.in/" target="_blank" rel="noreferrer">Main hotel website ↗</a>
      </header>

      <section className="hero" id="home">
        <div className="hero-image" role="img" aria-label="Hotel-inspired illustrative photograph; official property photograph to be added" />
        <div className="hero-content">
          <div className="eyebrow">An introduction to Imperia</div>
          <h1>The art of<br />a refined stay.</h1>
          <p>Discover the rooms, spaces and thoughtful details of Imperia Boutique Hotel, Rabale, Navi Mumbai.</p>
          <a className="button-light" href="#rooms">Explore rooms <span>↓</span></a>
        </div>
        <div className="hero-index">01 — 04</div>
      </section>

      <section className="intro" id="story">
        <div><div className="intro-kicker">The Imperia perspective</div><h2>More than a place to stay.</h2></div>
        <div className="intro-copy">
          <p>Welcome to Imperia Boutique Hotel — a considered address in Rabale, Navi Mumbai. This information and media space introduces the property, its room categories and the details that shape a comfortable stay.</p>
          <p>Explore the room information below. For current rates, taxes, inclusions and availability, please contact the hotel directly or visit the main hotel website.</p>
          <a className="text-link" href="https://imperiaboutiquehotel.in/" target="_blank" rel="noreferrer">Visit the main hotel website <span>↗</span></a>
        </div>
      </section>

      <section className="rooms-section" id="rooms">
        <div className="rooms-heading">
          <div className="intro-kicker">Stay at Imperia</div>
          <h2>Rooms &amp; Suites</h2>
          <p>Explore the room categories and facilities listed for Imperia Boutique Hotel.</p>
        </div>
        <div className="room-detail-grid">
          {rooms.map((room) => (
            <article className="room-detail-card" key={room.name}>
              <div className="room-card-top"><span>{room.eyebrow}</span><span>IMPERIA · RABALE</span></div>
              <div className="room-card-body">
                <h3>{room.name}</h3>
                <p className="room-description">{room.description}</p>
                <div className="room-specs">
                  <div><small>ROOM SIZE</small><strong>{room.size}</strong></div>
                  <div><small>BED</small><strong>{room.bed}</strong></div>
                  <div><small>VIEW</small><strong>{room.view}</strong></div>
                </div>
                <h4>In-room facilities</h4>
                <ul className="room-feature-list">{room.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
        <p className="room-disclaimer">Room dimensions and facilities are based on details supplied for the hotel website. Please confirm current availability, exact facilities, applicable charges and service timings directly with the property before booking.</p>
      </section>

      <section className="feature-band" id="gallery">
        <div className="section-heading"><div className="eyebrow">A closer look</div><h2>Spaces. Details. Moments.</h2><p>Explore the visual collection of Imperia Boutique Hotel. Official property photographs and video stories can be added to this gallery.</p></div>
        <div className="gallery-grid">
          <a className="gallery-card" href="#experience"><div className="gallery-photo photo-one"/><div className="gallery-label"><small>Discover</small><strong>The property</strong></div></a>
          <a className="gallery-card" href="#rooms"><div className="gallery-photo photo-two"/><div className="gallery-label"><small>Rest & recharge</small><strong>Guest rooms</strong></div></a>
          <a className="gallery-card" href="#experience"><div className="gallery-photo photo-three"/><div className="gallery-label"><small>Made for comfort</small><strong>Interiors</strong></div></a>
          <a className="gallery-card" href="#experience"><div className="gallery-photo photo-four"/><div className="gallery-label"><small>The finer points</small><strong>Details</strong></div></a>
        </div>
      </section>

      <section className="amenities" id="experience">
        <div><div className="intro-kicker">The experience</div><h2>Considered in every detail.</h2></div>
        <div className="amenity-list">{amenities.map(([number, label]) => <div className="amenity" key={number}><b>{number}</b><span>{label}</span></div>)}</div>
      </section>

      <section className="location">
        <div><div className="intro-kicker">Find your way</div><h2>In the heart of<br />Navi Mumbai.</h2>
          <p>Imperia Boutique Hotel is located in the Rabale MIDC area, along Thane–Belapur Road — a convenient address for business and city stays.</p>
          <p>MIDC, Plot No. P-52, Thane–Belapur Road, MIDC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701, India.</p>
          <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Imperia+Boutique+Hotel+Rabale+Navi+Mumbai" target="_blank" rel="noreferrer">Open location in maps <span>↗</span></a>
        </div>
        <div className="location-visual" role="img" aria-label="Illustrative architectural city photograph" />
      </section>
      <footer className="footer">
        <div className="footer-top">
          <a className="brand" href="#home"><span className="brand-mark">I</span><span><span className="brand-name">IMPERIA</span><span className="brand-sub">BOUTIQUE HOTEL</span></span></a>
          <p className="footer-copy">Hotel information, room details and visual introduction to Imperia Boutique Hotel, Rabale, Navi Mumbai.</p>
          <a className="button-light" href="https://imperiaboutiquehotel.in/" target="_blank" rel="noreferrer">Main hotel website ↗</a>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Imperia Boutique Hotel</span><span>Hotel information & media</span><span>Rabale · Navi Mumbai · India</span></div>
      </footer>
    </main>
  );
}
