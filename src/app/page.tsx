"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tag } from "@/components/ui/tag";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Sparkles, Code2, ArrowUpRight } from "lucide-react";

export default function HomePage() {
  // Roles supplied by user
  const roles = [
    "CyberSecurity Analyst",
    "Penetration Tester",
    "Blue Teaming in cybersecurity",
    "AI/ML Developer",
    "Web Developer",
    "App Developer",
    "UI/UX Designer",
    "Freelancer",
    "Photographer",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = React.useState(0);
  const [showAbilityModal, setShowAbilityModal] = React.useState(false);

  // Auto-cycle flip card on a timer
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <Section glow className="pt-20 sm:pt-28 md:pt-36 pb-0 overflow-hidden min-h-[92vh] flex flex-col justify-between">
        <Container size="wide" className="relative z-10 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            {/* Left Column: Greeting, Headline, Flip Card, CTA */}
            <div className="lg:col-span-7 pb-12 sm:pb-16">
              <Label dotColor="bg-emerald-400">
                Independent Developer · Delhi NCR, India
              </Label>

              <div className="mt-6 sm:mt-8">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#EDE9E3]">
                  Hi, I&apos;m Vivan.
                </h1>
                <p className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#A39A92] mt-2 sm:mt-3">
                  I am a
                </p>
              </div>

              {/* White Desk-Calendar Flip Card with Spiral Rings */}
              <div
                onClick={() => setCurrentRoleIndex((prev) => (prev + 1) % roles.length)}
                className="mt-6 sm:mt-8 relative inline-block cursor-pointer select-none group"
                title="Click or tap to flip role"
              >
                {/* Spiral Rings Header */}
                <div className="relative z-20 flex justify-between px-6 -mb-2">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2.5 h-5 rounded-full bg-neutral-300 border border-neutral-400 shadow-sm"
                    />
                  ))}
                </div>

                {/* Desk-Calendar Card Body */}
                <div className="relative bg-[#EDE9E3] text-[#1A1818] rounded-2xl sm:rounded-3xl p-6 sm:p-8 min-w-[290px] sm:min-w-[440px] md:min-w-[480px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-neutral-300">
                  <div className="h-14 sm:h-16 flex items-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentRoleIndex}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight"
                      >
                        {roles[currentRoleIndex]}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Card bottom footer counter */}
                  <div className="mt-4 pt-3 border-t border-neutral-300 flex items-center justify-between text-xs font-mono text-neutral-600">
                    <span>DESK ROLES</span>
                    <span>
                      {String(currentRoleIndex + 1).padStart(2, "0")} /{" "}
                      {String(roles.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
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
                    Style Guide
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: Grayscale Portrait Cutout with Floating Ability Card Pill */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative self-end pt-8">
              <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
                {/* Floating "My ability card" pill */}
                <button
                  onClick={() => setShowAbilityModal(true)}
                  className="absolute top-12 left-0 sm:-left-6 z-20 px-4 py-2 rounded-full bg-[#1A1818]/90 hover:bg-[#211E1E] text-xs font-mono text-[#EDE9E3] border border-white/20 shadow-xl backdrop-blur-md flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>My ability card</span>
                </button>

                {/* Portrait Cutout (cut off by bottom container) */}
                <div className="relative overflow-hidden flex items-end justify-center">
                  <Image
                    src="/assets/portrait.webp"
                    alt="Vivan Mittal - Portrait"
                    width={400}
                    height={720}
                    priority
                    className="w-auto h-[460px] sm:h-[540px] md:h-[600px] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] filter contrast-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Bottom Status Strip */}
        <div className="relative z-20 border-t border-white/[0.08] bg-[#1A1818]/90 backdrop-blur-sm py-4">
          <Container size="wide">
            <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#A39A92] gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="tracking-wider uppercase">Available for work</span>
              </div>
              <div className="tracking-wider uppercase">
                Delhi NCR, India · DTC (GGSIPU)
              </div>
              <div className="tracking-wider uppercase hover:text-white transition-colors">
                Scroll to explore ↓
              </div>
            </div>
          </Container>
        </div>
      </Section>

      {/* Overview Navigation Cards */}
      <Section className="bg-[#1A1818] py-16">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card interactive className="p-8 group">
              <Shield className="w-8 h-8 text-emerald-400 mb-4" />
              <Label>Domain Exploration</Label>
              <h3 className="text-xl font-bold mt-2 group-hover:text-white transition-colors">
                Interactive Doors
              </h3>
              <p className="text-sm text-[#A39A92] mt-2">
                Step through 4 curated doors: Cybersecurity, Healthcare AI, Freelance Works, and AI/ML.
              </p>
              <Link href="/work" className="inline-flex items-center gap-1.5 text-xs font-mono text-[#EDE9E3] mt-6 group-hover:underline">
                Explore Doors <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </Card>

            <Card interactive className="p-8 group">
              <Code2 className="w-8 h-8 text-cyan-400 mb-4" />
              <Label>Verified Projects</Label>
              <h3 className="text-xl font-bold mt-2 group-hover:text-white transition-colors">
                Live Repositories
              </h3>
              <p className="text-sm text-[#A39A92] mt-2">
                Explore SecureScan AI, Password Strength Analyser, Cardiac Analyst, LaunchLens, and more.
              </p>
              <Link href="/projects" className="inline-flex items-center gap-1.5 text-xs font-mono text-[#EDE9E3] mt-6 group-hover:underline">
                View All Projects <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </Card>

            <Card interactive className="p-8 group">
              <Sparkles className="w-8 h-8 text-amber-400 mb-4" />
              <Label>Phase 1 Deliverable</Label>
              <h3 className="text-xl font-bold mt-2 group-hover:text-white transition-colors">
                Design System
              </h3>
              <p className="text-sm text-[#A39A92] mt-2">
                Inspect color palettes, button pills, cards, labels, tags, and typography tokens.
              </p>
              <Link href="/design-system" className="inline-flex items-center gap-1.5 text-xs font-mono text-[#EDE9E3] mt-6 group-hover:underline">
                Open Style Guide <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Ability Card Modal */}
      {showAbilityModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#211E1E] border border-white/20 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <h3 className="font-bold text-lg text-[#EDE9E3]">Vivan Mittal · Ability Card</h3>
              </div>
              <button
                onClick={() => setShowAbilityModal(false)}
                className="text-xs font-mono px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-[#EDE9E3]"
              >
                ✕ Close
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <Label>Primary Focus</Label>
                <p className="text-sm text-[#EDE9E3] mt-1 font-medium">
                  Cybersecurity Blue Teaming, Threat Detection & AI/ML Systems
                </p>
              </div>

              <div>
                <Label>Education & Training</Label>
                <p className="text-sm text-[#A39A92] mt-1">
                  B.Tech CSE, Delhi Technical Campus (GGSIPU, 2025–2029)
                </p>
                <p className="text-xs text-[#A39A92] mt-0.5">
                  CRTOM Certified, Decode Labs Cybersecurity Intern (2026)
                </p>
              </div>

              <div>
                <Label>Core Technical Arsenal</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Tag variant="active">Python</Tag>
                  <Tag variant="active">SIEM / Blue Team</Tag>
                  <Tag variant="active">Entropy Analysis</Tag>
                  <Tag variant="active">Next.js / React</Tag>
                  <Tag variant="active">TypeScript</Tag>
                  <Tag variant="active">Tailwind CSS</Tag>
                  <Tag variant="active">FastAPI / Flask</Tag>
                  <Tag variant="active">Explainable AI</Tag>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
              <Button variant="primary" size="sm" onClick={() => setShowAbilityModal(false)}>
                Done
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
