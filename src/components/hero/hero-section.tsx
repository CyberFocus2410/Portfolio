"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FlipCard } from "@/components/hero/flip-card";
import { AbilityModal } from "@/components/hero/ability-modal";
import { StatusStrip } from "@/components/hero/status-strip";
import { InteractivePortrait } from "@/components/hero/interactive-portrait";
import { Sparkles, Github, Linkedin, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  // Roles supplied by user
  const roles = [
    "CyberSecurity Analyst",
    "Penetration Tester",
    "Blue Teaming in cybersecurity",
    "AI/ML Developer",
    "Web Developer",
    "App developer",
    "UI/UX designer",
    "Freelancer",
    "Photographer",
  ];

  const [isAbilityModalOpen, setIsAbilityModalOpen] = React.useState(false);

  return (
    <Section
      glow
      className="pt-16 sm:pt-24 md:pt-32 pb-0 overflow-hidden min-h-[92vh] flex flex-col justify-between"
    >
      <Container size="wide" className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Column: Greeting, Headline, Ability Card Pill, Flip Card, CTA */}
          <div className="lg:col-span-7 pb-8 sm:pb-14">
            <div className="flex flex-wrap items-center gap-3">
              <Label dotColor="bg-emerald-400">
                Cybersecurity Analyst & Blue Teamer
              </Label>
              {/* My Ability Card Pill placed safely in the left column so it NEVER overlaps the portrait */}
              <button
                onClick={() => setIsAbilityModalOpen(true)}
                title="View verified skills and profile"
                aria-label="Open My ability card"
                className="px-3.5 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.16] text-xs font-mono text-white border border-white/20 shadow-md backdrop-blur-md flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span className="font-semibold">My ability card ↗</span>
              </button>
            </div>

            <div className="mt-4 sm:mt-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.05]">
                Hi, I&apos;m Vivan.
              </h1>
              <p className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#D1C9BE] mt-1.5 sm:mt-2.5">
                I am a
              </p>
            </div>

            {/* Tactile White Desk-Calendar Flip Card */}
            <div className="mt-6 sm:mt-8">
              <FlipCard roles={roles} autoCycleInterval={3200} />
            </div>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg" hasArrow>
                  Hire me
                </Button>
              </Link>
              <a href="#doors-stage">
                <Button variant="outline" size="lg">
                  See my work ↓
                </Button>
              </a>
              <a href="#skills">
                <Button variant="secondary" size="lg">
                  Tech Arsenal ⚔️
                </Button>
              </a>
            </div>

            {/* Direct Social & Professional Profiles */}
            <div className="mt-6 pt-2 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono text-[#A39A92] uppercase tracking-wider font-semibold">
                Profiles:
              </span>
              <a
                href="https://github.com/CyberFocus2410"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile - CyberFocus2410"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.14] text-xs font-mono font-bold text-white border border-white/15 hover:border-white/30 shadow-md backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 group"
              >
                <Github className="w-3.5 h-3.5 text-white group-hover:text-amber-300 transition-colors" />
                <span>GitHub</span>
                <span className="text-white/40 font-normal">/CyberFocus2410</span>
                <ArrowUpRight className="w-3 h-3 text-white/50 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://www.linkedin.com/in/cyberfocus2410/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile - Vivan Mittal"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A66C2]/15 hover:bg-[#0A66C2]/25 text-xs font-mono font-bold text-[#70B5F9] hover:text-white border border-[#0A66C2]/30 hover:border-[#0A66C2]/60 shadow-md backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 group"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2] group-hover:text-[#70B5F9] transition-colors" />
                <span>LinkedIn</span>
                <span className="text-white/40 font-normal">/in/cyberfocus2410</span>
                <ArrowUpRight className="w-3 h-3 text-white/50 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Dual-Layer Portrait with Zoomed Professional Presence */}
          <div className="lg:col-span-5 flex justify-center lg:justify-center relative self-end pt-4 sm:pt-8 lg:-translate-x-6 xl:-translate-x-10">
            <InteractivePortrait />
          </div>
        </div>
      </Container>

      {/* Bottom Status Strip */}
      <StatusStrip />

      {/* Ability Modal */}
      <AbilityModal
        isOpen={isAbilityModalOpen}
        onClose={() => setIsAbilityModalOpen(false)}
      />
    </Section>
  );
}
