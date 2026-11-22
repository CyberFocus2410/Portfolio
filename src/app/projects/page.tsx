import * as React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Label } from "@/components/ui/label";
import { ProjectsDirectory } from "@/components/projects/projects-directory";

export const metadata = {
  title: "Projects & Engineering Case Studies | Vivan Mittal",
  description:
    "Explore 12+ verified engineering repositories across Cybersecurity, Medical AI, Freelance client portals, and AI/ML pipelines.",
};

export default function ProjectsPage() {
  return (
    <Section className="py-12 sm:py-20 min-h-screen">
      <Container size="wide">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <Label dotColor="bg-amber-400">ENGINEERING DIRECTORY</Label>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mt-3">
            Projects & Case Studies
          </h1>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Production systems, defensive security tooling, clinical AI research prototypes, and commercial client deliverables built by Vivan Mittal.
          </p>
        </div>

        {/* Interactive Directory with Filters */}
        <ProjectsDirectory />
      </Container>
    </Section>
  );
}
