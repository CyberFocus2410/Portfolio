import * as React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { HeroSection } from "@/components/hero/hero-section";
import { DoorsStage } from "@/components/doors/doors-stage";
import { Code2, Trophy, ShieldCheck, ArrowUpRight } from "lucide-react";

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

      {/* Verified Engineering Highlights Section */}
      <Section id="overview" className="bg-[#1A1818] py-16 sm:py-24 border-t border-white/10">
        <Container size="wide">
          <div className="border-b border-white/10 pb-6 mb-8">
            <Label dotColor="bg-emerald-400">Engineering Highlights</Label>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
              Projects, Hackathons & Credentials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Live Projects */}
            <Card interactive className="p-8 group bg-[#211E1E]">
              <Code2 className="w-8 h-8 text-cyan-400 mb-4" />
              <Label>Verified Work</Label>
              <h3 className="text-xl font-bold mt-2 text-white group-hover:text-cyan-300 transition-colors">
                Live Repositories
              </h3>
              <p className="text-sm text-[#D1C9BE] mt-2 leading-relaxed">
                Explore SecureScan AI, Password Strength Analyser, Cardiac Analyst, LaunchLens, and open-source tools.
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-white mt-6 group-hover:underline"
              >
                View All Projects <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </Card>

            {/* Card 2: Hackathons */}
            <Card interactive className="p-8 group bg-[#211E1E]">
              <Trophy className="w-8 h-8 text-amber-400 mb-4" />
              <Label>Competitive Engineering</Label>
              <h3 className="text-xl font-bold mt-2 text-white group-hover:text-amber-300 transition-colors">
                Hackathons & Awards
              </h3>
              <p className="text-sm text-[#D1C9BE] mt-2 leading-relaxed">
                Top 15 Finalist at Vihaan 9.0 (IEEE DTU) and Top 20 Finalist at FoodScope Hackathon (IIIT Delhi offline round).
              </p>
              <Link
                href="/hackathons"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-white mt-6 group-hover:underline"
              >
                Explore Hackathons <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </Card>

            {/* Card 3: Certifications */}
            <Card interactive className="p-8 group bg-[#211E1E]">
              <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
              <Label>Verified Credentials</Label>
              <h3 className="text-xl font-bold mt-2 text-white group-hover:text-emerald-300 transition-colors">
                Certificates & Badges
              </h3>
              <p className="text-sm text-[#D1C9BE] mt-2 leading-relaxed">
                CRTOM Certified Red Team Operations, OPSWAT CIP, HackerRank Python, and 22 verified achievements.
              </p>
              <Link
                href="/certificates"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-white mt-6 group-hover:underline"
              >
                View Certificates <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
