import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import NextTopLoader from 'nextjs-toploader';
import MobileSidebar from "./components/MobileSidebar";

export const metadata: Metadata = {
  title: "Crux",
  description: "Crux is a platform for students to get all the information they need for their college admissions.",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/logo.png",
  }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`transition-colors duration-500 ease-in-out w-full pt-20 font-mono bg-gray-100 dark:bg-[#292929] `}
      >
      <NextTopLoader showSpinner={false} color="#FFFFFF" height={5}/>
      <Navbar />
      <MobileSidebar />
      {children}
      <Footer />
      </body>
    </html>
  );
}
