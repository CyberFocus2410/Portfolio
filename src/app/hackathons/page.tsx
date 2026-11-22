import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Trophy, Calendar, MapPin, ExternalLink, ArrowRight, FileText } from "lucide-react";

interface HackathonItem {
  name: string;
  organiser: string;
  date: string;
  result: string;
  bio: string;
  projectTitle: string;
  projectSlug?: string;
  certificatePath: string;
  badgeColor: string;
}

const HACKATHONS: HackathonItem[] = [
  {
    name: "Vihaan 9.0 Hackathon",
    organiser: "Delhi Technological University (DTU) • IEEE DTU",
    date: "February 2026",
    result: "Top 15 Finalist (Offline Round)",
    bio: "Selected among hundreds of pan-India engineering teams to pitch an AI-driven healthcare diagnostic framework (Cardiac Analyst) live before judges at DTU.",
    projectTitle: "Cardiac Analyst",
    projectSlug: "cardiac-analyst",
    certificatePath: "/certificates/Vihaa9.0_OfflineRound.pdf",
    badgeColor: "bg-amber-400/20 text-amber-300 border-amber-400/30",
  },
  {
    name: "FoodScope IIIT-Delhi Hackathon",
    organiser: "Indraprastha Institute of Information Technology Delhi (IIIT-D)",
    date: "February 2026",
    result: "Top 20 Finalist",
    bio: "Engineered an intelligent, real-time supply chain and security tracking platform under tight 36-hour sprint constraints at the IIIT-D campus.",
    projectTitle: "SecureScan AI",
    projectSlug: "securescan-ai",
    certificatePath: "/certificates/FOODSCOPE_IIIT-D_HACKATHON.pdf",
    badgeColor: "bg-emerald-400/20 text-emerald-300 border-emerald-400/30",
  },
  {
    name: "HackHazards '26",
    organiser: "HackHazards Tech Community",
    date: "January 2026",
    result: "Security Track Participant",
    bio: "Engineered zero-knowledge cryptographic cipher and client encryption modules (Krypta) demonstrating resistance against automated dictionary exploits.",
    projectTitle: "Krypta",
    projectSlug: "krypta",
    certificatePath: "/certificates/HACKHAZARDS 26 Participation Certificate.pdf",
    badgeColor: "bg-blue-400/20 text-blue-300 border-blue-400/30",
  },
  {
    name: "Smart India Hackathon (SIH 2025)",
    organiser: "Ministry of Education & AICTE",
    date: "October 2025",
    result: "Collegiate Institute Nominee",
    bio: "Selected by Delhi Technical Campus to represent the institution in national public threat intelligence monitoring pipelines.",
    projectTitle: "SecureScan AI",
    projectSlug: "securescan-ai",
    certificatePath: "/certificates/SIH2025.pdf",
    badgeColor: "bg-purple-400/20 text-purple-300 border-purple-400/30",
  },
  {
    name: "Thoughtworks HackFest Tech",
    organiser: "Thoughtworks Technologies",
    date: "September 2025",
    result: "Regional Finalist",
    bio: "Collaborated on rapid prototype delivery and clean microservices architecture evaluated by senior Thoughtworks engineering consultants.",
    projectTitle: "LaunchLens",
    projectSlug: "launchlens",
    certificatePath: "/certificates/HackFest_ThoughtworksTech.pdf",
    badgeColor: "bg-cyan-400/20 text-cyan-300 border-cyan-400/30",
  },
];

export const metadata = {
  title: "Hackathons & Competitive Honors | Vivan Mittal",
  description:
    "Competitive hackathon distinctions including Vihaan 9.0 (DTU) Top 15, FoodScope (IIIT-Delhi) Top 20, and Smart India Hackathon nominee.",
};

export default function HackathonsPage() {
  return (
    <Section className="py-12 sm:py-20 min-h-screen">
      <Container size="wide">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <Label dotColor="bg-amber-400">COMPETITIVE SPRINT HONORS</Label>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mt-3">
            Hackathons & Awards
          </h1>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Fast-paced collaborative engineering sprints, offline finals, and national competition milestones with verified credential records.
          </p>
        </div>

        {/* Hackathons Grid */}
        <div className="space-y-8">
          {HACKATHONS.map((hack, index) => (
            <Card
              key={index}
              className="p-6 sm:p-10 rounded-3xl bg-[#1C1A1A] border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Distinction Badge & Info */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`px-3.5 py-1 rounded-full text-xs font-mono font-bold border ${hack.badgeColor}`}>
                      {hack.result}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{hack.date}</span>
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {hack.name}
                    </h2>
                    <p className="mt-1 text-xs sm:text-sm font-mono text-amber-300 font-semibold flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{hack.organiser}</span>
                    </p>
                  </div>

                  <p className="text-sm text-[#D1C9BE] leading-relaxed">
                    {hack.bio}
                  </p>

                  {/* Project Tag */}
                  <div className="pt-2 flex items-center gap-2">
                    <span className="text-xs font-mono text-muted-foreground">Project Built:</span>
                    {hack.projectSlug ? (
                      <Link
                        href={`/projects/${hack.projectSlug}`}
                        className="text-xs font-mono font-bold text-white hover:text-amber-300 underline underline-offset-4 flex items-center gap-1"
                      >
                        <span>{hack.projectTitle}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    ) : (
                      <span className="text-xs font-mono text-white font-bold">{hack.projectTitle}</span>
                    )}
                  </div>
                </div>

                {/* Right: Certificate Verification Action */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full pt-4 lg:pt-0 lg:border-l lg:border-white/10 lg:pl-8">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <Trophy className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                    <div className="text-xs font-mono text-white/90 font-bold">Verified Achievement</div>
                    <div className="text-[11px] font-mono text-muted-foreground mt-1">Official certificate on record</div>
                  </div>

                  <div className="mt-6 flex flex-col gap-2">
                    <a
                      href={hack.certificatePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-[#1A1818] font-bold text-xs font-mono hover:bg-neutral-100 transition-colors shadow-md"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>View Official Certificate</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
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
