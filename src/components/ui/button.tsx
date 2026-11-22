import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  hasArrow?: boolean;
  arrowType?: "up-right" | "right";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      hasArrow = false,
      arrowType = "right",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variants = {
      primary:
        "bg-white text-[#1A1818] hover:bg-neutral-100 shadow-sm hover:shadow font-semibold",
      secondary:
        "bg-[#211E1E] text-white hover:bg-[#292525] border border-white/15",
      outline:
        "bg-transparent text-white border border-white/30 hover:border-white/60 hover:bg-white/10",
      ghost:
        "bg-transparent text-white hover:text-white hover:bg-white/10",
    };

    const sizes = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <span>{children}</span>
        {hasArrow && (
          <span className="flex items-center justify-center rounded-full bg-current/10 w-5 h-5 -mr-1">
            {arrowType === "up-right" ? (
              <ArrowUpRight className="w-3.5 h-3.5" />
            ) : (
              <ArrowRight className="w-3.5 h-3.5" />
            )}
          </span>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
