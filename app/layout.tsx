// File: app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Luxe Gems | Fine Jewelry",
  description:
    "Discover our collection of handcrafted, elegant jewelry for every occasion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
