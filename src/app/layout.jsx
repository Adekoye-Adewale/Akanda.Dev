import Script from "next/script";
import { Home } from "./_schema";
import MainLayout from "../components/mainLayoutHeader";
import SiteFooter from "@/components/siteFooter";
import "./globals.css";

export const metadata = {
  title: "Akanda dev",
  description: "A Creative software engineer with experience in designing and implementing user-friendly interfaces and functional software solutions for complex business problems.",
  author: `Adekoye Adewale`,
  openGraph: {
    title: 'Akanda dev',
    description: 'With a focus on the digital realm, Akanda specializes in website design and development, mobile app development, analytics, and SEO...',
    type: `website`,
    url: `https://www.akanda.dev/`,
    img: `/images/metaPreviewImage.png`,
    locale: "en_NG",
  },
  twitter: {
    author: `Adekoye Adewale`,
    card: `summary_large_image`,
    site: `@__akanda__`,
    creator: `@__akanda__`,
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
      <body>
        <MainLayout/>
        {children}
        <SiteFooter/>
      </body>
    </html>
  );
}
