import type { Metadata, Viewport } from "next";
import { Newsreader, Karla } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import RevealObserver from "@/components/RevealObserver";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "The Tiger Preservation Center of Nevada",
    template: "%s · The Tiger Preservation Center of Nevada",
  },
  description:
    "The Tiger Preservation Center of Nevada — a 501(c)(3) nonprofit, non-breeding rescue center giving lifetime homes to abused and neglected exotic animals: tigers, lions, big cats, and timber wolves.",
  // Keep out of search results until the official domain points at this deployment.
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    title: "The Tiger Preservation Center of Nevada",
    description:
      "A 501(c)(3) nonprofit, non-breeding rescue center giving lifetime homes to abused and neglected exotic animals.",
    images: ["/assets/shoka.jpg"],
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%90%85%3C/text%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "The Tiger Preservation Center of Nevada",
  alternateName: "TPC-N",
  description:
    "A 501(c)(3) nonprofit, non-breeding rescue center providing lifetime homes to abused and neglected exotic animals — tigers, lions, big cats, and timber wolves.",
  nonprofitStatus: "https://schema.org/Nonprofit501c3",
  taxID: "83-0883398",
  url: "https://tigerpreservationcenter.org",
  telephone: "+1-541-251-2287",
  email: "animalrescue4life@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "92 McDaniel Way",
    addressLocality: "Crescent Valley",
    addressRegion: "NV",
    postalCode: "89821",
    addressCountry: "US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${newsreader.variable} ${karla.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <aside className="announce" aria-label="Visitor notice">
          501(c)(3) nonprofit registered in Nevada &middot; We are not open to
          the public at this time
        </aside>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <RevealObserver />
      </body>
    </html>
  );
}
