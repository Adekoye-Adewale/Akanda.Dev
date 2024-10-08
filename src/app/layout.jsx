import Script from "next/script";
import { Home } from "./_schema";
import MainLayout from "../components/mainLayoutHeader";
import SiteFooter from "@/components/siteFooter";
import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://akanda.netlify.app'),
  title: "Akanda Dev",
  description: "A Creative software engineer with experience in designing and implementing user-friendly interfaces and functional software solutions for complex business problems.",
  author: `Adekoye Adewale`,
  openGraph: {
    title: 'Akanda Dev',
    description: 'With a focus on the digital realm, Akanda specializes in website design and development, mobile app development, analytics, and SEO...',
    siteName: 'Akanda.Dev',
    images: [
      {
        url: `https://images.ctfassets.net/ago9pp4p48sn/25qMJOooHhY6LAWH1r4npa/63f73c409dc32c12f63ad7c8321aeb30/opengraph-image.png.png`,
        width: 800,
        height: 400,
        alt: 'Akanda Dev Profile Card',
      },
    ],
    type: `website`,
    url: `https://www.akanda.dev/`,
    locale: "en_NG",
  },
  twitter: {
    author: `Adekoye Adewale`,
    card: `summary_large_image`,
    site: `@__akanda__`,
    creator: `@__akanda__`,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: { 
    pinterest: "nopin",
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#9800BE' },
    { media: '(prefers-color-scheme: dark)', color: '#D7AD0D' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(Home),
        }}
      />
      <Script
        id="zoho-chat"
        dangerouslySetInnerHTML={{
          __html: `
            window.$zoho = window.$zoho || {};
            $zoho.salesiq = $zoho.salesiq || { ready: function() {} };
          `,
        }}
      />
      <Script
        id="zsiqscript"
        src={`https://salesiq.zohopublic.com/widget?wc=${process.env.ZOHO_SIQ_URL}`}
        defer
      />
      <body>
        <MainLayout/>
          {children}
        <SiteFooter/>
      </body>
    </html>
  );
}
