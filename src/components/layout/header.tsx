"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
  const [timeString, setTimeString] = React.useState<string>("5:40pm");
  const [dateString, setDateString] = React.useState<string>("22 November, 2026");

  React.useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).toLowerCase()
      );
      setDateString(
        now.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      );
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Projects", href: "/projects" },
    { label: "Hackathons", href: "/hackathons" },
    { label: "Certificates", href: "/certificates" },
    { label: "Skills", href: "/skills" },
    { label: "My story", href: "/my-story" },
    { label: "Design System", href: "/design-system" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1818]/80 backdrop-blur-md border-b border-white/[0.06] transition-all">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-[#EDE9E3] hover:text-white transition-colors"
        >
          Vivan Mittal<span className="text-[#A39A92] font-mono text-xs ml-1.5 font-normal">/ CSE</span>
        </Link>

        {/* Centered Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-xs font-medium tracking-wide transition-colors hover:text-[#EDE9E3]",
                link.href === "/" ? "text-[#EDE9E3] underline underline-offset-8 decoration-1 decoration-white/40" : "text-[#A39A92]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Chrome: Time & Date Pill + Hanging Rope Placeholder */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-[#A39A92]">
            <span>Local time</span>
            <span className="text-[#EDE9E3] font-semibold">{timeString}</span>
            <span className="text-white/20">·</span>
            <span>{dateString}</span>
          </div>

          {/* Hanging Rope Wooden Pull Knob (Phase 2 interactive, styled placeholder here) */}
          <div
            title="Ambient desk lamp pull rope (Phase 2)"
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="w-[1.5px] h-6 bg-white/30 group-hover:bg-white/60 transition-colors" />
            <div className="w-2.5 h-4 bg-[#8C5A3C] rounded-full shadow-md group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </header>
  );
}
