import ButtonGradient from "./design/svg/ButtonGradient";

import { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    title: "Brain Wave 05",
    type: "website",
    url: "https://brain-wave-05.vercel.app",
    description: "Explore the Possibilities of AI Chatting with Brainwave",
    siteName: "Brainwave",
  },
  title: "Brain Wave",
  description: "Generated by create next app",
};
export const viewport: Viewport = {
  themeColor: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Header />
        {children}
        <Footer />
        <ButtonGradient />
      </body>
    </html>
  );
}
