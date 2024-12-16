import type { Metadata } from "next";
import "./globals.css";
import {Poppins} from 'next/font/google'
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import Footer from "@/components/Home/Footer/Footer";

// Setup task
// Customize your font { watch the video }
// Customize your meta data

const font = Poppins({
  weight:['100', '200', '300', '400','500', '600', '700', '800', '900'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Group Youri Lemba LLC",
  description: "Remodeling and Renovating company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
