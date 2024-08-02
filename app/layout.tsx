import { Metadata } from "next";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://modern-website-production.vercel.app/"),
  title: {
    template: "%s | シンプルなコーポレートサイト",
    default: "シンプルなコーポレートサイト",
  },
  description:
    "「Next.js＋ヘッドレスCMSではじめる！ かんたん・モダンWebサイト制作入門」で作成されるサイトです。",
  openGraph: {
    title: "シンプルなコーポレートサイト",
    description:
      "「Next.js＋ヘッドレスCMSではじめる！ かんたん・モダンWebサイト制作入門」で作成されるサイトです。",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "https://modern-website-production.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      {/* <GoogleAnalytics gaId="G-S9DDMJLENH" /> */}
      <GoogleTagManager gtmId="GTM-5F4QFSR8" />
    </html>
  );
}
