import "./globals.css";
import MainLayout from "../components/mainLayoutHeader";

export const metadata = {
  title: "Akanda dev",
  description: "A Creative software engineer with experience in designing and implementing user-friendly interfaces and functional software solutions for complex business problems.",
};

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
