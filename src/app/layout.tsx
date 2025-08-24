import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import NextTopLoader from 'nextjs-toploader';
import MobileSidebar from "./components/MobileSidebar";
import { ToastContainer } from "react-toastify";
import { ScrollToTop } from "./components/ScrollToTop";
import { Suspense } from "react";
import { Loading } from "./components/Loading";

export const metadata: Metadata = {
  title: "Cr#x | Discover & Explore Colleges in India",
  description:
    "Your ultimate platform for exploring Indian colleges, comparing options, and making informed educational decisions.",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/logo.png",
    }
  ],
  openGraph: {
    title: "Cr#x | Discover & Explore Colleges in India",
    description:
      "Your ultimate platform for exploring Indian colleges, comparing options, and making informed educational decisions.",
    url: "https://crux.hs.vc",
    siteName: "Cr#x",
    images: [
      {
        url: "https://crux.hs.vc/crux.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cr#x | Discover & Explore Colleges in India",
    description:
      "Your ultimate platform for exploring Indian colleges, comparing options, and making informed educational decisions.",
    images: ["https://crux.hs.vc/crux.png"],
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="2f7b543e-b3f3-4ec3-96e1-01f8905c6c9c"></script>
      </head>
      <body
        className={`transition-colors duration-500 ease-in-out w-full pt-20 font-mono bg-gray-100 dark:bg-[#2a2a2e] `}
      >

        <NextTopLoader showSpinner={false} color="#fefefe" height={7} />
        <Navbar />
        <MobileSidebar />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        <Footer />
        <ToastContainer />
        <ScrollToTop />
      </body>
    </html>
  );
}
