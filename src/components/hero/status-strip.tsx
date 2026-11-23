import * as React from "react";
import { Container } from "@/components/ui/container";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

export function StatusStrip() {
  return (
    <div className="relative z-20 border-t border-white/[0.08] bg-[#1A1818]/90 backdrop-blur-sm py-3.5">
      <Container size="wide">
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#D1C9BE] gap-3">
          {/* Availability */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-wider uppercase text-white font-semibold">
              Available for internships &amp; roles
            </span>
          </div>

          {/* Social Links on Status Strip */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href="https://github.com/CyberFocus2410"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D1C9BE] hover:text-white flex items-center gap-1.5 transition-colors font-semibold"
            >
              <Github className="w-3.5 h-3.5 text-white" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-white/50" />
            </a>
            <span className="text-white/20">·</span>
            <a
              href="https://www.linkedin.com/in/cyberfocus2410/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D1C9BE] hover:text-[#70B5F9] flex items-center gap-1.5 transition-colors font-semibold"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-white/50" />
            </a>
          </div>

          {/* Location */}
          <div className="tracking-wider uppercase text-[#A39A92] hidden md:block">
            Delhi NCR · Remote / Hybrid
          </div>

          {/* Scroll Cue */}
          <a
            href="#doors-stage"
            className="tracking-wider uppercase hover:text-white transition-colors flex items-center gap-1 group text-[#D1C9BE]"
          >
            <span>Explore work</span>
            <span className="group-hover:translate-y-0.5 transition-transform text-white">↓</span>
          </a>
        </div>
      </Container>
    </div>
  );
}
