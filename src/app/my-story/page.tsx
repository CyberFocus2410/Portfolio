import * as React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Trophy, Shield, Sparkles, Calendar, Terminal } from "lucide-react";

interface StoryMilestone {
  year: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
}

const MILESTONES: StoryMilestone[] = [
  {
    year: "2025 – 2029",
    badge: "EDUCATION",
    title: "B.Tech in Computer Science & Engineering",
    subtitle: "Delhi Technical Campus (GGSIPU) • Greater Noida",
    description:
      "Admitted to the 4-year undergraduate program in Computer Science & Engineering. Immersed in core systems engineering: algorithms, discrete mathematics, object-oriented paradigms, and operating system POSIX architectures.",
    highlights: [
      "Rigorous foundations in C, Python, and computer networking",
      "Elected to college technical and coding society chapters",
      "Focus on offensive-defensive cybersecurity paradigms and AI",
    ],
    icon: <GraduationCap className="w-5 h-5 text-amber-300" />,
  },
  {
    year: "2025",
    badge: "SECURITY FOUNDATIONS",
    title: "Blue Team Mastery & Cryptographic Labs",
    subtitle: "Independent Research & Tooling",
    description:
      "Deep-dived into blue team defensive operations, packet capture inspection via Wireshark, and cryptographic implementations. Designed and built Krypta to deconstruct modern symmetric and asymmetric cipher suites.",
    highlights: [
      "Built Krypta cryptographic laboratory (AES-GCM, RSA, classical ciphers)",
      "Mastered Kali Linux distributions, bash scripting, and OWASP Top 10 auditing",
      "Earned HackerRank Python Certification and collegiate coding distinctions",
    ],
    icon: <Shield className="w-5 h-5 text-blue-300" />,
  },
  {
    year: "Late 2025",
    badge: "RESEARCH",
    title: "Student Researcher at Indus Rise Foundation",
    subtitle: "Data Analytics & Predictive Workflows",
    description:
      "Joined Indus Rise Research Foundation as a student researcher, exploring advanced data science pipelines, automated data transformations, and high-dimensional analytics tooling.",
    highlights: [
      "Completed Dataverse Indus Rise analytics milestones",
      "Explored predictive modeling with Scikit-Learn and numerical pipelines",
      "Honored with official researcher offer letter and recognition",
    ],
    icon: <Terminal className="w-5 h-5 text-purple-300" />,
  },
  {
    year: "Early 2026",
    badge: "INDUSTRY EXPERIENCE",
    title: "Engineering Intern at Decode Labs",
    subtitle: "Software Engineering & Security Utilities",
    description:
      "Secured an engineering internship offer with Decode Labs. Tasked with developing robust password strength utilities, mathematical Shannon entropy calculations, and real-time credential pattern inspection.",
    highlights: [
      "Architected Password Strength Analyser using NIST SP 800-63B standards",
      "Implemented zero-knowledge SHA-1 k-anonymity breach checking with HIBP API",
      "Delivered production-ready client utility components with Next.js & TypeScript",
    ],
    icon: <Briefcase className="w-5 h-5 text-emerald-300" />,
  },
  {
    year: "Feb 2026",
    badge: "COMPETITIVE HONORS",
    title: "Double Hackathon Finalist: DTU & IIIT Delhi",
    subtitle: "Vihaan 9.0 (Top 15) & FoodScope (Top 20)",
    description:
      "Delivered consecutive high-pressure offline hackathon victories in pan-India university tournaments: Top 15 Finalist at Delhi Technological University (Vihaan 9.0) with Cardiac Analyst, followed by Top 20 Finalist at IIIT Delhi with FoodScope.",
    highlights: [
      "Pitched live clinical AI prototype before IEEE DTU evaluating faculty",
      "Engineered supply chain anomaly detection system in 36-hour sprint at IIIT-D",
      "Demonstrated real-time computer vision and multimodal intelligence under tight deadlines",
    ],
    icon: <Trophy className="w-5 h-5 text-amber-300" />,
  },
  {
    year: "Present & Future",
    badge: "CAREER VISION",
    title: "Cybersecurity Analyst & Full-Stack Systems Engineer",
    subtitle: "Aiming for Enterprise Blue Team Roles",
    description:
      "Actively pursuing summer and off-cycle cybersecurity analyst / blue-teaming internships. Blending deep defensive security instincts with modern Next.js/React full-stack engineering and responsible generative AI architectures.",
    highlights: [
      "Certified Red Team Operations Management (CRTOM) credential holder",
      "Active public open-source portfolio with 12+ verified repositories",
      "Available for high-impact internship roles, red/blue team challenges, and contracts",
    ],
    icon: <Sparkles className="w-5 h-5 text-amber-300" />,
  },
];

export const metadata = {
  title: "My Story & Journey | Vivan Mittal",
  description:
    "The journey of Vivan Mittal from B.Tech CSE at Delhi Technical Campus to cybersecurity research, hackathon finals, and software engineering internships.",
};

export default function MyStoryPage() {
  return (
    <Section className="py-12 sm:py-20 min-h-screen">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Sticky Summary & Milestone Indicator */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <Label dotColor="bg-amber-400">CHRONICLES & MILESTONES</Label>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mt-3">
              The Journey So Far
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              From competitive coding and deep cryptographic research at Delhi Technical Campus to collegiate hackathon finals and industry software engineering internships.
            </p>

            {/* Glowing Year Indicator Card */}
            <Card className="p-6 rounded-3xl bg-gradient-to-br from-[#211E1E] to-[#141212] border border-amber-400/20 shadow-xl">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
                Active Chapter
              </span>
              <div className="text-3xl font-extrabold text-white mt-1">2025 — 2029</div>
              <p className="text-xs font-mono text-[#D1C9BE] mt-2">
                B.Tech Computer Science & Engineering • Delhi Technical Campus (GGSIPU)
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  Open for Internship Opportunities
                </span>
              </div>
            </Card>
          </div>

          {/* Right Column: Synced Vertical Timeline */}
          <div className="lg:col-span-8 relative border-l border-white/15 pl-6 sm:pl-10 space-y-12">
            {MILESTONES.map((item, index) => (
              <div key={index} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#1A1818] border-2 border-amber-400 flex items-center justify-center group-hover:scale-125 transition-transform">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                </div>

                {/* Milestone Card */}
                <Card className="p-6 sm:p-8 rounded-3xl bg-[#1C1A1A] border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/10 text-white border border-white/15">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-amber-300 font-bold flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.year}</span>
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-xs font-mono text-muted-foreground font-semibold">
                    {item.subtitle}
                  </p>

                  <p className="mt-4 text-sm text-[#D1C9BE] leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="mt-5 space-y-2 pt-4 border-t border-white/5">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="text-xs font-mono text-white/90 flex items-start gap-2">
                        <span className="text-amber-400 mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
