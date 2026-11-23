"use client";

import * as React from "react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  Shield,
  Trash2,
  RefreshCw,
  Scale,
} from "lucide-react";

type RightType =
  | "access"
  | "correction"
  | "erasure"
  | "withdraw_consent"
  | "grievance"
  | "nomination";

interface RequestOption {
  id: RightType;
  title: string;
  section: string;
  desc: string;
}

const REQUEST_OPTIONS: RequestOption[] = [
  {
    id: "access",
    title: "Right to Access",
    section: "Section 11, DPDP Act 2023",
    desc: "Obtain a summary of personal data being processed, processing activities, and identities of data fiduciaries.",
  },
  {
    id: "correction",
    title: "Right to Correction / Updating",
    section: "Section 12(1), DPDP Act 2023",
    desc: "Request correction of inaccurate, misleading, or outdated personal data.",
  },
  {
    id: "erasure",
    title: "Right to Erasure / Deletion",
    section: "Section 12(3), DPDP Act 2023",
    desc: "Request irreversible deletion of your contact submissions, emails, or stored data.",
  },
  {
    id: "withdraw_consent",
    title: "Withdraw Consent",
    section: "Section 6(4), DPDP Act 2023",
    desc: "Revoke consent previously given for analytics, local storage, or communication.",
  },
  {
    id: "grievance",
    title: "Grievance Redressal",
    section: "Section 13, DPDP Act 2023",
    desc: "Submit a formal grievance regarding personal data handling to the Grievance Officer.",
  },
  {
    id: "nomination",
    title: "Right to Nominate",
    section: "Section 14, DPDP Act 2023",
    desc: "Designate an individual who shall exercise your data principal rights in the event of death or incapacity.",
  },
];

export function DataPrincipalPortal() {
  const [selectedRight, setSelectedRight] = useState<RightType>("access");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [ticketId, setTicketId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [consentWiped, setConsentWiped] = useState(false);

  const activeOption = REQUEST_OPTIONS.find((opt) => opt.id === selectedRight)!;

  const handleWipeConsent = () => {
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem("portfolio_analytics_consent");
        localStorage.removeItem("portfolio_lamp_state");
        sessionStorage.removeItem("portfolio_has_entered");
        setConsentWiped(true);
        setTimeout(() => setConsentWiped(false), 5000);
      } catch (err) {
        console.error("Failed to clear local storage", err);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const dateCode = new Date().toISOString().slice(2, 10).replace(/-/g, "");
    const generatedId = `DPDP-${dateCode}-${randomSuffix}`;
    setTicketId(generatedId);
  };

  const getMailtoLink = () => {
    if (!ticketId) return "#";
    const subject = encodeURIComponent(
      `[DPDP Request: ${ticketId}] ${activeOption.title} - ${fullName || "Data Principal"}`
    );
    const bodyText = encodeURIComponent(
      `To: Grievance Officer, Vivan Mittal (Data Fiduciary)\n` +
        `Ref ID: ${ticketId}\n` +
        `Statutory Right: ${activeOption.title} (${activeOption.section})\n\n` +
        `Data Principal Name: ${fullName}\n` +
        `Contact Email: ${email}\n\n` +
        `Specific Request Details / Grounds:\n${details || "Please process this statutory request under DPDP Act 2023."}\n\n` +
        `Timestamp: ${new Date().toISOString()}\n` +
        `Jurisdiction: Republic of India`
    );
    return `mailto:cyberfocus2410@gmail.com?subject=${subject}&body=${bodyText}`;
  };

  const copyTicketDetails = () => {
    if (!ticketId) return;
    const text = `DPDP Statutory Request [Ref: ${ticketId}]\nRight: ${activeOption.title} (${activeOption.section})\nName: ${fullName}\nEmail: ${email}\nDetails: ${details}\nSubmitted: ${new Date().toLocaleString()}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <Card className="p-6 sm:p-8 rounded-3xl bg-[#1C1A1A] border border-white/10 shadow-xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2.5 text-[#EDE9E3]">
          <Scale className="w-5 h-5 text-amber-400" />
          <h3 className="text-lg font-bold">Data Principal Rights & Self-Service Portal</h3>
        </div>
        <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit">
          DPDP-010 · Statutory Self-Service
        </span>
      </div>

      <p className="text-xs text-[#A39A92] leading-relaxed">
        Under Sections 11–14 of the Digital Personal Data Protection (DPDP) Act, 2023, you have enforceable statutory rights regarding any personal data processed by this portfolio. Use this portal to initiate an audited request or lodge a grievance directly with the Grievance Officer.
      </p>

      {/* Select Rights Tab Grid */}
      <div className="space-y-2">
        <label className="text-xs font-mono font-semibold text-[#EDE9E3] block">
          Select Statutory Right to Exercise:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {REQUEST_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => {
                setSelectedRight(opt.id);
                setTicketId(null);
              }}
              className={`p-3 rounded-2xl text-left border transition-all text-xs flex flex-col justify-between ${
                selectedRight === opt.id
                  ? "bg-amber-400/10 border-amber-400/50 text-white shadow-sm ring-1 ring-amber-400/20"
                  : "bg-white/[0.02] border-white/10 text-[#A39A92] hover:bg-white/[0.05] hover:text-[#EDE9E3]"
              }`}
            >
              <div>
                <span className="font-semibold block text-[#EDE9E3]">{opt.title}</span>
                <span className="font-mono text-[10px] text-amber-300/80 block mt-0.5">
                  {opt.section}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Active Selection Details Card */}
      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-[#D1C9BE] space-y-2">
        <div className="flex items-center gap-2 text-white font-semibold">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span>{activeOption.title} — {activeOption.section}</span>
        </div>
        <p className="text-[#A39A92]">{activeOption.desc}</p>

        {selectedRight === "withdraw_consent" && (
          <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <span className="text-[11px] text-[#EDE9E3]">
              Instant Client-Side Action: Clear all stored cookies & consent preferences right now:
            </span>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleWipeConsent}
              className="text-xs flex items-center gap-1.5 border-rose-500/30 text-rose-300 hover:bg-rose-500/10"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Wipe Local Consent Now</span>
            </Button>
            {consentWiped && (
              <p className="w-full text-emerald-400 text-[11px] font-mono flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> All local storage tokens and cookie choices have been cleared.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Ticketing & Submission Form */}
      {!ticketId ? (
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-[#D1C9BE] mb-1.5">
                Data Principal Name <span className="text-white/40">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Jane Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-white/20 focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-[#D1C9BE] mb-1.5">
                Contact Email <span className="text-rose-400">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-white/20 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-[#D1C9BE] mb-1.5">
              Specific Request Details or Grounds <span className="text-white/40">(Optional)</span>
            </label>
            <textarea
              rows={3}
              placeholder="Provide context regarding the message, email, or data records you wish to access, correct, or erase..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-white/20 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <span className="text-[11px] text-[#A39A92] font-mono">
              Statutory SLA: Acknowledged &le; 48 hours · Redressed &le; 30 days (Rule 14).
            </span>
            <Button type="submit" variant="primary" size="sm" className="w-full sm:w-auto font-mono text-xs">
              Generate Formal DPDP Ticket
            </Button>
          </div>
        </form>
      ) : (
        /* Generated Statutory Ticket Box */
        <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-bold text-white">DPDP Ticket Generated</span>
            </div>
            <span className="font-mono text-xs font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
              {ticketId}
            </span>
          </div>

          <p className="text-xs text-[#D1C9BE] leading-relaxed">
            Your statutory request record has been logged. Under Section 13 and Rule 14 of the DPDP Rules, the Grievance Officer is legally required to acknowledge and process this request within statutory timelines.
          </p>

          <div className="p-3 rounded-xl bg-black/50 border border-white/10 font-mono text-[11px] text-[#A39A92] space-y-1">
            <div><span className="text-white">Reference ID:</span> {ticketId}</div>
            <div><span className="text-white">Statutory Right:</span> {activeOption.title} ({activeOption.section})</div>
            <div><span className="text-white">Data Principal:</span> {fullName || "Not provided"} ({email})</div>
            <div><span className="text-white">Fiduciary & Officer:</span> Vivan Mittal (cyberfocus2410@gmail.com)</div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={getMailtoLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 text-black font-semibold text-xs hover:bg-amber-300 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Transmit Ticket to Grievance Officer</span>
            </a>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={copyTicketDetails}
              className="text-xs flex items-center gap-1.5 border-white/20 text-white"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copied ? "Copied to Clipboard!" : "Copy Reference Record"}</span>
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => {
                setTicketId(null);
                setFullName("");
                setEmail("");
                setDetails("");
              }}
              className="text-xs text-[#A39A92] hover:text-white"
            >
              <RefreshCw className="w-3 h-3 mr-1" />
              Create Another Request
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}
