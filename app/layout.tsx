import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://imperiaboutiquehotel.info";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Imperia Boutique Hotel Rabale | Rooms, Facilities & Hotel Information",
    template: "%s | Imperia Boutique Hotel",
  },
  description:
    "Explore Amber Stone and Opal Suite room details, published room dimensions, hotel amenities, timings and location for Imperia Boutique Hotel in Rabale, Navi Mumbai.",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Imperia Boutique Hotel",
    title: "Imperia Boutique Hotel Rabale | Rooms & Hotel Information",
    description:
      "Discover Amber Stone and Opal Suite room categories, published amenities and hotel information for Imperia Boutique Hotel, Rabale, Navi Mumbai.",
    images: [{ url: "https://imperiaboutiquehotel.in/images/imperia-hotel-exterior.jpg", width: 1200, height: 630, alt: "Imperia Boutique Hotel, Rabale, Navi Mumbai" }],
  },
  twitter: { card: "summary_large_image", title: "Imperia Boutique Hotel Rabale", description: "Amber Stone and Opal Suite room information, amenities and hotel details in Rabale, Navi Mumbai.", images: ["https://imperiaboutiquehotel.in/images/imperia-hotel-exterior.jpg"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111411",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
