import * as React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { DOORS_DATA } from "@/data/doors-data";
import { ProjectVisual } from "@/components/projects/project-visual";
import { ArrowLeft, ExternalLink, Github, Monitor } from "lucide-react";

interface DomainPageProps {
  params: Promise<{ domain: string }>;
}

export async function generateStaticParams() {
  return DOORS_DATA.map((door) => ({
    domain: door.slug,
  }));
}

export default async function DomainPage({ params }: DomainPageProps) {
  const { domain } = await params;
  const door = DOORS_DATA.find((d) => d.slug === domain);

  if (!door) {
    notFound();
  }

  // Domain-specific seed projects
  const domainProjects: Record<
    string,
    {
      title: string;
      label: string;
      subtitle: string;
      description: string;
      tags: string[];
      repoUrl?: string;
      liveUrl?: string;
    }[]
  > = {
    cybersecurity: [
      {
        title: "SecureScan AI",
        label: "AI VULNERABILITY SCANNER",
        subtitle: "Automated Web Security Auditor",
        description:
          "Intelligent security scanner detecting common OWASP web vulnerabilities, sensitive information leakage, and misconfigured HTTP headers with automated remediation reporting.",
        tags: ["Python", "Vulnerability Scanner", "OWASP", "FastAPI"],
        repoUrl: "https://github.com/CyberFocus2410/SecureScan",
      },
      {
        title: "Password Strength Analyser",
        label: "SECURITY UTILITY",
        subtitle: "Entropy & Pattern Detection Engine",
        description:
          "Advanced password analyzer built during Decode Labs internship. Computes mathematical entropy, flags keyboard walk patterns, dictionary matches, and sequential repeats.",
        tags: ["Python", "Entropy Modeling", "Decode Labs", "Algorithms"],
        repoUrl: "https://github.com/CyberFocus2410/Password_Strength_Analyser",
      },
      {
        title: "PhishLeakGuard",
        label: "BREACH MONITOR",
        subtitle: "HIBP Exposure & Phishing Education",
        description:
          "Cybersecurity tool checking email exposure in public data breaches using the Have I Been Pwned API and educating users on phishing attack vectors.",
        tags: ["Dart", "HIBP API", "Phishing Prevention", "Mobile"],
        repoUrl: "https://github.com/CyberFocus2410/PhishLeakGuard_1",
      },
    ],
    "healthcare-ai": [
      {
        title: "Cardiac Analyst",
        label: "RESEARCH PROTOTYPE",
        subtitle: "Vihaan 9.0 (IEEE DTU) Top 15 Finalist",
        description:
          "AI-driven cardiac risk prediction and emergency response prototype utilizing real-time ECG telemetry analysis and clinical urgency classification.",
        tags: ["Python", "ECG Modeling", "IEEE DTU Finalist", "Research Only"],
        repoUrl: "https://github.com/CyberFocus2410/Cardiac_Analyst",
      },
      {
        title: "Health Vault",
        label: "PATIENT RECORDS",
        subtitle: "Secure Health History Vault",
        description:
          "Secure digital repository allowing patients to store, organize, and share vital medical records, lab reports, and prescriptions securely with doctors.",
        tags: ["TypeScript", "HIPAA Architecture", "Next.js", "HealthTech"],
        repoUrl: "https://github.com/CyberFocus2410/Health_Vault4",
      },
      {
        title: "PneumoVision",
        label: "AI DIAGNOSTIC PROTOTYPE",
        subtitle: "Chest X-Ray Anomaly Detection",
        description:
          "Deep learning diagnostic assistance prototype analyzing synthetic chest radiographs for pneumonia indicators.",
        tags: ["JavaScript", "Computer Vision", "Research Only", "Synthetic Data"],
        repoUrl: "https://github.com/CyberFocus2410/PneumoVision",
      },
    ],
    "web-freelance": [
      {
        title: "VAP Handicrafts",
        label: "E-COMMERCE & CATALOG",
        subtitle: "Artisan Business Showcase",
        description:
          "High-performance catalog and storefront built for authentic handicraft artisans, featuring responsive product filtering and rapid page loads.",
        tags: ["TypeScript", "Next.js", "Tailwind CSS", "SEO 95+"],
        repoUrl: "https://github.com/CyberFocus2410/VAP-Handicrafts",
      },
      {
        title: "NIOR Rooftop & Lounge",
        label: "LUXURY HOSPITALITY & 3D PORTAL",
        subtitle: "Bespoke Dining, Twilight Soundscape & 3D Terrace Experience",
        description:
          "Bespoke luxury hospitality portal for NIOR Rooftop & Lounge (5th Floor Starlight Deck, Indirapuram). Features an interactive 3D terrace atmosphere, ambient twilight soundscape audio, complimentary table reservation requests, and handcrafted dining showcase.",
        tags: ["Next.js", "Tailwind CSS", "3D Experience", "Framer Motion", "Audio API"],
        liveUrl: "https://nior-cafe.vercel.app",
      },
    ],
    "ai-ml": [
      {
        title: "LaunchLens",
        label: "AI WEB AUDITOR",
        subtitle: "URL-Based Data Breach & UX Scorecard",
        description:
          "AI-powered web auditor that tests deployed URLs, inspects security headers and privacy exposures, and computes an automated risk scorecard using Gemini.",
        tags: ["TypeScript", "Gemini 3", "AI Agents", "Next.js"],
        repoUrl: "https://github.com/CyberFocus2410/LaunchLens",
      },
      {
        title: "HireLoop",
        label: "MULTI-AGENT WORKFLOW",
        subtitle: "Autonomous Policy-Driven Hiring",
        description:
          "Multi-agent system evaluating candidate requests against internal policy frameworks, automating consensus decisions, and escalating anomalies to Notion.",
        tags: ["TypeScript", "Multi-Agent", "Notion API", "Autonomous"],
        repoUrl: "https://github.com/CyberFocus2410/HireLoop",
      },
      {
        title: "SamajhLe",
        label: "LEGAL CONTRACT RAG",
        subtitle: "Indian Law Mapping & Simplification",
        description:
          "AI contract simplifier that translates legal jargon into plain language, highlights hidden liabilities, and maps clauses directly to Indian statutory law.",
        tags: ["TypeScript", "RAG Pipeline", "Legal AI", "Indian Law"],
        repoUrl: "https://github.com/CyberFocus2410/SamajhLe",
      },
    ],
  };

  const projects = domainProjects[door.slug] || [];

  return (
    <Section className="py-12 sm:py-20 min-h-screen">
      <Container size="wide">
        {/* Breadcrumb Back Link */}
        <div className="mb-6">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#A39A92] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Doors</span>
          </Link>
        </div>

        {/* Giant Domain Title & Tagline matching Screenshot 4 */}
        <div className="border-b border-white/10 pb-8">
          <Label dotColor="bg-amber-400">{door.brassTitle}</Label>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#EDE9E3] mt-3">
            {door.title}
          </h1>
          <p className="text-sm sm:text-base text-[#A39A92] mt-3 max-w-2xl leading-relaxed">
            {door.tagline} — verified projects, production architectures, and open-source repositories.
          </p>
        </div>

        {/* Healthcare research disclaimer alert if healthcare-ai */}
        {door.slug === "healthcare-ai" && (
          <div className="mt-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs flex items-center gap-3">
            <span className="font-bold">Notice:</span>
            <span>Research and educational prototype, not a medical device. Built using synthetic anonymized datasets.</span>
          </div>
        )}

        {/* Project Cards with Device Mockups */}
        <div className="mt-12 space-y-12">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="p-8 sm:p-12 rounded-3xl bg-[#211E1E] border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Info */}
                <div className="lg:col-span-7">
                  <div className="text-xs font-mono tracking-wider text-amber-400 font-semibold uppercase">
                    {project.label}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#EDE9E3] mt-2">
                    {project.title}
                  </h2>
                  <p className="text-xs font-mono text-[#A39A92] mt-1">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-[#A39A92] mt-4 leading-relaxed max-w-xl">
                    {project.description}
                  </p>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag, tIdx) => (
                      <Tag key={tIdx} variant="default">
                        {tag}
                      </Tag>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex items-center gap-4">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="primary" size="sm" hasArrow arrowType="up-right">
                          View Repository
                        </Button>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Device Mockup with Live Visual UI */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full max-w-md rounded-2xl bg-[#141212] border border-white/15 p-2 shadow-2xl flex flex-col items-center">
                    {/* Monitor Screen Frame */}
                    <div className="w-full rounded-xl overflow-hidden bg-[#1A1818] border border-white/10">
                      <ProjectVisual
                        slug={project.title.toLowerCase().replace(/\s+/g, "-")}
                        title={project.title}
                      />
                    </div>
                    {/* Monitor Stand */}
                    <div className="w-8 h-3 bg-[#2A2626] mt-1.5 rounded-t-sm" />
                    <div className="w-20 h-1 bg-[#3B3535] rounded-full" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
