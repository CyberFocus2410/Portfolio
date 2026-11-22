"use client";

import * as React from "react";
import Link from "next/link";
import { SEED_PROJECTS, SeedProject } from "@/sanity/seed-data";
import { DeviceMockup } from "@/components/projects/device-mockup";
import { Card } from "@/components/ui/card";
import { ArrowRight, Search, Github, ExternalLink, AlertCircle } from "lucide-react";

const DOMAIN_TABS = [
  { id: "all", label: "All Works" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "healthcare-ai", label: "Medical AI" },
  { id: "web-freelance", label: "Freelancing" },
  { id: "ai-ml", label: "AI / ML" },
  { id: "apps", label: "Apps" },
];

export function ProjectsDirectory() {
  const [activeTab, setActiveTab] = React.useState("all");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredProjects = React.useMemo(() => {
    return SEED_PROJECTS.filter((p) => {
      const matchesTab = activeTab === "all" || p.domain === activeTab;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q));
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="w-full">
      {/* Controls: Domain Filter Tabs & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
        {/* Domain Tabs */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {DOMAIN_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                  isActive
                    ? "bg-white text-[#1A1818] shadow-md scale-105"
                    : "bg-[#211E1E] text-[#D1C9BE] hover:text-white hover:bg-[#292525] border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects or tech..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-[#1A1818] border border-white/15 text-xs text-white placeholder:text-muted-foreground focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 font-mono"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="py-20 text-center text-muted-foreground font-mono text-sm">
          No projects found matching your filter criteria.
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project) => (
            <Card
              key={project._id}
              className="p-6 sm:p-8 rounded-3xl bg-[#1C1A1A] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Device Mockup */}
                <div className="mb-6">
                  <DeviceMockup
                    type={project.mockupType}
                    title={project.title}
                    domain={project.domainLabel}
                    stack={project.stack}
                    repoUrl={project.repoUrl}
                    liveUrl={project.liveUrl}
                  />
                </div>

                {/* Domain & Title */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-300 font-bold uppercase tracking-wider">
                    {project.domainLabel}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {project.role}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mt-2 tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-[#D1C9BE] leading-relaxed">
                  {project.summary}
                </p>

                {/* Healthcare Disclaimer Notice */}
                {project.disclaimer && (
                  <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] font-mono flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-400" />
                    <span>{project.disclaimer}</span>
                  </div>
                )}
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-white/80 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                  )}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-amber-300 transition-colors group"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
