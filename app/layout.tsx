import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import { Zen_Maru_Gothic } from "next/font/google";
const cn_zh_font = Zen_Maru_Gothic({ weight: "300", subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Benton Li",
    template: "%s | Benton Li",
  },
  description: "Benton's Website",
  openGraph: {
    title: "Benton Li",
    url: baseUrl,
    siteName: "Benton Li",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <link rel="icon" href="/static/logo.png" sizes="any" />
      </head>
      <body className="antialiased  max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {/* <Navbar /> */}
          <div className="prose"> {children}</div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
