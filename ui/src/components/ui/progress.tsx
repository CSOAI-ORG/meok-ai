'use client'

import * as React from 'react'
import { clsx as cn } from 'clsx'

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, ...props }, ref) => {
    const pct = Math.min(100, Math.max(0, (value / max) * 100))
    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        className={cn('relative w-full overflow-hidden rounded-full bg-white/10 h-2', className)}
        {...props}
      >
        <div
          className="h-full rounded-full bg-[#c9a84c] transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    )
  }
)
Progress.displayName = 'Progress'

export { Progress }
