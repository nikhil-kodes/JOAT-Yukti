import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm font-mono text-sm uppercase tracking-widest font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-500 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-accent-500 text-bg-void hover:bg-accent-400 shadow-[0_0_15px_rgba(0,255,156,0.2)] hover:shadow-[0_0_20px_rgba(0,255,156,0.4)]": variant === "primary",
            "bg-bg-surface text-text-primary hover:bg-bg-base border border-text-muted/30": variant === "secondary",
            "border border-accent-500 text-accent-500 hover:bg-accent-500/10": variant === "outline",
            "hover:bg-text-muted/10 text-text-primary": variant === "ghost",
            "h-10 px-4 py-2": size === "default",
            "h-8 rounded-sm px-3 text-xs": size === "sm",
            "h-12 rounded-sm px-8 text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
