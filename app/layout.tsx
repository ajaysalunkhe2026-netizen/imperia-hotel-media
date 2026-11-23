import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://imperiaboutiquehotel.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Imperia Boutique Hotel | The Art of a Refined Stay",
    template: "%s | Imperia Boutique Hotel",
  },
  description:
    "Discover Imperia Boutique Hotel in Rabale, Navi Mumbai. Visit the official hotel website for current information and enquiries.",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Imperia Boutique Hotel",
    title: "Imperia Boutique Hotel | The Art of a Refined Stay",
    description: "A visual introduction to Imperia Boutique Hotel, Rabale, Navi Mumbai.",
  },
  robots: { index: false, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111411",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
