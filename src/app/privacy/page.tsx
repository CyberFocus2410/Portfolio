import * as React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ShieldCheck, Cookie, Lock, Mail } from "lucide-react";
import { ResetCookieButton } from "@/components/chrome/reset-cookie-button";

export const metadata = {
  title: "Privacy & Cookie Policy | Vivan Mittal",
  description: "Standard transparency and cookie policy for Vivan Mittal's personal portfolio.",
};

export default function PrivacyPage() {
  return (
    <Section className="py-16 sm:py-24">
      <Container size="narrow">
        {/* Header */}
        <div className="border-b border-white/10 pb-8">
          <Label dotColor="bg-emerald-400">Transparency & Trust</Label>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#EDE9E3] mt-3">
            Privacy & Cookie Policy
          </h1>
          <p className="text-xs font-mono text-[#A39A92] mt-2">
            Last updated: November 22, 2026 · Delhi NCR, India
          </p>
        </div>

        {/* Content sections */}
        <div className="mt-10 space-y-8 text-sm text-[#A39A92] leading-relaxed">
          <Card className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 text-[#EDE9E3]">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h2 className="text-lg font-bold">1. Zero Invasive Tracking</h2>
            </div>
            <p>
              This is a personal developer portfolio built by Vivan Mittal to showcase engineering projects, hackathons, and certifications. I respect your privacy by default:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#EDE9E3]">
              <li>No personal information is sold, rented, or monetized under any circumstances.</li>
              <li>No third-party cross-site marketing or advertising cookies are deployed.</li>
              <li>No analytics scripts load or execute unless you explicitly click &ldquo;Allow&rdquo; on the consent banner.</li>
            </ul>
          </Card>

          <Card className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 text-[#EDE9E3]">
              <Cookie className="w-5 h-5 text-amber-400" />
              <h2 className="text-lg font-bold">2. Cookies & Local Storage</h2>
            </div>
            <p>
              This website uses client-side local storage and optional analytics cookies:
            </p>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="font-mono text-[#EDE9E3] font-semibold">portfolio_lamp_state</span> (Local Storage)
                <p className="text-[#A39A92] mt-0.5">Remembers whether the ambient desk lamp glow is turned on or off via the rope pull.</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="font-mono text-[#EDE9E3] font-semibold">portfolio_has_entered</span> (Session Storage)
                <p className="text-[#A39A92] mt-0.5">Prevents the preloader from repeating when navigating across internal pages during a single session.</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="font-mono text-[#EDE9E3] font-semibold">portfolio_analytics_consent</span> (Local Storage)
                <p className="text-[#A39A92] mt-0.5">Stores your decision regarding anonymous visitor counting (`allowed` or `denied`).</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 text-[#EDE9E3]">
              <Lock className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-bold">3. Healthcare & Educational Projects Disclaimer</h2>
            </div>
            <p className="text-xs leading-relaxed">
              In accordance with ethical engineering guidelines, all health-related prototypes featured on this website (such as <strong className="text-white">Cardiac Analyst</strong>, <strong className="text-white">PneumoVision</strong>, and <strong className="text-white">Health Vault</strong>) are strictly research and educational proofs-of-concept. They are <strong className="text-white">not medical devices</strong>, do not provide clinical diagnoses, and utilize synthetic, anonymized public benchmark datasets only.
            </p>
          </Card>

          <Card className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 text-[#EDE9E3]">
              <Mail className="w-5 h-5 text-emerald-400" />
              <h2 className="text-lg font-bold">4. Contact & Inquiries</h2>
            </div>
            <p className="text-xs leading-relaxed">
              When you send an inquiry via the contact form or email, your message and email address are processed solely for responding to your message. You can reach out directly at:
            </p>
            <p className="font-mono text-xs text-[#EDE9E3]">
              <a href="mailto:cyberfocus2410@gmail.com" className="hover:underline">
                cyberfocus2410@gmail.com
              </a>
            </p>
          </Card>

          <div className="pt-4 flex items-center justify-between text-xs">
            <Link href="/" className="font-mono text-[#EDE9E3] hover:underline">
              ← Return to Home
            </Link>
            <ResetCookieButton />
          </div>
        </div>
      </Container>
    </Section>
  );
}
