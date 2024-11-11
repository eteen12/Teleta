import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  title: 'Teleta Development | Custom Website Design Kelowna',
  description:
    'Website design and development services for Kelowna businesses. Affordable, custom, responsive, and SEO-friendly websites.',
  keywords:
    'web development, web design, Kelowna, British Columbia, Canada, responsive, SEO, affordable, custom, small business',
  author: 'Teleta Development',
  charset: 'UTF-8',
  og: {
    title: 'Teleta Development',
    description:
      'Teleta Development offers affordable custom web development and design for Kelowna businesses, specializing in responsive, SEO-friendly websites.',
    url: 'https://TeletaDevelopment.com',
    image: 'https://TeletaDevelopment.com/teletaLogo.png',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teleta Development',
    description:
      'Teleta Development offers affordable custom web development and design for Kelowna businesses, specializing in responsive, SEO-friendly websites.',
    image: 'https://TeletaDevelopment.com/teletaLogo.png',
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Teleta Development',
    url: 'https://TeletaDevelopment.com',
    description:
      'Affordable custom web development and design for Kelowna businesses.',
    image: 'https://TeletaDevelopment.com/teletaLogo.png',
    sameAs: [
      'https://www.facebook.com/TeletaDevelopment',
      'https://www.instagram.com/Teleta_Development/',
      'https://www.linkedin.com/company/teleta-development',
      'https://www.youtube.com/@TeletaDevelopment',
      'https://github.com/eteen12',
    ],
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://TeletaDevelopment.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta property="og:image" content="https://TeletaDevelopment.com/teletaLogo.png" alt="Teleta Development Logo" />
        <title>{metadata.title}</title>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Teleta." />
        <link rel="manifest" href="/site.webmanifest" />

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
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
