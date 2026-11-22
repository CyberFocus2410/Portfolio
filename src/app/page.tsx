import * as React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { HeroSection } from "@/components/hero/hero-section";
import { DoorsStage } from "@/components/doors/doors-stage";
import { Shield, Sparkles, Code2, ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Cinematic Hero Section */}
      <HeroSection />

      {/* Signature Arched Doors Section Directly on the Front Page */}
      <Section id="doors-stage" className="py-16 sm:py-24 bg-[#141212]/70 border-t border-white/10 relative overflow-hidden">
        <Container size="wide" className="text-center relative z-10 mb-8 sm:mb-12">
          <Label dotColor="bg-amber-400">Interactive Domain Portals</Label>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mt-3 tracking-tight">
            Magic happens behind the doors
          </h2>
          <p className="text-sm sm:text-base text-[#D1C9BE] mt-3 max-w-xl mx-auto leading-relaxed">
            Hover or tap any door to inspect its capabilities, or click to enter the dedicated domain case studies.
          </p>
        </Container>

        {/* The 4 Physical Arched Doors Stage */}
        <div className="w-full">
          <DoorsStage />
        </div>
      </Section>

      {/* Overview Navigation Cards */}
      <Section id="overview" className="bg-[#1A1818] py-16 sm:py-24 border-t border-white/10">
        <Container size="wide">
          <div className="border-b border-white/10 pb-6 mb-8">
            <Label dotColor="bg-emerald-400">Explore Portfolio Domains</Label>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
              Engineering Domains & Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card interactive className="p-8 group bg-[#211E1E]">
              <Shield className="w-8 h-8 text-emerald-400 mb-4" />
              <Label>Domain Exploration</Label>
              <h3 className="text-xl font-bold mt-2 text-white group-hover:text-amber-300 transition-colors">
                Interactive Doors
              </h3>
              <p className="text-sm text-[#D1C9BE] mt-2 leading-relaxed">
                Step through 4 physical-styled arched doors: Cybersecurity, Medical AI, Freelancing Works, and AI/ML.
              </p>
              <a
                href="#doors-stage"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-white mt-6 group-hover:underline"
              >
                Inspect Doors <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </Card>

            <Card interactive className="p-8 group bg-[#211E1E]">
              <Code2 className="w-8 h-8 text-cyan-400 mb-4" />
              <Label>Verified Projects</Label>
              <h3 className="text-xl font-bold mt-2 text-white group-hover:text-cyan-300 transition-colors">
                Live Repositories
              </h3>
              <p className="text-sm text-[#D1C9BE] mt-2 leading-relaxed">
                Explore SecureScan AI, Password Strength Analyser, Cardiac Analyst, LaunchLens, and more.
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-white mt-6 group-hover:underline"
              >
                View All Projects <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </Card>

            <Card interactive className="p-8 group bg-[#211E1E]">
              <Sparkles className="w-8 h-8 text-amber-400 mb-4" />
              <Label>Design Primitives</Label>
              <h3 className="text-xl font-bold mt-2 text-white group-hover:text-amber-300 transition-colors">
                Design System
              </h3>
              <p className="text-sm text-[#D1C9BE] mt-2 leading-relaxed">
                Inspect color palettes, button pills, cards, labels, tags, and typography tokens.
              </p>
              <Link
                href="/design-system"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-white mt-6 group-hover:underline"
              >
                Open Style Guide <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
