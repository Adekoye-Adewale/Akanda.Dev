import MainLayout from "../components/mainLayoutHeader";
import "./globals.css";

export const metadata = {
  title: "Akanda dev",
  description: "A Creative software engineer with experience in designing and implementing user-friendly interfaces and functional software solutions for complex business problems.",
  author: `Adekoye Adewale`,
  openGraph: {
    title: 'Akanda dev',
    description: 'A Creative software engineer with experience in designing and implementing user-friendly interfaces and functional software solutions for complex business problems...',
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
      <body>
        <MainLayout/>
        {children}
      </body>
    </html>
  );
}
