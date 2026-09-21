import * as React from "react"
import { cn } from "@/lib/utils"

const Panel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-sm border border-text-muted/20 bg-bg-surface/80 backdrop-blur-sm text-text-primary shadow-xl",
        className
      )}
      {...props}
    />
  )
)
Panel.displayName = "Panel"

export { Panel }
