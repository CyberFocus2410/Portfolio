import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { SEED_SKILLS, SEED_PROJECTS } from "@/sanity/seed-data";
import { Shield, Terminal, Code2, Globe, Sparkles, Cpu, ArrowRight } from "lucide-react";

interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CATEGORIES: SkillCategory[] = [
  {
    id: "security",
    title: "Security & Blue Team Tooling",
    description: "Defensive operations, network protocol sniffing, vulnerability auditing, and applied cryptography.",
    icon: <Shield className="w-5 h-5 text-amber-300" />,
  },
  {
    id: "languages",
    title: "Programming Languages",
    description: "Systems programming, algorithmic analysis, mobile engineering, and type-safe web development.",
    icon: <Code2 className="w-5 h-5 text-blue-300" />,
  },
  {
    id: "frameworks",
    title: "Frameworks, Data & Cloud",
    description: "Production web applications, mobile architectures, relational and real-time state databases.",
    icon: <Globe className="w-5 h-5 text-emerald-300" />,
  },
  {
    id: "ai-ml",
    title: "AI / ML & Multimodal Intelligence",
    description: "Computer vision classifiers, transfer learning, LLM prompt engineering, and conversational RAG pipelines.",
    icon: <Sparkles className="w-5 h-5 text-purple-300" />,
  },
];

export const metadata = {
  title: "Tech Arsenal & Skills Matrix | Vivan Mittal",
  description:
    "Comprehensive skills matrix covering Cybersecurity, Blue Teaming, Python, TypeScript, Flutter, and AI/ML.",
};

export default function SkillsPage() {
  return (
    <Section className="py-12 sm:py-20 min-h-screen">
      <Container size="wide">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <Label dotColor="bg-amber-400">TECHNICAL CAPABILITIES</Label>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mt-3">
            Tech Arsenal & Skills
          </h1>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Core competencies, toolchains, and architectural frameworks used in defensive security, full-stack systems, and multimodal machine learning.
          </p>
        </div>

        {/* Categories Matrix */}
        <div className="space-y-12">
          {CATEGORIES.map((cat) => {
            const skillsInCat = SEED_SKILLS.filter((s) => s.category === cat.id);

            return (
              <div key={cat.id} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {cat.icon}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {cat.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-mono text-muted-foreground">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skillsInCat.map((skill) => {
                    const levelBadge =
                      skill.level === "strong"
                        ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                        : skill.level === "working"
                        ? "bg-amber-500/15 text-amber-300 border-amber-500/30"
                        : "bg-blue-500/15 text-blue-300 border-blue-500/30";

                    const levelLabel =
                      skill.level === "strong"
                        ? "Strong Proficiency"
                        : skill.level === "working"
                        ? "Working Knowledge"
                        : "Actively Learning";

                    const relatedProjects = SEED_PROJECTS.filter((p) =>
                      skill.relatedProjectSlugs.includes(p.slug)
                    );

                    return (
                      <Card
                        key={skill._id}
                        className="p-6 rounded-3xl bg-[#1C1A1A] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                              {skill.name}
                            </span>
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${levelBadge}`}>
                              {levelLabel}
                            </span>
                          </div>

                          {/* Related projects */}
                          {relatedProjects.length > 0 && (
                            <div className="mt-4 pt-3 border-t border-white/5">
                              <span className="text-[11px] font-mono text-muted-foreground block mb-1.5">
                                Applied in:
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {relatedProjects.map((proj) => (
                                  <Link
                                    key={proj.slug}
                                    href={`/projects/${proj.slug}`}
                                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 hover:bg-white/15 text-white/90 border border-white/10 transition-colors inline-flex items-center gap-1"
                                  >
                                    <span>{proj.title}</span>
                                    <ArrowRight className="w-2.5 h-2.5 opacity-60" />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
