import * as React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact/contact-form";
import { Mail, Github, Linkedin, MapPin, Clock, ShieldCheck, Sparkles } from "lucide-react";

export const metadata = {
  title: "Contact & Collaboration | Vivan Mittal",
  description:
    "Get in touch with Vivan Mittal for cybersecurity internships, freelance engineering projects, or AI research inquiries.",
};

export default function ContactPage() {
  return (
    <Section className="py-12 sm:py-20 min-h-screen">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <Label dotColor="bg-emerald-400">AVAILABLE FOR ROLES</Label>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mt-3">
                Let&apos;s Build Together
              </h1>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Whether you have an internship opening in cybersecurity/blue-teaming, a high-performance web project, or an AI research collaboration, I&apos;d love to connect.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              <Card className="p-6 rounded-3xl bg-[#1C1A1A] border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-300" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-muted-foreground font-semibold">Direct Email</span>
                    <a
                      href="mailto:cyberfocus2410@gmail.com"
                      className="block text-sm sm:text-base font-bold text-white hover:text-amber-300 transition-colors font-mono mt-0.5"
                    >
                      cyberfocus2410@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 rounded-3xl bg-[#1C1A1A] border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-muted-foreground font-semibold">GitHub Organization</span>
                    <a
                      href="https://github.com/CyberFocus2410"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm sm:text-base font-bold text-white hover:text-amber-300 transition-colors font-mono mt-0.5"
                    >
                      github.com/CyberFocus2410
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 rounded-3xl bg-[#1C1A1A] border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A66C2]/10 border border-[#0A66C2]/20 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-[#70B5F9]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-muted-foreground font-semibold">LinkedIn Profile</span>
                    <a
                      href="https://www.linkedin.com/in/cyberfocus2410/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm sm:text-base font-bold text-white hover:text-[#70B5F9] transition-colors font-mono mt-0.5"
                    >
                      linkedin.com/in/cyberfocus2410
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 rounded-3xl bg-[#1C1A1A] border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-muted-foreground font-semibold">Base Location</span>
                    <div className="text-sm sm:text-base font-bold text-white font-mono mt-0.5">
                      Delhi, India (IST / UTC+5:30)
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 sm:p-10 rounded-3xl bg-[#1C1A1A] border border-white/10 shadow-2xl">
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-300 font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Send a Message</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">Direct Transmission</h3>
              </div>

              <ContactForm />
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}
