"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  GraduationCap,
  Briefcase,
  Calendar,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  Terminal,
} from "lucide-react";

export function EducationExperience() {
  const [activeTab, setActiveTab] = React.useState<"both" | "experience" | "education">("both");

  return (
    <Section id="journey" className="py-16 sm:py-24 bg-[#181616] border-t border-white/10 relative overflow-hidden">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10 mb-10">
          <div>
            <Label dotColor="bg-amber-400">Academic & Professional Foundations</Label>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
              Education & Experience
            </h2>
            <p className="text-sm sm:text-base text-[#D1C9BE] mt-2 max-w-2xl leading-relaxed">
              Undergraduate computer science scholar at Delhi Technical Campus with hands-on cybersecurity and data research internships.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#211E1E] border border-white/15 self-start md:self-auto">
            <button
              onClick={() => setActiveTab("both")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                activeTab === "both"
                  ? "bg-white text-[#1A1818] shadow-md"
                  : "text-[#D1C9BE] hover:text-white"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                activeTab === "experience"
                  ? "bg-white text-[#1A1818] shadow-md"
                  : "text-[#D1C9BE] hover:text-white"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                activeTab === "education"
                  ? "bg-white text-[#1A1818] shadow-md"
                  : "text-[#D1C9BE] hover:text-white"
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Dual Window Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Education Window */}
          {(activeTab === "both" || activeTab === "education") && (
            <div className="flex flex-col">
              <div className="rounded-3xl bg-[#1C1A1A] border border-white/15 overflow-hidden shadow-2xl flex-1 flex flex-col justify-between">
                {/* Window Chrome Bar */}
                <div className="px-5 py-3.5 bg-[#242121] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-white/70 font-semibold">
                      education.terminal
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-amber-300 font-bold">
                    <GraduationCap className="w-4 h-4" />
                    <span>2025 — 2029</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-amber-400/10 text-amber-300 border border-amber-400/20">
                        UNDERGRADUATE DEGREE
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mt-3 tracking-tight">
                        B.Tech in Computer Science & Engineering
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-emerald-400 font-semibold mt-1">
                        Delhi Technical Campus (Affiliated to GGSIPU)
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-[#D1C9BE] leading-relaxed">
                    Four-year comprehensive engineering program with rigorous emphasis on systems architecture, discrete mathematics, algorithmic complexity in C & Python, POSIX operating systems, and defensive cybersecurity paradigms.
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-6 space-y-2.5 pt-4 border-t border-white/10">
                    <div className="flex items-start gap-2.5 text-xs text-white font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>Foundational coursework in C, Python, Computer Networks, and Discrete Mathematics</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-white font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>Active participant in university coding competitions, hackathons, and technical clubs</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-white font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>Dedicated laboratory research in cryptographic cipher systems and network defense</span>
                    </div>
                  </div>
                </div>

                {/* Window Footer */}
                <div className="px-6 py-4 bg-[#161414] border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#D1C9BE]">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    Enrolled & In Good Standing
                  </span>
                  <Link
                    href="/my-story"
                    className="text-white hover:text-amber-300 font-bold flex items-center gap-1 transition-colors"
                  >
                    <span>Read Timeline</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Experience Window */}
          {(activeTab === "both" || activeTab === "experience") && (
            <div className="flex flex-col space-y-6">
              {/* Role 1: Decode Labs */}
              <div className="rounded-3xl bg-[#1C1A1A] border border-white/15 overflow-hidden shadow-2xl">
                {/* Window Chrome Bar */}
                <div className="px-5 py-3.5 bg-[#242121] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-white/70 font-semibold">
                      industry_internship.sh
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-bold">
                    <Briefcase className="w-4 h-4" />
                    <span>Early 2026</span>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                      CYBERSECURITY INTERN
                    </span>
                    <span className="text-xs font-mono text-amber-300 font-semibold">
                      Decode Labs
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mt-2.5 tracking-tight">
                    Software & Cybersecurity Engineering
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#D1C9BE] leading-relaxed">
                    Developed mathematical password Shannon entropy calculators complying with NIST SP 800-63B guidelines, implemented SHA-1 k-anonymity breach verification against HaveIBeenPwned API, and built cryptographic client utilities with Next.js and TypeScript.
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <FileCheck className="w-3.5 h-3.5" />
                      Verified Offer Letter
                    </span>
                    <Link
                      href="/certificates"
                      className="text-white hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
                    >
                      <span>Verify Certificate</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Role 2: Indus Rise */}
              <div className="rounded-3xl bg-[#1C1A1A] border border-white/15 overflow-hidden shadow-2xl">
                {/* Window Chrome Bar */}
                <div className="px-5 py-3.5 bg-[#242121] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-white/70 font-semibold">
                      data_research.py
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-purple-300 font-bold">
                    <Terminal className="w-4 h-4" />
                    <span>Late 2025</span>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-purple-400/10 text-purple-300 border border-purple-400/20">
                      STUDENT RESEARCHER
                    </span>
                    <span className="text-xs font-mono text-purple-300 font-semibold">
                      Indus Rise Foundation
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mt-2.5 tracking-tight">
                    Data Analytics & Predictive Pipelines
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#D1C9BE] leading-relaxed">
                    Explored high-dimensional dataset preprocessing, automated statistical validation, predictive modeling using Scikit-Learn, and authored analytical notebooks for Dataverse research milestones.
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-purple-300 flex items-center gap-1.5">
                      <FileCheck className="w-3.5 h-3.5" />
                      Verified Appointment
                    </span>
                    <Link
                      href="/certificates"
                      className="text-white hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
                    >
                      <span>Verify Certificate</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
