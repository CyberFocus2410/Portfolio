import * as React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
  dot?: boolean;
  dotColor?: string;
}

export const Label = React.forwardRef<HTMLDivElement, LabelProps>(
  ({ className, dot = true, dotColor = "bg-[#85E3B3]", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#D1C9BE] font-semibold",
          className
        )}
        {...props}
      >
        {dot && (
          <span
            className={cn("w-1.5 h-1.5 rounded-full inline-block animate-pulse", dotColor)}
          />
        )}
        <span>{children}</span>
      </div>
    );
  }
);
Label.displayName = "Label";
