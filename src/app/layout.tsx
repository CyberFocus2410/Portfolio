import type { Metadata } from "next";
import { fontSans, fontMono } from "@/lib/fonts";
import "@/app/globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LampProvider } from "@/context/lamp-context";
import { BackToTop } from "@/components/chrome/back-to-top";
import { Preloader } from "@/components/chrome/preloader";
import { ConsentBanner } from "@/components/chrome/consent-banner";

export const metadata: Metadata = {
  metadataBase: new URL("https://vivanmittal.cv"),
  title: {
    default: "Vivan Mittal | Cybersecurity & AI Portfolio",
    template: "%s | Vivan Mittal",
  },
  description:
    "Personal portfolio of Vivan Mittal. B.Tech Computer Science student at Delhi Technical Campus (GGSIPU). Cybersecurity Blue Teamer, AI/ML engineer, and software developer.",
  authors: [{ name: "Vivan Mittal", url: "https://vivanmittal.cv" }],
  creator: "Vivan Mittal",
  publisher: "Vivan Mittal",
  keywords: [
    "Vivan Mittal",
    "Cybersecurity Portfolio",
    "Blue Team Operations",
    "AI ML Engineer",
    "Delhi Technical Campus",
    "GGSIPU",
    "Decode Labs",
    "Vihaan 9.0 Finalist",
    "FoodScope",
    "vivanmittal.cv",
  ],
  alternates: {
    canonical: "https://vivanmittal.cv",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vivanmittal.cv",
    title: "Vivan Mittal | Cybersecurity & AI Portfolio",
    description:
      "B.Tech CSE student at Delhi Technical Campus (GGSIPU). Cybersecurity Blue Teamer, AI/ML engineer, and software developer.",
    siteName: "Vivan Mittal Portfolio",
    images: [
      {
        url: "/assets/portrait-color.png",
        width: 1200,
        height: 630,
        alt: "Vivan Mittal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivan Mittal | Cybersecurity & AI Portfolio",
    description:
      "B.Tech CSE student at Delhi Technical Campus. Cybersecurity Blue Teamer, AI/ML engineer, and developer.",
    images: ["/assets/portrait-color.png"],
    creator: "@CyberFocus2410",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable} dark`}>
      <body className="font-sans bg-[#1A1818] text-[#EDE9E3] antialiased min-h-screen flex flex-col selection:bg-white/20 selection:text-white">
        <div id="top" />
        <LampProvider>
          <Preloader />
          <Header />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <BackToTop />
          <ConsentBanner />
        </LampProvider>
      </body>
    </html>
  );
}
