import * as React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  Shield,
  Terminal,
  Activity,
  Code,
  Layers,
  Database,
  Flame,
  GitBranch,
  Bot,
  Sparkles,
  Cpu,
  Boxes,
} from "lucide-react";

interface SkillBadge {
  name: string;
  icon?: React.ReactNode;
  bg: string;
  border: string;
  text: string;
}

export function TechArsenal() {
  const categories: { title: string; skills: SkillBadge[] }[] = [
    {
      title: "Security & Blue Team Tooling",
      skills: [
        {
          name: "KALI LINUX",
          icon: <Terminal className="w-4 h-4 text-cyan-300" />,
          bg: "bg-[#253946]",
          border: "border-[#3A566B]",
          text: "text-white",
        },
        {
          name: "LINUX",
          icon: <span className="text-sm">🐧</span>,
          bg: "bg-[#F5B025]",
          border: "border-[#F7C04D]",
          text: "text-black font-black",
        },
        {
          name: "WIRESHARK",
          icon: <Activity className="w-4 h-4 text-cyan-200" />,
          bg: "bg-[#165B96]",
          border: "border-[#2177C2]",
          text: "text-white",
        },
        {
          name: "OWASP",
          icon: <Shield className="w-4 h-4 text-emerald-300" />,
          bg: "bg-[#111111]",
          border: "border-[#333333]",
          text: "text-white",
        },
      ],
    },
    {
      title: "Languages",
      skills: [
        {
          name: "PYTHON",
          icon: <span className="font-bold text-xs text-yellow-300">Py</span>,
          bg: "bg-[#244C6E]",
          border: "border-[#346691]",
          text: "text-white",
        },
        {
          name: "C",
          icon: <span className="font-bold text-xs text-cyan-200">C</span>,
          bg: "bg-[#0B4B7F]",
          border: "border-[#1569AB]",
          text: "text-white font-black",
        },
        {
          name: "TYPESCRIPT",
          icon: <span className="font-bold text-xs text-white bg-blue-600 px-1 rounded">TS</span>,
          bg: "bg-[#1E5F9E]",
          border: "border-[#2D78C2]",
          text: "text-white",
        },
        {
          name: "DART",
          icon: <Code className="w-4 h-4 text-cyan-300" />,
          bg: "bg-[#0360A0]",
          border: "border-[#0C78C4]",
          text: "text-white",
        },
        {
          name: "HTML5",
          icon: <span className="font-black text-xs text-white">5</span>,
          bg: "bg-[#D9381E]",
          border: "border-[#E84E33]",
          text: "text-white",
        },
        {
          name: "CSS3",
          icon: <span className="font-black text-xs text-white">3</span>,
          bg: "bg-[#125D94]",
          border: "border-[#1C7ABF]",
          text: "text-white",
        },
      ],
    },
    {
      title: "Frameworks, Data & Cloud",
      skills: [
        {
          name: "FLUTTER",
          icon: <Layers className="w-4 h-4 text-cyan-300" />,
          bg: "bg-[#03518C]",
          border: "border-[#0A6DB8]",
          text: "text-white",
        },
        {
          name: "REACT",
          icon: <Boxes className="w-4 h-4 text-[#61DAFB] animate-spin-slow" />,
          bg: "bg-[#1C2026]",
          border: "border-[#61DAFB]/40",
          text: "text-[#61DAFB]",
        },
        {
          name: "MYSQL",
          icon: <Database className="w-4 h-4 text-blue-300" />,
          bg: "bg-[#005E73]",
          border: "border-[#007C99]",
          text: "text-white",
        },
        {
          name: "FIREBASE",
          icon: <Flame className="w-4 h-4 text-amber-950 fill-amber-950" />,
          bg: "bg-[#FFA000]",
          border: "border-[#FFB333]",
          text: "text-black font-black",
        },
        {
          name: "GIT",
          icon: <GitBranch className="w-4 h-4 text-white" />,
          bg: "bg-[#DE3C23]",
          border: "border-[#EB5036]",
          text: "text-white",
        },
      ],
    },
    {
      title: "AI / ML",
      skills: [
        {
          name: "OPENAI GPT-4O",
          icon: <Bot className="w-4 h-4 text-emerald-300" />,
          bg: "bg-[#4B1E87]",
          border: "border-[#6B2BBF]",
          text: "text-white",
        },
        {
          name: "GOOGLE GEMINI",
          icon: <Sparkles className="w-4 h-4 text-cyan-300" />,
          bg: "bg-[#1557BF]",
          border: "border-[#206FE8]",
          text: "text-white",
        },
        {
          name: "SCIKIT-LEARN",
          icon: <Cpu className="w-4 h-4 text-amber-950" />,
          bg: "bg-[#F28418]",
          border: "border-[#F79E45]",
          text: "text-black font-black",
        },
      ],
    },
  ];

  return (
    <Section id="skills" className="py-16 sm:py-24 bg-[#141212]/90 border-t border-white/10 relative overflow-hidden">
      <Container size="wide">
        {/* Section Header matching screenshot 2 */}
        <div className="border-b border-white/10 pb-6 mb-12 flex items-center gap-3">
          <span className="text-2xl sm:text-3xl">⚔️</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tech Arsenal
          </h2>
        </div>

        {/* Skill Category Blocks */}
        <div className="space-y-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* Category Subtitle */}
              <h3 className="text-sm sm:text-base font-semibold text-white tracking-wide mb-5">
                {cat.title}
              </h3>

              {/* Badges Flow */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-sm border shadow-lg transition-transform duration-200 hover:scale-105 select-none ${skill.bg} ${skill.border}`}
                  >
                    {skill.icon}
                    <span className={`font-mono text-xs sm:text-sm tracking-wider uppercase font-extrabold ${skill.text}`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
