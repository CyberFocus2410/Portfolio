import * as React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { HeroSection } from "@/components/hero/hero-section";
import { Shield, Sparkles, Code2, ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Cinematic Hero Section */}
      <HeroSection />

      {/* Overview Navigation Cards */}
      <Section id="overview" className="bg-[#1A1818] py-16 sm:py-20">
        <Container size="wide">
          <div className="border-b border-white/10 pb-6 mb-8">
            <Label dotColor="bg-emerald-400">Explore Portfolio Domains</Label>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#EDE9E3] mt-2">
              Engineering Domains & Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card interactive className="p-8 group">
              <Shield className="w-8 h-8 text-emerald-400 mb-4" />
              <Label>Domain Exploration</Label>
              <h3 className="text-xl font-bold mt-2 group-hover:text-white transition-colors">
                Interactive Doors
              </h3>
              <p className="text-sm text-[#A39A92] mt-2 leading-relaxed">
                Step through 4 physical-styled arched doors: Cybersecurity, Medical AI, Freelancing Works, and AI/ML.
              </p>
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#EDE9E3] mt-6 group-hover:underline"
              >
                Explore Doors <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </Card>

            <Card interactive className="p-8 group">
              <Code2 className="w-8 h-8 text-cyan-400 mb-4" />
              <Label>Verified Projects</Label>
              <h3 className="text-xl font-bold mt-2 group-hover:text-white transition-colors">
                Live Repositories
              </h3>
              <p className="text-sm text-[#A39A92] mt-2 leading-relaxed">
                Explore SecureScan AI, Password Strength Analyser, Cardiac Analyst, LaunchLens, and more.
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#EDE9E3] mt-6 group-hover:underline"
              >
                View All Projects <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </Card>

            <Card interactive className="p-8 group">
              <Sparkles className="w-8 h-8 text-amber-400 mb-4" />
              <Label>Design Primitives</Label>
              <h3 className="text-xl font-bold mt-2 group-hover:text-white transition-colors">
                Design System
              </h3>
              <p className="text-sm text-[#A39A92] mt-2 leading-relaxed">
                Inspect color palettes, button pills, cards, labels, tags, and typography tokens.
              </p>
              <Link
                href="/design-system"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#EDE9E3] mt-6 group-hover:underline"
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
