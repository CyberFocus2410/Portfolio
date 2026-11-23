import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function Footer() {
  return (
    <footer className="mt-20 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Rounded-top dark surface panel */}
        <div className="rounded-t-[32px] md:rounded-t-[44px] bg-[#211E1E] border-t border-x border-white/[0.08] p-8 sm:p-12 md:p-16">
          <div className="max-w-3xl">
            <Label dotColor="bg-emerald-400">
              Available for Cybersecurity Internships & Projects
            </Label>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              <span className="text-white block">Need something built or secured?</span>
              <span className="text-[#D1C9BE] block mt-1">Let&apos;s make it happen.</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#D1C9BE] max-w-xl leading-relaxed">
              B.Tech CSE student at Delhi Technical Campus. Open for cybersecurity blue-team roles, AI/ML research prototypes, and freelance web projects.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg" hasArrow>
                  Get in touch
                </Button>
              </Link>
              <Link href="/work">
                <Button variant="outline" size="lg">
                  Explore work doors
                </Button>
              </Link>
            </div>
          </div>

          {/* Columns */}
          <div className="mt-16 pt-12 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
            <div>
              <p className="font-mono text-white uppercase tracking-wider mb-4 font-bold">
                Domains
              </p>
              <ul className="space-y-2.5 text-[#D1C9BE]">
                <li><Link href="/work/cybersecurity" className="hover:text-white transition-colors">Cybersecurity</Link></li>
                <li><Link href="/work/healthcare-ai" className="hover:text-white transition-colors">Healthcare AI</Link></li>
                <li><Link href="/work/ai-ml" className="hover:text-white transition-colors">AI & Machine Learning</Link></li>
                <li><Link href="/work/web-freelance" className="hover:text-white transition-colors">Web Development</Link></li>
                <li><Link href="/work/apps" className="hover:text-white transition-colors">App Development</Link></li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-white uppercase tracking-wider mb-4 font-bold">
                Navigate
              </p>
              <ul className="space-y-2.5 text-[#D1C9BE]">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/work" className="hover:text-white transition-colors">Doors</Link></li>
                <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="/hackathons" className="hover:text-white transition-colors">Hackathons</Link></li>
                <li><Link href="/certificates" className="hover:text-white transition-colors">Certificates & Badges</Link></li>
                <li><Link href="/my-story" className="hover:text-white transition-colors">My Story</Link></li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-white uppercase tracking-wider mb-4 font-bold">
                Status
              </p>
              <ul className="space-y-2.5 text-[#D1C9BE]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-white">Actively seeking internship</span>
                </li>
                <li>Delhi NCR, India</li>
                <li>DTC (GGSIPU) · 2025–2029</li>
                <li>Decode Labs Intern (2026)</li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-white uppercase tracking-wider mb-4 font-bold">
                Connect
              </p>
              <ul className="space-y-2.5 text-[#D1C9BE]">
                <li><a href="https://github.com/CyberFocus2410" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub ↗</a></li>
                <li><a href="https://linkedin.com/in/cyberfocus2410" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn ↗</a></li>
                <li><a href="mailto:cyberfocus2410@gmail.com" className="hover:text-white transition-colors">cyberfocus2410@gmail.com</a></li>
              </ul>
            </div>
          </div>

          {/* Statutory DPDP & Compliance Strip (DPDP-017 & DPDP-010) */}
          <div className="mt-8 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between text-xs text-[#A39A92] gap-3 font-mono">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="text-[#EDE9E3] font-semibold">DPDP Act, 2023 Compliance:</span>
              <span>Grievance Officer: <strong className="text-white">Vivan Mittal</strong> (Data Fiduciary)</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-[11px]">
              <a
                href="mailto:cyberfocus2410@gmail.com"
                className="text-amber-300 hover:underline"
              >
                cyberfocus2410@gmail.com
              </a>
              <span className="text-white/20">·</span>
              <Link
                href="/privacy#grievance-officer"
                className="text-white hover:text-amber-300 transition-colors underline"
              >
                Grievance Redressal (DPDP-017)
              </Link>
              <span className="text-white/20">·</span>
              <Link
                href="/privacy#data-principal-rights"
                className="text-white hover:text-amber-300 transition-colors underline"
              >
                Rights Portal (DPDP-010)
              </Link>
            </div>
          </div>

          {/* Bottom copyright line */}
          <div className="mt-8 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-[#D1C9BE] gap-4">
            <p>© {new Date().getFullYear()} Vivan Mittal. Built with Next.js & Framer Motion.</p>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy & DPDP Notice
              </Link>
              <Link href="/privacy#grievance-officer" className="hover:text-white transition-colors">
                Grievance Officer
              </Link>
              <a href="#top" className="hover:text-white transition-colors flex items-center gap-1 font-mono">
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
