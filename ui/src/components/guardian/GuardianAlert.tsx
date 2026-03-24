"use client"

import { useState } from 'react'
import {
  Info,
  AlertTriangle,
  ShieldAlert,
  X,
  CheckCircle,
} from 'lucide-react'

export interface GuardianAlertProps {
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
  message: string
  recommendedAction?: string
  onDismiss?: () => void
  onReportScam?: () => void
  className?: string
}

export function shouldShowAlert(severity: string): boolean {
  return severity !== 'LOW'
}

const SEVERITY_STYLES = {
  LOW: {
    border: 'border border-neutral-600',
    icon: <Info className="h-5 w-5 text-neutral-400" aria-hidden="true" />,
    label: 'Information',
    heading: 'Notice',
    headingColour: 'text-neutral-300',
  },
  MEDIUM: {
    border: 'border-2 border-amber-400',
    icon: <AlertTriangle className="h-5 w-5 text-amber-400" aria-hidden="true" />,
    label: 'Warning',
    heading: 'Caution',
    headingColour: 'text-amber-400',
  },
  HIGH: {
    border: 'border-2 border-orange-500',
    icon: <AlertTriangle className="h-5 w-5 text-orange-500" aria-hidden="true" />,
    label: 'Alert',
    heading: 'Guardian Alert',
    headingColour: 'text-orange-500',
  },
  CRITICAL: {
    border: 'border-2 border-red-600 animate-pulse',
    icon: <ShieldAlert className="h-6 w-6 text-red-500" aria-hidden="true" />,
    label: 'Critical Alert',
    heading: 'Critical Safety Alert',
    headingColour: 'text-red-500',
  },
}

export function GuardianAlert({
  severity,
  message,
  recommendedAction,
  onDismiss,
  onReportScam,
  className = '',
}: GuardianAlertProps) {
  const [reported, setReported] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  // LOW severity is never rendered
  if (severity === 'LOW') return null
  if (dismissed) return null

  const styles = SEVERITY_STYLES[severity]

  const isCritical = severity === 'CRITICAL'
  const isHigh = severity === 'HIGH'

  const ariaRole = isCritical || isHigh ? 'alert' : undefined
  const ariaLive = isCritical ? 'assertive' : undefined

  function handleDismiss() {
    setDismissed(true)
    onDismiss?.()
  }

  function handleReport() {
    setReported(true)
    onReportScam?.()
  }

  function handleCriticalDismiss() {
    if (reported) {
      handleDismiss()
    }
  }

  return (
    <div
      role={ariaRole}
      aria-live={ariaLive}
      aria-label={styles.label}
      className={[
        'rounded-xl p-4',
        'bg-[#0d0c18]',
        styles.border,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* Header row */}
      <div className="flex items-start gap-3">
        <div className="mt-0.5 shrink-0">{styles.icon}</div>

        <div className="flex-1 min-w-0">
          <p className={`text-sm font-semibold ${styles.headingColour}`}>
            {styles.heading}
          </p>
          <p className="mt-1 text-sm text-white leading-relaxed">{message}</p>

          {recommendedAction && (
            <p className="mt-2 text-xs text-neutral-400">
              Recommended action:{' '}
              <span className="text-neutral-300 font-medium">
                {recommendedAction}
              </span>
            </p>
          )}
        </div>

        {/* Dismiss X — not shown for CRITICAL until reported */}
        {!isCritical && (
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss alert"
            className="shrink-0 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Action buttons */}
      <div className="mt-3 flex flex-wrap gap-2 pl-8">
        {/* MEDIUM */}
        {severity === 'MEDIUM' && (
          <button
            type="button"
            onClick={handleDismiss}
            className="rounded-md bg-amber-400/10 px-3 py-1.5 text-xs font-medium text-amber-300 hover:bg-amber-400/20 transition-colors border border-amber-400/30"
          >
            Got it
          </button>
        )}

        {/* HIGH */}
        {isHigh && (
          <>
            <button
              type="button"
              onClick={handleDismiss}
              className="rounded-md bg-orange-500/10 px-3 py-1.5 text-xs font-medium text-orange-300 hover:bg-orange-500/20 transition-colors border border-orange-500/30"
            >
              I understand
            </button>
            <button
              type="button"
              onClick={handleReport}
              className="rounded-md bg-orange-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-orange-700 transition-colors"
            >
              Tell Guardian
            </button>
          </>
        )}

        {/* CRITICAL */}
        {isCritical && (
          <>
            <button
              type="button"
              onClick={handleReport}
              disabled={reported}
              className={[
                'rounded-md px-4 py-2 text-sm font-semibold transition-colors flex items-center gap-2',
                reported
                  ? 'bg-green-700 text-white cursor-default'
                  : 'bg-red-600 hover:bg-red-700 text-white',
              ].join(' ')}
            >
              {reported ? (
                <>
                  <CheckCircle className="h-4 w-4" aria-hidden="true" />
                  Reported
                </>
              ) : (
                <>
                  <ShieldAlert className="h-4 w-4" aria-hidden="true" />
                  Report Scam / Threat
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleCriticalDismiss}
              disabled={!reported}
              aria-disabled={!reported}
              className={[
                'rounded-md px-3 py-2 text-xs font-medium transition-colors border',
                reported
                  ? 'border-neutral-600 text-neutral-300 hover:bg-white/5'
                  : 'border-neutral-700 text-neutral-600 cursor-not-allowed',
              ].join(' ')}
              title={!reported ? 'You must report this first' : undefined}
            >
              {"I've reported this"}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
