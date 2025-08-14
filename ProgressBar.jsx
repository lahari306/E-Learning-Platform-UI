import React from 'react'

export default function ProgressBar({ value }) {
  const pct = Math.min(100, Math.max(0, Math.round(value)))
  return (
    <div className="w-full">
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gray-900" style={{ width: pct + '%' }} />
      </div>
      <div className="text-xs mt-1 text-gray-600">{pct}% complete</div>
    </div>
  )
}
