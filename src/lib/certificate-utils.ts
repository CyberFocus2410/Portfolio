export type CertificateStatus = "Valid" | "Expiring soon" | "Expired" | "No expiry";

export interface CertificateValidity {
  status: CertificateStatus;
  daysRemaining: number | null;
  badgeClass: string;
  badgeColor: string;
}

/**
 * Dynamically computes certificate validity:
 * - No expiryDate -> "No expiry" (Slate/Neutral badge)
 * - expiryDate < now -> "Expired" (Red badge)
 * - expiryDate within 90 days of now -> "Expiring soon" (Amber badge)
 * - expiryDate > 90 days from now -> "Valid" (Emerald badge)
 */
export function getCertificateValidity(
  expiryDateStr?: string | null,
  referenceDate: Date = new Date()
): CertificateValidity {
  if (!expiryDateStr) {
    return {
      status: "No expiry",
      daysRemaining: null,
      badgeClass: "bg-surface-elevated/80 text-muted-foreground border-border/40",
      badgeColor: "#8E8882",
    };
  }

  const expiry = new Date(expiryDateStr);
  if (isNaN(expiry.getTime())) {
    return {
      status: "No expiry",
      daysRemaining: null,
      badgeClass: "bg-surface-elevated/80 text-muted-foreground border-border/40",
      badgeColor: "#8E8882",
    };
  }

  const msPerDay = 1000 * 60 * 60 * 24;
  const diffMs = expiry.getTime() - referenceDate.getTime();
  const daysRemaining = Math.ceil(diffMs / msPerDay);

  if (daysRemaining < 0) {
    return {
      status: "Expired",
      daysRemaining,
      badgeClass: "bg-red-500/10 text-red-400 border-red-500/20",
      badgeColor: "#EF4444",
    };
  }

  if (daysRemaining <= 90) {
    return {
      status: "Expiring soon",
      daysRemaining,
      badgeClass: "bg-amber-500/10 text-amber-300 border-amber-500/20",
      badgeColor: "#F59E0B",
    };
  }

  return {
    status: "Valid",
    daysRemaining,
    badgeClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    badgeColor: "#10B981",
  };
}

export function formatCertificateDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}
