import { LeagueSpartan, Montserrat } from "next/font/google";
import "./globals.css";

const leagueSpartan = LeagueSpartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  weight: 400,
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: 400,
});

export const metadata = {
  title: "Teleta Development",
  description:
    "Teleta Development offers affordable custom web development and design for Kelowna businesses. Specializing in responsive, SEO-friendly websites.",
  keywords:
    "web development, web design, Kelowna, British Columbia, Canada, responsive, SEO, affordable, custom, small business",
  author: "Teleta Development",
  viewport: "width=device-width, initial-scale=1",
  charset: "UTF-8",
  og: {
    title: "Teleta Development",
    description:
      "Teleta Development offers affordable custom web development and design for Kelowna businesses, specializing in responsive, SEO-friendly websites.",
    url: "https://www.TeletaDevelopment.com",
    image: "https://imgur.com/a/8kkwlBm.jpg", // Replace with an image URL for social media
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teleta Development",
    description:
      "Teleta Development offers affordable custom web development and design for Kelowna businesses, specializing in responsive, SEO-friendly websites.",
    image: "https://imgur.com/a/8kkwlBm.jpg", // Replace with an image URL for Twitter
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Teleta Development",
    "url": "https://www.TeletaDevelopment.com",
    "description": "Affordable custom web development and design for Kelowna businesses.",
    "image": "https://imgur.com/a/8kkwlBm.jpg",
    "sameAs": [
      "https://www.facebook.com/TeletaDevelopment",
      "https://www.instagram.com/teleta_development/",
      "https://www.linkedin.com/company/teleta-development"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.TeletaDevelopment.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
