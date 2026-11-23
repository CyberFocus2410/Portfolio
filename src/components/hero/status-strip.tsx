import * as React from "react";
import { Container } from "@/components/ui/container";

export function StatusStrip() {
  return (
    <div className="relative z-20 border-t border-white/[0.08] bg-[#1A1818]/90 backdrop-blur-sm py-4">
      <Container size="wide">
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#D1C9BE] gap-3">
          {/* Availability */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-wider uppercase text-white font-semibold">
              Available for internships &amp; roles
            </span>
          </div>

          {/* Location */}
          <div className="tracking-wider uppercase text-[#D1C9BE]">
            Delhi NCR, India · Remote-first, worldwide
          </div>

          {/* Scroll Cue */}
          <a
            href="#doors-stage"
            className="tracking-wider uppercase hover:text-white transition-colors flex items-center gap-1 group text-[#D1C9BE]"
          >
            <span>Scroll to explore</span>
            <span className="group-hover:translate-y-0.5 transition-transform text-white">↓</span>
          </a>
        </div>
      </Container>
    </div>
  );
}
