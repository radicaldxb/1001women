import type { Metadata } from "next";
import { Libre_Baskerville, Quicksand } from "next/font/google";
import { DeferredExtras } from "@/components/DeferredExtras";
import { site, siteUrl } from "@/data/site";
import "./globals.css";

const sans = Quicksand({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: true,
});

const display = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} – ${site.title}`,
    template: `%s | ${site.name}`,
  },
  description: site.shortDescription,
  applicationName: site.name,
  keywords: [
    "1001 Women",
    "Muslim civilisation",
    "women in science",
    "Islamic history",
    "1001 Inventions",
    "children’s book",
    "education",
    "exhibition",
  ],
  authors: [{ name: "1001 Foundation" }],
  creator: "1001 Foundation",
  publisher: "1001 Foundation",
  category: "education",
  alternates: {
    canonical: "/",
    types: {
      "text/plain": [{ url: "/llms.txt", title: "LLM site summary" }],
    },
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} – ${site.title}`,
    description: site.shortDescription,
    images: [
      {
        url: "/images/og.webp",
        width: 1200,
        height: 630,
        alt: `${site.name} – ${site.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} – ${site.title}`,
    description: site.shortDescription,
    images: ["/images/og.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: site.name,
      url: siteUrl,
      logo: `${siteUrl}/favicon.png`,
      email: site.contactEmail,
      description: site.shortDescription,
      parentOrganization: {
        "@type": "Organization",
        name: site.companyName,
        url: "https://1001foundation.com/",
        identifier: site.companyNumber,
      },
      sameAs: [
        "https://www.youtube.com/user/1001Inventions",
        "https://www.instagram.com/1001inventions/",
        "https://www.linkedin.com/company/1001inventions",
        "https://www.1001inventions.com/",
        "https://1001foundation.com/",
      ],
      founder: { "@id": `${siteUrl}/#person-ahmed-salim` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person-ahmed-salim`,
      name: "Ahmed Salim",
      url: "https://en.wikipedia.org/wiki/Ahmed_Salim",
      sameAs: ["https://en.wikipedia.org/wiki/Ahmed_Salim"],
      jobTitle: "Producer and lead",
      worksFor: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: site.name,
      description: site.shortDescription,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-GB",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: `${site.name} – ${site.title}`,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      description: site.shortDescription,
      inLanguage: "en-GB",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <DeferredExtras />
      </body>
    </html>
  );
}
