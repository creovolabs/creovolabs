import type { Metadata } from "next";
import Script from "next/script";
import { DM_Mono } from "next/font/google";
import localFont from "next/font/local";
import ScrollToTop from "@/components/ui/ScrollToTop";
import "./globals.css";

const suse = localFont({
  src: [
    {
      path: "../fonts/SUSE-latin.woff2",
      weight: "100 800",
      style: "normal",
    },
    {
      path: "../fonts/SUSE-latin-ext.woff2",
      weight: "100 800",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  icons: { icon: "/logo.svg" },
  title: "Creovo Labs — Physical Product Development",
  description:
    "US-based product design and development firm for founders building physical products — from first sketch to manufacturing handoff.",
  openGraph: {
    title: "Creovo Labs",
    description:
      "Industrial design, advanced CAD, Class-A surfacing, DFM, and prototyping under one roof.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/hero-bg.png?v=3840"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${suse.variable} ${dmMono.variable} min-h-screen overflow-x-hidden bg-cream font-sans text-[#111111] antialiased`}
      >
        <Script id="scroll-to-top" strategy="beforeInteractive">
          {`if('scrollRestoration' in history)history.scrollRestoration='manual';if(!location.hash){scrollTo(0,0);document.documentElement.scrollTop=0;document.body.scrollTop=0;}`}
        </Script>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
