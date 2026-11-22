import * as React from "react";
import { cn } from "@/lib/utils";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "active" | "accent" | "status";
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "bg-white/[0.05] text-[#A39A92] border-white/[0.08]",
      active: "bg-white/10 text-[#EDE9E3] border-white/20",
      accent: "bg-[#4A2E22]/40 text-[#EDE9E3] border-[#4A2E22]",
      status: "bg-[#2E3D34]/50 text-[#85E3B3] border-[#2E3D34]",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border backdrop-blur-sm transition-colors",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Tag.displayName = "Tag";
