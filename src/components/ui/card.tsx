import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, elevated = false, interactive = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-card bg-[#211E1E] border border-white/[0.08] p-6 text-[#EDE9E3] transition-all duration-300",
          elevated && "bg-[#292525] shadow-xl",
          interactive &&
            "hover:border-white/20 hover:translate-y-[-2px] hover:shadow-2xl cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";
