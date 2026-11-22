import * as React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Label } from "@/components/ui/label";
import { CertificatesDirectory } from "@/components/certificates/certificates-directory";

export const metadata = {
  title: "Certificates & Verified Credentials | Vivan Mittal",
  description:
    "Explore 22 authentic certificates, certifications, and honors earned by Vivan Mittal with dynamic validity computation.",
};

export default function CertificatesPage() {
  return (
    <Section className="py-12 sm:py-20 min-h-screen">
      <Container size="wide">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <Label dotColor="bg-amber-400">CREDENTIAL REGISTRY</Label>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mt-3">
            Certificates & Honors
          </h1>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            All 22 verified certifications, technical workshops, competition finals, and internship credentials with dynamic validity status.
          </p>
        </div>

        {/* Directory */}
        <CertificatesDirectory />
      </Container>
    </Section>
  );
}
