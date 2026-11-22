import * as React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { SEED_PROJECTS } from "@/sanity/seed-data";
import { DeviceMockup } from "@/components/projects/device-mockup";
import { ArrowLeft, Github, ExternalLink, ShieldCheck, Cpu, Code2, AlertCircle } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SEED_PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = SEED_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Section className="py-12 sm:py-20 min-h-screen">
      <Container size="wide">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="max-w-3xl border-b border-white/10 pb-10">
          <div className="flex items-center gap-3">
            <Label dotColor="bg-amber-400">{project.domainLabel.toUpperCase()}</Label>
            <span className="text-xs font-mono text-muted-foreground">•</span>
            <span className="text-xs font-mono text-muted-foreground">{project.role}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mt-4">
            {project.title}
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#D1C9BE] leading-relaxed">
            {project.summary}
          </p>

          {/* Links */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#1A1818] text-xs font-mono font-bold hover:bg-neutral-100 transition-colors shadow-md"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold hover:bg-emerald-500/30 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Deployment</span>
              </a>
            )}
            <Link
              href={`/work/${project.domain}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D1C9BE] hover:text-white hover:bg-white/10 transition-colors"
            >
              <span>View in Domain Door →</span>
            </Link>
          </div>
        </div>

        {/* Healthcare Research Disclaimer */}
        {project.disclaimer && (
          <div className="mt-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-mono flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Compliance & Ethics Notice: </span>
              <span>{project.disclaimer}</span>
            </div>
          </div>
        )}

        {/* Layout Grid: Mockup Frame + Technical Deep Dive */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Device Mockup */}
          <div className="lg:col-span-7">
            <DeviceMockup
              type={project.mockupType}
              title={project.title}
              domain={project.domainLabel}
              stack={project.stack}
              repoUrl={project.repoUrl}
              liveUrl={project.liveUrl}
            />
          </div>

          {/* Right Column: Case Study Spec */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 sm:p-8 rounded-3xl bg-[#1C1A1A] border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-300 font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Architecture & Implementation</span>
              </div>
              <p className="text-sm text-[#EDE9E3] leading-relaxed">
                {project.body}
              </p>
            </Card>

            <Card className="p-6 sm:p-8 rounded-3xl bg-[#1C1A1A] border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-300 font-bold uppercase tracking-wider mb-4">
                <Code2 className="w-4 h-4 text-amber-400" />
                <span>Technologies & Frameworks</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-6 sm:p-8 rounded-3xl bg-[#1C1A1A] border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-300 font-bold uppercase tracking-wider mb-3">
                <Cpu className="w-4 h-4 text-amber-400" />
                <span>Role & Execution</span>
              </div>
              <p className="text-xs font-mono text-[#D1C9BE]">
                {project.role} • Designed, developed, and maintained in public GitHub repository under Apache 2.0 / MIT licenses.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}
