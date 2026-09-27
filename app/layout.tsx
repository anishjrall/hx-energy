import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.legalName} \u2014 Heat Pumps, Solar, Water Treatment & EPC`,
    template: `%s \u2014 ${SITE.name}`,
  },
  description:
    "HX Energy Systems is a Mysuru-based engineering company delivering heat pump systems, solar PV, water treatment, pumping solutions and turnkey EPC projects for commercial, industrial, institutional and government clients.",
  keywords: [
    "heat pump systems India",
    "industrial solar EPC",
    "commercial RO plant",
    "water treatment Mysuru",
    "EPC engineering company Karnataka",
  ],
  openGraph: {
    title: `${SITE.legalName} \u2014 Engineering Trust. Delivering Excellence.`,
    description:
      "End-to-end engineering across heat pumps, solar PV, water treatment, pumping and turnkey EPC \u2014 one accountable partner from design to O&M.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/hero-industrial-facility.png", alt: "HX Energy industrial facility" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.legalName} \u2014 Engineering Trust. Delivering Excellence.`,
    description:
      "End-to-end engineering across heat pumps, solar PV, water treatment, pumping and turnkey EPC.",
  },
  icons: {
    icon: "/hx-energy-logo.png",
  },
  alternates: {
    canonical: SITE.url,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.legalName,
      url: SITE.url,
      logo: `${SITE.url}/hx-energy-logo.png`,
      email: SITE.email,
      telephone: SITE.phone,
      description: metadata.description,
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE.url}/#localbusiness`,
      name: SITE.legalName,
      url: SITE.url,
      image: `${SITE.url}/images/hero-industrial-facility.png`,
      logo: `${SITE.url}/hx-energy-logo.png`,
      telephone: SITE.phone,
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address,
        addressLocality: "Mysuru",
        addressRegion: "Karnataka",
        postalCode: "570022",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      parentOrganization: {
        "@id": `${SITE.url}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="bg-paper text-charcoal-800">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-copper-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
