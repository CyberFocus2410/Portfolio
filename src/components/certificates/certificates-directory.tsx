"use client";

import * as React from "react";
import { SEED_CERTIFICATES, SeedCertificate } from "@/sanity/seed-data";
import { getCertificateValidity, formatCertificateDate } from "@/lib/certificate-utils";
import { Card } from "@/components/ui/card";
import { Search, ExternalLink, FileText, CheckCircle2, Shield, Award, Sparkles } from "lucide-react";

const CATEGORY_TABS = [
  { id: "all", label: "All Credentials (22)" },
  { id: "certification", label: "Certifications" },
  { id: "workshop", label: "Hackathons & Workshops" },
  { id: "exam", label: "Exams & Contests" },
  { id: "course", label: "Offers & Letters" },
];

export function CertificatesDirectory() {
  const [activeTab, setActiveTab] = React.useState("all");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredCerts = React.useMemo(() => {
    return SEED_CERTIFICATES.filter((cert) => {
      const matchesTab = activeTab === "all" || cert.type === activeTab;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        cert.title.toLowerCase().includes(q) ||
        cert.issuer.toLowerCase().includes(q);
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="w-full">
      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {CATEGORY_TABS.map((tab) => {
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
            placeholder="Search credential or issuer..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-[#1A1818] border border-white/15 text-xs text-white placeholder:text-muted-foreground focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 font-mono"
          />
        </div>
      </div>

      {/* Certificates Grid */}
      {filteredCerts.length === 0 ? (
        <div className="py-20 text-center text-muted-foreground font-mono text-sm">
          No certificates found matching your criteria.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {filteredCerts.map((cert) => {
            const validity = getCertificateValidity(cert.expiryDate);

            return (
              <Card
                key={cert._id}
                className="p-6 sm:p-7 rounded-3xl bg-[#1C1A1A] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Validity Badge & Type */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`px-3 py-0.5 rounded-full text-[10px] font-mono font-bold border ${validity.badgeClass}`}
                    >
                      {validity.status}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-muted-foreground font-semibold">
                      {cert.type}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                      <Award className="w-5 h-5 text-amber-300" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                        {cert.title}
                      </h3>
                      <p className="mt-1 text-xs font-mono text-amber-300/90 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Date & Meta */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-muted-foreground">
                    <span>Issued</span>
                    <span className="text-white font-medium">{formatCertificateDate(cert.issueDate)}</span>
                  </div>
                </div>

                {/* View Document Button */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href={cert.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white hover:text-[#1A1818] text-white text-xs font-mono font-bold transition-all duration-200"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Official Document</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
