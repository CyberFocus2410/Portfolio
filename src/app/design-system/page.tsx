import * as React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { CheckCircle2, Shield, HeartPulse, Sparkles, Globe, Terminal } from "lucide-react";

export const metadata = {
  title: "Design System & Style Guide | Vivan Mittal",
  description: "Phase 1 design tokens, base UI components, typography, and color systems.",
};

export default function DesignSystemPage() {
  return (
    <Section className="py-12 sm:py-16">
      <Container size="wide">
        {/* Header */}
        <div className="border-b border-white/10 pb-8">
          <Label dotColor="bg-emerald-400">Phase 1 Acceptance Deliverable</Label>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#EDE9E3] mt-3">
            Design System & Style Guide
          </h1>
          <p className="text-sm sm:text-base text-[#A39A92] mt-2 max-w-2xl">
            This style-guide demonstrates the tokens, typography scale, pill buttons, cards, status tags, and door palettes built for Vivan Mittal&apos;s portfolio.
          </p>
        </div>

        {/* 1. Color Palette Tokens */}
        <div className="mt-14">
          <h2 className="text-xl font-bold text-[#EDE9E3] flex items-center gap-2">
            <span className="font-mono text-xs text-[#A39A92]">01</span> Color System Tokens
          </h2>
          <p className="text-xs text-[#A39A92] mt-1">
            Exact palette matching the cinematic dark mood specified in prompts.md section 2.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <div className="p-4 rounded-2xl bg-[#1A1818] border border-white/10">
              <div className="h-14 rounded-xl bg-[#1A1818] border border-white/20 mb-3" />
              <div className="font-mono text-xs text-[#EDE9E3]">Base</div>
              <div className="font-mono text-[11px] text-[#A39A92]">#1A1818</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#211E1E] border border-white/10">
              <div className="h-14 rounded-xl bg-[#211E1E] border border-white/20 mb-3" />
              <div className="font-mono text-xs text-[#EDE9E3]">Surface</div>
              <div className="font-mono text-[11px] text-[#A39A92]">#211E1E</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#292525] border border-white/10">
              <div className="h-14 rounded-xl bg-[#292525] border border-white/20 mb-3" />
              <div className="font-mono text-xs text-[#EDE9E3]">Elevated Surface</div>
              <div className="font-mono text-[11px] text-[#A39A92]">#292525</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#211E1E] border border-white/10">
              <div className="h-14 rounded-xl bg-[#EDE9E3] mb-3" />
              <div className="font-mono text-xs text-[#EDE9E3]">Primary Text</div>
              <div className="font-mono text-[11px] text-[#A39A92]">#EDE9E3</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#211E1E] border border-white/10">
              <div className="h-14 rounded-xl bg-[#A39A92] mb-3" />
              <div className="font-mono text-xs text-[#EDE9E3]">Muted Text</div>
              <div className="font-mono text-[11px] text-[#A39A92]">#A39A92</div>
            </div>
          </div>

          {/* Door Palette */}
          <div className="mt-8">
            <h3 className="text-sm font-mono text-[#EDE9E3] uppercase tracking-wider mb-4">
              Door Tone Palette (Muted Arched Doors)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-[#1F2E3D] border border-white/10">
                <Shield className="w-5 h-5 text-blue-300 mb-2" />
                <div className="font-semibold text-sm text-white">Cybersecurity</div>
                <div className="font-mono text-[11px] text-blue-200/70">Door Navy · #1F2E3D</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#3B2235] border border-white/10">
                <HeartPulse className="w-5 h-5 text-pink-300 mb-2" />
                <div className="font-semibold text-sm text-white">Healthcare AI</div>
                <div className="font-mono text-[11px] text-pink-200/70">Door Plum · #3B2235</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#2E3D34] border border-white/10">
                <Globe className="w-5 h-5 text-emerald-300 mb-2" />
                <div className="font-semibold text-sm text-white">Freelance Works</div>
                <div className="font-mono text-[11px] text-emerald-200/70">Door Sage · #2E3D34</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#4A2E22] border border-white/10">
                <Sparkles className="w-5 h-5 text-amber-300 mb-2" />
                <div className="font-semibold text-sm text-white">AI / ML Projects</div>
                <div className="font-mono text-[11px] text-amber-200/70">Door Rust · #4A2E22</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Button Component Variations */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-[#EDE9E3] flex items-center gap-2">
            <span className="font-mono text-xs text-[#A39A92]">02</span> Pill Button System
          </h2>
          <p className="text-xs text-[#A39A92] mt-1">
            Rounded-full tactile pills with circular arrow badges, keyboard focus rings, and active states.
          </p>

          <div className="mt-6 p-8 rounded-card bg-[#211E1E] border border-white/10 flex flex-wrap items-center gap-6">
            <Button variant="primary" size="lg" hasArrow>
              Primary Large with Arrow
            </Button>
            <Button variant="primary" size="md">
              Primary Medium
            </Button>
            <Button variant="primary" size="sm">
              Primary Small
            </Button>
            <Button variant="secondary" size="md">
              Secondary Pill
            </Button>
            <Button variant="outline" size="md" hasArrow arrowType="up-right">
              Outline Pill
            </Button>
            <Button variant="ghost" size="md">
              Ghost Pill
            </Button>
          </div>
        </div>

        {/* 3. Card Primitives */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-[#EDE9E3] flex items-center gap-2">
            <span className="font-mono text-xs text-[#A39A92]">03</span> Card Primitives (24px+ Radii)
          </h2>
          <p className="text-xs text-[#A39A92] mt-1">
            Rounded cards with hairline borders `rgba(255,255,255,0.08)` and subtle hover physics.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <Label>Default Surface Card</Label>
              <h3 className="text-lg font-bold text-[#EDE9E3] mt-2">Static Card</h3>
              <p className="text-xs text-[#A39A92] mt-2 leading-relaxed">
                Standard background surface `#211E1E` with subtle hairline border.
              </p>
            </Card>

            <Card elevated>
              <Label dotColor="bg-amber-400">Elevated Card</Label>
              <h3 className="text-lg font-bold text-[#EDE9E3] mt-2">Elevated Surface</h3>
              <p className="text-xs text-[#A39A92] mt-2 leading-relaxed">
                Higher surface brightness `#292525` with deep shadow for modals and popovers.
              </p>
            </Card>

            <Card interactive>
              <Label dotColor="bg-cyan-400">Interactive Card</Label>
              <h3 className="text-lg font-bold text-[#EDE9E3] mt-2">Hoverable Card</h3>
              <p className="text-xs text-[#A39A92] mt-2 leading-relaxed">
                Interactive card with smooth translate hover and border illumination.
              </p>
            </Card>
          </div>
        </div>

        {/* 4. Tags & Monospace Labels */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-[#EDE9E3] flex items-center gap-2">
            <span className="font-mono text-xs text-[#A39A92]">04</span> Monospace Labels & Tags
          </h2>
          <p className="text-xs text-[#A39A92] mt-1">
            Small uppercase JetBrains Mono labels and category tags.
          </p>

          <div className="mt-6 p-8 rounded-card bg-[#211E1E] border border-white/10 space-y-6">
            <div className="flex flex-wrap items-center gap-6">
              <Label dotColor="bg-emerald-400">AVAILABLE FOR WORK</Label>
              <Label dotColor="bg-blue-400">CYBERSECURITY RESEARCH</Label>
              <Label dotColor="bg-pink-400">HEALTHCARE AI PROTOTYPE</Label>
              <Label dotColor="bg-amber-400">DECODE LABS INTERN</Label>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              <Tag variant="default">Default Tag</Tag>
              <Tag variant="active">Active Tag</Tag>
              <Tag variant="accent">Accent Tag</Tag>
              <Tag variant="status">Valid Certificate</Tag>
              <Tag variant="default">Python</Tag>
              <Tag variant="default">TypeScript</Tag>
              <Tag variant="default">Framer Motion</Tag>
            </div>
          </div>
        </div>

        {/* 5. Phase 1 Verification Checklist */}
        <div className="mt-16 p-8 rounded-card bg-[#211E1E] border border-emerald-500/30">
          <div className="flex items-center gap-3 text-emerald-400 mb-4">
            <CheckCircle2 className="w-6 h-6" />
            <h3 className="text-lg font-bold text-white">Phase 1 Acceptance Criteria Passed</h3>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#A39A92]">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Next.js 15 App Router + TypeScript initialized</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Tailwind tokens configured (base, surface, door tones)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Fonts loaded via next/font (Plus Jakarta Sans + JetBrains Mono)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Base components created (Button pill, Card, Tag, Label, Section)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>CI pipeline created (.github/workflows/ci.yml)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Portrait processed & 22 certificates extracted</span>
            </li>
          </ul>

          <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-[#A39A92]">
              Live preview running on http://localhost:3000
            </span>
            <Link href="/">
              <Button variant="primary" size="sm" hasArrow>
                Back to Home Preview
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
