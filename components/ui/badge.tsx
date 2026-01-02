import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "focus:ring-ring inline-flex items-center border font-bold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80 border-transparent",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent",
        brand:
          "border-blue-600/20 bg-blue-600/10 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400",
        success:
          "border-green-600/20 bg-green-600/10 text-green-600 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-400",
        warning:
          "border-orange-500/20 bg-orange-500/10 text-orange-600 dark:border-orange-500/20 dark:bg-orange-500/10 dark:text-orange-400",
        error:
          "border-red-600/20 bg-red-600/10 text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400",
        info: "border-blue-500/20 bg-blue-500/10 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400",
        neutral:
          "border-slate-500/20 bg-slate-500/10 text-slate-600 dark:border-slate-500/20 dark:bg-slate-400/10 dark:text-slate-300",
        outline: "text-foreground",
      },
      size: {
        sm: "px-1.5 py-0.5 text-[10px]",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
      shape: {
        soft: "rounded-lg",
        square: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      shape: "soft",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, shape, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, size, shape }), className)} {...props} />;
}

export { Badge, badgeVariants };
