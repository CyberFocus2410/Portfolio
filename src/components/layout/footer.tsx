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
              <span className="text-[#EDE9E3] block">Need something built or secured?</span>
              <span className="text-[#A39A92] block mt-1">Let&apos;s make it happen.</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#A39A92] max-w-xl leading-relaxed">
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
          <div className="mt-16 pt-12 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
            <div>
              <p className="font-mono text-[#EDE9E3] uppercase tracking-wider mb-4 font-semibold">
                Domains
              </p>
              <ul className="space-y-2.5 text-[#A39A92]">
                <li><Link href="/work/cybersecurity" className="hover:text-white transition-colors">Cybersecurity</Link></li>
                <li><Link href="/work/healthcare-ai" className="hover:text-white transition-colors">Healthcare AI</Link></li>
                <li><Link href="/work/ai-ml" className="hover:text-white transition-colors">AI & Machine Learning</Link></li>
                <li><Link href="/work/web-freelance" className="hover:text-white transition-colors">Web Development</Link></li>
                <li><Link href="/work/apps" className="hover:text-white transition-colors">App Development</Link></li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-[#EDE9E3] uppercase tracking-wider mb-4 font-semibold">
                Navigate
              </p>
              <ul className="space-y-2.5 text-[#A39A92]">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/work" className="hover:text-white transition-colors">Doors</Link></li>
                <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="/hackathons" className="hover:text-white transition-colors">Hackathons</Link></li>
                <li><Link href="/certificates" className="hover:text-white transition-colors">Certificates & Badges</Link></li>
                <li><Link href="/my-story" className="hover:text-white transition-colors">My Story</Link></li>
                <li><Link href="/design-system" className="hover:text-white transition-colors">Design System</Link></li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-[#EDE9E3] uppercase tracking-wider mb-4 font-semibold">
                Status
              </p>
              <ul className="space-y-2.5 text-[#A39A92]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Actively seeking internship</span>
                </li>
                <li>Delhi NCR, India</li>
                <li>DTC (GGSIPU) · 2025–2029</li>
                <li>Decode Labs Intern (2026)</li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-[#EDE9E3] uppercase tracking-wider mb-4 font-semibold">
                Connect
              </p>
              <ul className="space-y-2.5 text-[#A39A92]">
                <li><a href="https://github.com/CyberFocus2410" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub ↗</a></li>
                <li><a href="https://linkedin.com/in/cyberfocus2410" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn ↗</a></li>
                <li><a href="mailto:cyberfocus2410@gmail.com" className="hover:text-white transition-colors">cyberfocus2410@gmail.com</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom copyright line */}
          <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-xs text-[#A39A92] gap-4">
            <p>© {new Date().getFullYear()} Vivan Mittal. Built with Next.js & Framer Motion.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy & Cookies
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
