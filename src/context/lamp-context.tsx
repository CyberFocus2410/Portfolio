"use client";

import * as React from "react";

interface LampContextType {
  lampOn: boolean;
  toggleLamp: () => void;
  setLampOn: (state: boolean) => void;
}

const LampContext = React.createContext<LampContextType>({
  lampOn: false,
  toggleLamp: () => {},
  setLampOn: () => {},
});

export function LampProvider({ children }: { children: React.ReactNode }) {
  const [lampOn, setLampOn] = React.useState<boolean>(false);

  // Initialize from localStorage if present
  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("portfolio_lamp_state");
      if (stored !== null) {
        setLampOn(stored === "true");
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const toggleLamp = React.useCallback(() => {
    setLampOn((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("portfolio_lamp_state", String(next));
      } catch {
        // Ignore storage errors
      }
      return next;
    });
  }, []);

  return (
    <LampContext.Provider value={{ lampOn, toggleLamp, setLampOn }}>
      {children}
      {/* Ambient warm desk lamp overlay */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-0 z-30 transition-opacity duration-700 ease-out ${
          lampOn ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(circle at 88% 0%, rgba(255, 175, 80, 0.22) 0%, rgba(255, 140, 50, 0.10) 35%, rgba(26, 24, 24, 0) 75%)",
          mixBlendMode: "screen",
        }}
      />
    </LampContext.Provider>
  );
}

export function useLamp() {
  return React.useContext(LampContext);
}
