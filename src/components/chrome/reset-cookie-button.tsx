"use client";

import * as React from "react";

export function ResetCookieButton() {
  const handleReset = () => {
    try {
      localStorage.removeItem("portfolio_analytics_consent");
      window.location.reload();
    } catch {
      // Ignore
    }
  };

  return (
    <button
      onClick={handleReset}
      className="text-[#A39A92] hover:text-white underline font-mono cursor-pointer text-xs"
    >
      Reset cookie consent choice
    </button>
  );
}
