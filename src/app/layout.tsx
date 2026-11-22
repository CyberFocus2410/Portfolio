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
  title: "Vivan Mittal | Cybersecurity & AI Portfolio",
  description:
    "Personal portfolio of Vivan Mittal. B.Tech Computer Science student at Delhi Technical Campus (GGSIPU). Cybersecurity Blue Teamer, AI/ML engineer, and web developer.",
  authors: [{ name: "Vivan Mittal" }],
  keywords: [
    "Vivan Mittal",
    "Cybersecurity Portfolio",
    "Blue Team",
    "AI ML Engineer",
    "Delhi Technical Campus",
  ],
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
