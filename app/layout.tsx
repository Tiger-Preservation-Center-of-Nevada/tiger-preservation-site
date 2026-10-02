import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://www.tigerpreservationcenter.org"),
  openGraph: {
    type: "website",
    siteName: "The Tiger Preservation Center of Nevada",
    title: "The Tiger Preservation Center of Nevada",
    description:
      "A 501(c)(3) nonprofit, non-breeding rescue center giving lifetime homes to abused and neglected exotic animals.",
    images: [
      {
        url: "/assets/shoka.jpg",
        width: 609,
        height: 332,
        alt: "Shoka, a white tiger resting at the Tiger Preservation Center of Nevada",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": "https://www.tigerpreservationcenter.org/#org",
  name: "The Tiger Preservation Center of Nevada",
  alternateName: "TPC-N",
  description:
    "A 501(c)(3) nonprofit, non-breeding rescue center providing lifetime homes to abused and neglected exotic animals — tigers, lions, big cats, and timber wolves.",
  nonprofitStatus: "https://schema.org/Nonprofit501c3",
  taxID: "83-0883398",
  url: "https://www.tigerpreservationcenter.org",
  image: "https://www.tigerpreservationcenter.org/assets/shoka.jpg",
  telephone: "+1-541-251-2287",
  email: "info@tigerpreservationcenter.org",
  potentialAction: {
    "@type": "DonateAction",
    name: "Donate to The Tiger Preservation Center of Nevada",
    target: "https://www.tigerpreservationcenter.org/donate",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "92 McDaniel Way",
    addressLocality: "Crescent Valley",
    addressRegion: "NV",
    postalCode: "89821",
    addressCountry: "US",
  },
};

const webSiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://www.tigerpreservationcenter.org",
  name: "The Tiger Preservation Center of Nevada",
  alternateName: "TPC-N",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${karla.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* gate the scroll-reveal hidden state on JS actually running, so
            content is never invisible to crawlers or no-JS visitors */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([jsonLd, webSiteLd]),
          }}
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
        <Analytics />
      </body>
    </html>
  );
}
