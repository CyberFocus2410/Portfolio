import * as React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ShieldCheck, Cookie, Lock, Mail, Scale, AlertOctagon, UserCheck, ShieldAlert } from "lucide-react";
import { ResetCookieButton } from "@/components/chrome/reset-cookie-button";
import { DataPrincipalPortal } from "@/components/privacy/data-principal-portal";

export const metadata = {
  title: "Privacy Policy & DPDP Compliance | Vivan Mittal",
  description:
    "Privacy notice, Data Principal rights portal, 72-hour breach notification procedures, and Grievance Officer details under the Digital Personal Data Protection Act, 2023.",
};

export default function PrivacyPage() {
  return (
    <Section className="py-16 sm:py-24">
      <Container size="narrow">
        {/* Header */}
        <div className="border-b border-white/10 pb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Label dotColor="bg-emerald-400">Transparency & Trust</Label>
            <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              DPDPA 2023 Compliant
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#EDE9E3]">
            Privacy & Statutory DPDP Notice
          </h1>
          <p className="text-xs font-mono text-[#A39A92] mt-2">
            Mapped against Sections 3–16 of the Digital Personal Data Protection Act, 2023 (DPDPA) · Delhi NCR, India
          </p>
        </div>

        {/* Content sections */}
        <div className="mt-10 space-y-8 text-sm text-[#A39A92] leading-relaxed">
          {/* Section 1: Data Fiduciary & Zero Tracking */}
          <Card className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 text-[#EDE9E3]">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h2 className="text-lg font-bold">1. Data Fiduciary Statement & Minimal Processing</h2>
            </div>
            <p>
              This is a personal developer portfolio authored and operated by <strong className="text-white">Vivan Mittal</strong> (acting as the <em>Data Fiduciary</em> under Section 2(i) of the Digital Personal Data Protection Act, 2023). Processing of digital personal data is strictly bounded by purpose:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#EDE9E3]">
              <li>No personal information is sold, rented, monetized, or shared with third-party data brokers.</li>
              <li>No cross-site behavioural profiling, ad targeting, or covert trackers are deployed.</li>
              <li>Optional anonymous telemetry runs only upon explicit consent (&ldquo;Allow&rdquo;) via the cookie banner.</li>
            </ul>
          </Card>

          {/* Section 2: Cookies & Local Storage */}
          <Card className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 text-[#EDE9E3]">
              <Cookie className="w-5 h-5 text-amber-400" />
              <h2 className="text-lg font-bold">2. Transparent Local Storage & Cookie Inventory</h2>
            </div>
            <p>
              This website employs minimal, transparent client-side storage tokens solely for interface personalization and user experience:
            </p>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="font-mono text-[#EDE9E3] font-semibold">portfolio_lamp_state</span> (Local Storage)
                <p className="text-[#A39A92] mt-0.5">Retains whether the interactive desk lamp illumination is toggled on or off.</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="font-mono text-[#EDE9E3] font-semibold">portfolio_has_entered</span> (Session Storage)
                <p className="text-[#A39A92] mt-0.5">Suppresses repetitive preloader playback during internal site navigation within a browsing session.</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="font-mono text-[#EDE9E3] font-semibold">portfolio_analytics_consent</span> (Local Storage)
                <p className="text-[#A39A92] mt-0.5">Records your explicit decision regarding anonymous aggregate metrics (`allowed` or `denied`).</p>
              </div>
            </div>
          </Card>

          {/* Section 3: Healthcare Prototypes Disclaimer */}
          <Card className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 text-[#EDE9E3]">
              <Lock className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-bold">3. Healthcare & Educational Prototypes Disclaimer</h2>
            </div>
            <p className="text-xs leading-relaxed">
              In accordance with research integrity standards, all healthcare-oriented prototypes showcased on this site (such as <strong className="text-white">Cardiac Analyst</strong>, <strong className="text-white">PneumoVision</strong>, and <strong className="text-white">Health Vault</strong>) are strictly academic, non-clinical research prototypes. They are <strong className="text-white">not certified medical devices</strong>, do not capture or process protected health records (PHI), and use solely open-source, de-identified benchmark datasets.
            </p>
          </Card>

          {/* Section 4: Grievance Officer & Data Protection Officer Details (DPDP-017) */}
          <div id="grievance-officer" className="scroll-mt-24">
            <Card className="p-6 sm:p-8 space-y-4 border-amber-400/30 bg-amber-950/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[#EDE9E3]">
                <div className="flex items-center gap-3">
                  <UserCheck className="w-5 h-5 text-amber-400" />
                  <h2 className="text-lg font-bold">4. Data Protection & Grievance Redressal Officer (DPDP-017)</h2>
                </div>
                <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20 w-fit">
                  Sections 8(9), 13 · Rule 14
                </span>
              </div>
              <p className="text-xs leading-relaxed">
                Pursuant to Section 8(9) and Section 13 of the Digital Personal Data Protection Act, 2023 read with Rule 14 of the DPDP Rules, the details of the designated Grievance Officer for this Data Fiduciary are published below:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-1">
                  <span className="text-white/60 block text-[10px] uppercase tracking-wider">Designated Officer</span>
                  <p className="text-white font-bold text-sm">Vivan Mittal</p>
                  <p className="text-[#A39A92] text-xs">Data Protection & Grievance Officer</p>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-1">
                  <span className="text-white/60 block text-[10px] uppercase tracking-wider">Direct Grievance Contact</span>
                  <a
                    href="mailto:cyberfocus2410@gmail.com"
                    className="text-amber-300 hover:underline block font-bold text-sm"
                  >
                    cyberfocus2410@gmail.com
                  </a>
                  <p className="text-[#A39A92] text-xs">Delhi NCR, Republic of India</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-[#D1C9BE] space-y-1.5">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-amber-400" />
                  <span>Statutory Redressal Timelines & Appellate Procedure (Section 13)</span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-[11px] text-[#A39A92]">
                  <li><strong className="text-white">Acknowledgment:</strong> Every grievance or Data Principal communication is acknowledged within <strong>48 hours</strong>.</li>
                  <li><strong className="text-white">Resolution Deadline:</strong> Grievances are investigated and redressed without unreasonable delay, not exceeding <strong>30 days</strong> as prescribed under Rule 14.</li>
                  <li><strong className="text-white">Appellate Escalation:</strong> If a grievance is not resolved within the statutory period or you are unsatisfied with the resolution, you retain the statutory right to appeal directly to the <strong>Data Protection Board of India (DPBI)</strong>.</li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Section 5: Data Principal Rights Mechanism & Self-Service Portal (DPDP-010) */}
          <div id="data-principal-rights" className="scroll-mt-24">
            <DataPrincipalPortal />
          </div>

          {/* Section 6: Personal Data Breach Notification Protocol (DPDP-007) */}
          <Card className="p-6 sm:p-8 space-y-4 border-rose-500/20 bg-rose-950/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[#EDE9E3]">
              <div className="flex items-center gap-3">
                <ShieldAlert className="w-5 h-5 text-rose-400" />
                <h2 className="text-lg font-bold">5. Personal Data Breach Notification Protocol (DPDP-007)</h2>
              </div>
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20 w-fit">
                Section 8(6) · Rule 7
              </span>
            </div>

            <p className="text-xs leading-relaxed">
              In accordance with Section 8(6) of the Digital Personal Data Protection Act, 2023 and Rule 7 (Personal Data Breach Notification Procedures), this Data Fiduciary maintains a formal <strong>72-Hour Breach Response Playbook</strong>:
            </p>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-1">
                <span className="font-mono font-bold text-rose-300 block">
                  1. Statutory 72-Hour Regulatory Notification to the Board (DPBI)
                </span>
                <p className="text-[#A39A92] leading-relaxed">
                  Upon confirmation of any unauthorized access, disclosure, alteration, or destruction of digital personal data, notice shall be transmitted to the <strong>Data Protection Board of India (DPBI)</strong> without undue delay and in all events within <strong>72 hours</strong> of becoming aware of the breach, detailing the incident vector, estimated volume, mitigation actions, and contact coordinates.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-1">
                <span className="font-mono font-bold text-rose-300 block">
                  2. Prompt Notification to Affected Data Principals
                </span>
                <p className="text-[#A39A92] leading-relaxed">
                  Concurrently, each affected Data Principal shall receive an electronic notification via their registered contact email containing:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-[11px] text-[#EDE9E3] mt-1">
                  <li>Description and approximate time of the security incident.</li>
                  <li>Categories of personal data compromised or likely compromised.</li>
                  <li>Assessment of potential consequences and risks.</li>
                  <li>Immediate technical safeguards and containment measures enacted.</li>
                  <li>Pragmatic safety recommendations for the Data Principal.</li>
                  <li>Direct contact channel of Grievance Officer Vivan Mittal for assistance.</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-1">
                <span className="font-mono font-bold text-rose-300 block">
                  3. Continuous Security Safeguards (Section 8(5))
                </span>
                <p className="text-[#A39A92] leading-relaxed">
                  Technical safeguards include static site generation with zero database attack surface, tokenized CI/CD secrets with commit SHA pinning, automated Gitleaks and Semgrep static analysis, and cryptographic TLS 1.3 transit encryption.
                </p>
              </div>
            </div>
          </Card>

          {/* Section 7: Direct Contact */}
          <Card className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 text-[#EDE9E3]">
              <Mail className="w-5 h-5 text-emerald-400" />
              <h2 className="text-lg font-bold">6. General Inquiries & Contact</h2>
            </div>
            <p className="text-xs leading-relaxed">
              For general project queries, collaboration proposals, or non-statutory questions, you can reach out directly via:
            </p>
            <p className="font-mono text-xs text-[#EDE9E3]">
              <a href="mailto:cyberfocus2410@gmail.com" className="hover:underline">
                cyberfocus2410@gmail.com
              </a>
            </p>
          </Card>

          {/* Bottom navigation */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <Link href="/" className="font-mono text-[#EDE9E3] hover:underline">
              ← Return to Home
            </Link>
            <div className="flex items-center gap-4">
              <a href="#data-principal-rights" className="text-amber-300 font-mono hover:underline">
                Rights Portal ↑
              </a>
              <ResetCookieButton />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
