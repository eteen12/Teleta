import { League_Spartan, Montserrat } from "next/font/google";
import React from "react";
import "./globals.css";

import NavBarClient from "@/components/client/navBarClient";
import Footer from "@/components/server/footer";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Teleta Development | Custom Website Design Kelowna",
  description:
    "Website design and development services for Kelowna businesses. Affordable, custom, responsive, and SEO-friendly websites.",
  keywords:
    "web development, web design, Kelowna, British Columbia, Canada, responsive, SEO, affordable, custom, small business",
  author: "Teleta Development",
  charset: "UTF-8",
  og: {
    title: "Teleta Development",
    description:
      "Teleta Development offers affordable custom web development and design for Kelowna businesses, specializing in responsive, SEO-friendly websites.",
    url: "https://www.TeletaDevelopment.com",
    image: "https://www.TeletaDevelopment.com/teletaLogoShare.jpg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teleta Development",
    description:
      "Teleta Development offers affordable custom web development and design for Kelowna businesses, specializing in responsive, SEO-friendly websites.",
    image: "https://www.TeletaDevelopment.com/teletaLogoShare.jpg",
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Teleta Development",
    url: "https://www.TeletaDevelopment.com",
    description:
      "Affordable custom web development and design for Kelowna businesses.",
    image: "https://www.TeletaDevelopment.com/teletaLogoShare.jpg",
    sameAs: [
      "https://www.facebook.com/TeletaDevelopment",
      "https://www.instagram.com/teleta_development/",
      "https://www.linkedin.com/company/teleta-development",
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.TeletaDevelopment.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <link rel="icon" href="/teletaLogo.ico" type="image/x-icon" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        {/* Add Open Graph and Twitter meta tags */}
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:image" content={metadata.og.image} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />
        {/* Add Schema.org markup for Google+ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.schema) }}
        />
      </head>
      <body
        className={`${leagueSpartan.variable} ${montserrat.variable} antialiased`}
      >
        <NavBarClient />
        {children}
        <Footer />
      </body>
    </html>
  );
}
