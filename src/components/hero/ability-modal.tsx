"use client";

import * as React from "react";
import { Sparkles, Shield, Cpu, Code2, Award, GraduationCap, X } from "lucide-react";
import { Tag } from "@/components/ui/tag";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface AbilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AbilityModal({ isOpen, onClose }: AbilityModalProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ability-card-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
    >
      <div className="bg-[#211E1E] border border-white/15 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-amber-400/10 text-amber-300 border border-amber-400/20">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h2 id="ability-card-title" className="font-bold text-lg text-[#EDE9E3]">
                Vivan Mittal · Ability Card
              </h2>
              <p className="text-xs font-mono text-[#A39A92]">
                Engineering Profile & Technical Capabilities
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close ability card"
            className="p-1.5 rounded-full hover:bg-white/10 text-[#A39A92] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="mt-6 space-y-6">
          {/* Section 1: Core Specialization */}
          <div>
            <Label dotColor="bg-emerald-400">Primary Specialization</Label>
            <p className="text-sm font-semibold text-[#EDE9E3] mt-1.5">
              Cybersecurity Defensive Operations (Blue Team) & Security Auditing
            </p>
            <p className="text-xs text-[#A39A92] mt-1 leading-relaxed">
              Hands-on vulnerability analysis, cryptographic algorithm implementation, password entropy modeling, and breach footprint tracking.
            </p>
          </div>

          {/* Section 2: Verified Experience & Education */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                <Shield className="w-3.5 h-3.5" />
                <span>INTERNSHIP (2026)</span>
              </div>
              <p className="text-xs font-bold text-[#EDE9E3]">Decode Labs</p>
              <p className="text-[11px] text-[#A39A92] mt-0.5">
                Cybersecurity Intern · Cryptography (Krypta) & Password Analyzer
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>EDUCATION (2025–2029)</span>
              </div>
              <p className="text-xs font-bold text-[#EDE9E3]">Delhi Technical Campus</p>
              <p className="text-[11px] text-[#A39A92] mt-0.5">
                B.Tech Computer Science & Engineering (GGSIPU)
              </p>
            </div>
          </div>

          {/* Section 3: Key Hackathons & Credentials */}
          <div>
            <Label dotColor="bg-amber-400">Key Distinctions & Certifications</Label>
            <div className="mt-2 space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-[#EDE9E3] font-medium flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-amber-300" />
                  Vihaan 9.0 (IEEE DTU)
                </span>
                <span className="font-mono text-[#A39A92] text-[11px]">Top 15 Finalist (Cardiac Analyst)</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-[#EDE9E3] font-medium flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-amber-300" />
                  FoodScope Hackathon (IIIT Delhi)
                </span>
                <span className="font-mono text-[#A39A92] text-[11px]">Top 20 Finalist (Offline Round)</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-[#EDE9E3] font-medium flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-emerald-300" />
                  CRTOM (Red Team Leaders)
                </span>
                <span className="font-mono text-[#A39A92] text-[11px]">Certified Red Team Operations</span>
              </div>
            </div>
          </div>

          {/* Section 4: Skills Matrix */}
          <div>
            <Label dotColor="bg-cyan-400">Technical Arsenal</Label>
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              <Tag variant="status">Python</Tag>
              <Tag variant="status">Blue Teaming</Tag>
              <Tag variant="active">Entropy Analysis</Tag>
              <Tag variant="active">OSINT</Tag>
              <Tag variant="active">TypeScript</Tag>
              <Tag variant="active">Next.js</Tag>
              <Tag variant="active">Tailwind CSS</Tag>
              <Tag variant="default">FastAPI</Tag>
              <Tag variant="default">Explainable AI</Tag>
              <Tag variant="default">Dart / Flutter</Tag>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-[#A39A92]">
            Available for Summer 2026 / 2027 Internships
          </span>
          <Button variant="primary" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
