"use client";

import * as React from "react";
import { ExternalLink, Github, Terminal, Shield, Sparkles } from "lucide-react";
import { ProjectVisual } from "@/components/projects/project-visual";

interface DeviceMockupProps {
  type: "monitor" | "phone" | "none";
  title: string;
  domain: string;
  stack: string[];
  slug?: string;
  repoUrl?: string;
  liveUrl?: string;
  className?: string;
}

export function DeviceMockup({
  type,
  title,
  domain,
  stack,
  slug,
  repoUrl,
  liveUrl,
  className = "",
}: DeviceMockupProps) {
  const projectSlug = slug || title.toLowerCase().replace(/\s+/g, "-");

  if (type === "phone") {
    return (
      <div className={`relative mx-auto w-[240px] sm:w-[260px] h-[480px] sm:h-[500px] rounded-[44px] bg-[#141212] border-[10px] border-[#2A2626] shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between ${className}`}>
        {/* Dynamic Island / Speaker Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1A1818] mr-2" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#2A2626]" />
        </div>

        {/* Screen Header */}
        <div className="pt-10 px-4 pb-3 bg-gradient-to-b from-[#211E1E] to-transparent flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-mono text-white/80 font-bold uppercase">{domain}</span>
          </div>
          <span className="text-[10px] font-mono text-white/50">v1.0</span>
        </div>

        {/* Screen Content with Interactive Visual UI */}
        <div className="px-3 py-2 flex-1 flex flex-col justify-center">
          <ProjectVisual slug={projectSlug} title={title} />
        </div>

        {/* Screen Bottom Bar */}
        <div className="p-3 bg-[#1A1818] border-t border-white/5 flex items-center justify-center gap-3">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono text-amber-300 hover:text-white flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono text-emerald-400 hover:text-white flex items-center gap-1"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Preview</span>
            </a>
          )}
        </div>

        {/* Home Indicator Bar */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/40 rounded-full" />
      </div>
    );
  }

  // Desktop Monitor Frame
  return (
    <div className={`relative w-full rounded-2xl bg-[#141212] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col ${className}`}>
      {/* Browser / Terminal Chrome Bar */}
      <div className="h-9 px-4 bg-[#1F1C1C] border-b border-white/10 flex items-center justify-between">
        {/* Window Dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>

        {/* Browser URL Pill */}
        <div className="px-3 py-0.5 rounded-full bg-black/40 border border-white/10 text-[10px] sm:text-xs font-mono text-[#D1C9BE] flex items-center gap-1.5 max-w-[200px] sm:max-w-xs truncate">
          <Shield className="w-3 h-3 text-amber-400 flex-shrink-0" />
          <span className="truncate">https://github.com/CyberFocus2410/{projectSlug}</span>
        </div>

        <div className="w-10 flex justify-end">
          <Terminal className="w-3.5 h-3.5 text-white/40" />
        </div>
      </div>

      {/* Screen Canvas Area with Live Visual Preview */}
      <div className="p-3 sm:p-4 bg-gradient-to-b from-[#181616] via-[#121010] to-[#0E0D0D]">
        <ProjectVisual slug={projectSlug} title={title} />
      </div>
    </div>
  );
}
