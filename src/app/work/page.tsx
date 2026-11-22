import * as React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Label } from "@/components/ui/label";
import { DoorsStage } from "@/components/doors/doors-stage";

export const metadata = {
  title: "Work & Domains | Magic happens behind the doors",
  description:
    "Interactive physical doors into Vivan Mittal's core domains: Cybersecurity, Medical AI, Freelancing, and AI/ML.",
};

export default function WorkPage() {
  return (
    <Section className="py-12 sm:py-16 md:py-20 min-h-screen flex flex-col justify-between overflow-hidden">
      <Container size="wide" className="text-center relative z-10">
        <Label dotColor="bg-amber-400">Interactive Domain Portals</Label>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#EDE9E3] mt-3">
          Magic happens behind the doors
        </h1>
        <p className="text-sm sm:text-base text-[#A39A92] mt-3 max-w-xl mx-auto">
          Hover or tap any door to reveal its checklist, or click to enter the dedicated domain case studies.
        </p>
      </Container>

      {/* The 4 Arched Doors Stage */}
      <div className="mt-8 sm:mt-12 w-full">
        <DoorsStage />
      </div>
    </Section>
  );
}
