import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface EmailPopupProps {
  email: string
  children: React.ReactNode
}

export function EmailPopup({ email, children }: EmailPopupProps) {
  const [hovered, setHovered] = useState(false)
  const [toast, setToast] = useState(false)

  function copy(e: React.MouseEvent) {
    e.stopPropagation()
    e.preventDefault()
    navigator.clipboard.writeText(email)
    setToast(true)
    setTimeout(() => setToast(false), 2500)
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="inline-flex items-center gap-1 px-1.5 py-1 rounded-[4px] bg-gold/10 text-gold/70 text-[8px] font-sans font-medium hover:bg-gold hover:text-maroon-dark transition-all cursor-pointer leading-none"
      >
        <span className="flex items-center gap-1">
          {children}
          {hovered && <span className="text-[7px] font-sans transition-all duration-200">Click to Copy</span>}
        </span>
      </button>

      {toast && (
        <div className="fixed bottom-6 right-6 z-[100] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="bg-charcoal text-cream text-[11px] font-sans px-4 py-2.5 rounded-card shadow-lg flex items-center gap-2">
            <Check size={14} strokeWidth={2} className="text-gold shrink-0" />
            <span>Copied <span className="font-medium">{email}</span> to clipboard ✨</span>
          </div>
        </div>
      )}
    </>
  )
}