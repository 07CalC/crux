import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "../components/common/Footer";
import NextTopLoader from 'nextjs-toploader';
import { ToastContainer } from "react-toastify";
import { ScrollToTop } from "../components/common/ScrollToTop";
import { QueryProvider } from "../components/QueryProvider";
import { Navbar } from "../components/common/Navbar";
import { ThemeInitializer } from "../components/common/ThemeInitializer";

export const metadata: Metadata = {
  title: "Cr#x | Discover & Explore Colleges in India",
  metadataBase: new URL("https://crux.hs.vc"),
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = JSON.parse(localStorage.getItem('crux-theme-storage') || '{}')?.state?.theme || 'light';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeInitializer />
        <NextTopLoader showSpinner={false} color="#6366f1" height={3} />
        <Navbar />
        <main className="pt-16 md:pt-20">
          <QueryProvider>
            {children}
          </QueryProvider>
        </main>
        <Footer />
        <ToastContainer />
        <ScrollToTop />
      </body>
    </html>
  );
}
