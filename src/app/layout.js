import { League_Spartan, Montserrat } from "next/font/google";
import React from "react";
import "./globals.css";

import NavBarServer from "../components/server/navbarS.jsx";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  weight: "400",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: "400",
});

export const metadata = {
  title: "Custom Website Design Kelowna | Teleta Development",
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
      <head></head>
      <body
        className={`${leagueSpartan.variable} ${montserrat.variable} antialiased`}
      >
        <NavBarServer />
        {children}
      </body>
    </html>
  );
}
