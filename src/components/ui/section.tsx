import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  glow?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, glow = false, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative py-16 sm:py-24 md:py-28 overflow-hidden",
          glow && "bg-warm-radial",
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = "Section";
