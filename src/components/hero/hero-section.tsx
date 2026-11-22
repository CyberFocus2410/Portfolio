"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FlipCard } from "@/components/hero/flip-card";
import { AbilityModal } from "@/components/hero/ability-modal";
import { StatusStrip } from "@/components/hero/status-strip";
import { Sparkles } from "lucide-react";

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
          {/* Left Column: Greeting, Headline, Flip Card, CTA */}
          <div className="lg:col-span-7 pb-8 sm:pb-14">
            <Label dotColor="bg-emerald-400">
              Cybersecurity Analyst & Blue Teamer
            </Label>

            <div className="mt-4 sm:mt-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#EDE9E3] leading-[1.05]">
                Hi, I&apos;m Vivan.
              </h1>
              <p className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#A39A92] mt-1.5 sm:mt-2.5">
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
              <Link href="/work">
                <Button variant="outline" size="lg">
                  See my work
                </Button>
              </Link>
              <Link href="/design-system">
                <Button variant="secondary" size="lg">
                  Design System
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Grayscale Portrait Cutout with Floating Ability Card Pill */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative self-end pt-4 sm:pt-8">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px]">
              {/* Floating "My ability card" Pill */}
              <button
                onClick={() => setIsAbilityModalOpen(true)}
                title="View verified skills and profile"
                aria-label="Open My ability card"
                className="absolute top-10 sm:top-14 left-0 sm:-left-4 z-30 px-4 py-2 rounded-full bg-[#1A1818]/90 hover:bg-[#211E1E] text-xs font-mono text-[#EDE9E3] border border-white/20 shadow-2xl backdrop-blur-md flex items-center gap-2 transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>My ability card</span>
              </button>

              {/* Portrait Cutout (cut off by bottom edge of container) */}
              <div className="relative overflow-hidden flex items-end justify-center pointer-events-none">
                <Image
                  src="/assets/portrait.webp"
                  alt="Vivan Mittal - Grayscale Portrait"
                  width={420}
                  height={760}
                  priority
                  className="w-auto h-[480px] sm:h-[560px] md:h-[620px] object-contain object-bottom drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] filter contrast-110"
                />
              </div>
            </div>
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
