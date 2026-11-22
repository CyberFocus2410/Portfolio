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
            </div>
          </div>

          {/* Right Column: Interactive Dual-Layer Portrait with Circular Color Lens Reveal */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative self-end pt-4 sm:pt-8">
            <InteractivePortrait
              onOpenAbilityModal={() => setIsAbilityModalOpen(true)}
            />
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
