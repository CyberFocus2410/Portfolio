"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { RopePull } from "@/components/chrome/rope-pull";

export function Header() {
  const pathname = usePathname();
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
    const interval = setInterval(updateDateTime, 10000);
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
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#1A1818]/85 backdrop-blur-md border-b border-white/[0.06] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-[#EDE9E3] hover:text-white transition-colors flex items-center gap-2"
        >
          <span>Vivan Mittal</span>
          <span className="text-[#A39A92] font-mono text-xs font-normal">/ CSE</span>
        </Link>

        {/* Centered Desktop Nav with dynamic active underline */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs font-medium tracking-wide transition-colors hover:text-[#EDE9E3] relative py-1",
                  isActive
                    ? "text-[#EDE9E3] underline underline-offset-8 decoration-1 decoration-white/60 font-semibold"
                    : "text-[#A39A92]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Chrome: Time & Date Pill + Hanging Rope Pull */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-[#A39A92]">
            <span>Local time</span>
            <span className="text-[#EDE9E3] font-semibold">{timeString}</span>
            <span className="text-white/20">·</span>
            <span>{dateString}</span>
          </div>

          {/* Interactive Hanging Rope with Spring Physics */}
          <RopePull />
        </div>
      </div>
    </header>
  );
}
