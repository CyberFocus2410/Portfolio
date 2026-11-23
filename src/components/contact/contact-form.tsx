"use client";

import * as React from "react";
import { Send, CheckCircle2, Copy, Check } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    domain: "cybersecurity",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [copiedEmail, setCopiedEmail] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("cyberfocus2410@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="w-full">
      {isSubmitted ? (
        <div className="p-8 sm:p-10 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">Message Received!</h3>
          <p className="text-sm text-[#D1C9BE] max-w-md mx-auto">
            Thank you for reaching out, {formData.name}. I have received your note and will review it and reply directly to <span className="text-white font-mono">{formData.email}</span>.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: "", email: "", domain: "cybersecurity", message: "" });
              }}
              className="px-6 py-2 rounded-full bg-white text-[#1A1818] font-bold text-xs font-mono hover:bg-neutral-100 transition-colors"
            >
              Send Another Note
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono font-bold text-white uppercase tracking-wider mb-2">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Alex Mercer"
                className="w-full px-4 py-3 rounded-2xl bg-[#141212] border border-white/15 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 font-mono transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-white uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@example.com"
                className="w-full px-4 py-3 rounded-2xl bg-[#141212] border border-white/15 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 font-mono transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-white uppercase tracking-wider mb-2">
              Inquiry Focus / Domain
            </label>
            <select
              value={formData.domain}
              onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl bg-[#141212] border border-white/15 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 font-mono transition-all"
            >
              <option value="cybersecurity">Cybersecurity & Blue Teaming</option>
              <option value="medical-ai">Medical AI & Clinical Systems</option>
              <option value="web-freelance">Freelance Web / Full-Stack Project</option>
              <option value="ai-ml">AI / ML Pipeline & Agents</option>
              <option value="other">General Opportunity / Chat</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-white uppercase tracking-wider mb-2">
              Message
            </label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about the role, project requirements, or ideas you'd like to collaborate on..."
              className="w-full px-4 py-3 rounded-2xl bg-[#141212] border border-white/15 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 font-mono transition-all"
            />
          </div>

          <div className="pt-2 border-t border-white/10 text-[11px] font-mono text-[#A39A92] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>
              DPDPA 2023 Notice: Contact details are processed solely to respond to your inquiry.
            </span>
            <a
              href="/privacy#grievance-officer"
              className="text-amber-300 hover:underline flex items-center gap-1"
            >
              Grievance Officer & Rights ↗
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#1A1818] font-bold text-xs font-mono hover:bg-neutral-100 transition-all shadow-lg active:scale-95 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "Transmitting..." : "Send Dispatch"}</span>
            </button>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="text-xs font-mono text-muted-foreground hover:text-white flex items-center gap-1.5 transition-colors"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy cyberfocus2410@gmail.com</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
