import { useState, useRef } from 'react'
import { leaders } from '../../data/leadership'

interface FacultyHoverProps {
  name: string
  children: React.ReactNode
}

export function FacultyHover({ name, children }: FacultyHoverProps) {
  const [show, setShow] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>()

  const faculty = leaders.find(l =>
    l.name.toLowerCase() === name.toLowerCase() ||
    l.name.toLowerCase().startsWith(name.toLowerCase()) ||
    name.toLowerCase().startsWith(l.name.toLowerCase().split(' ')[0])
  )

  function handleEnter() {
    clearTimeout(timer.current)
    setShow(true)
  }

  function handleLeave() {
    timer.current = setTimeout(() => setShow(false), 3000)
  }

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <span className="cursor-help">{children}</span>
      {show && faculty && (
        <div
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-[70] min-w-[200px]"
          onMouseEnter={() => clearTimeout(timer.current)}
          onMouseLeave={handleLeave}
        >
          <div className="bg-white border border-cream-border rounded-card-lg shadow-lg p-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-charcoal/5 flex-shrink-0 ring-1 ring-gold/20">
                {faculty.imageUrl ? (
                  <img src={faculty.imageUrl} alt={faculty.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-charcoal to-charcoal-mid">
                    <span className="text-xs font-serif font-bold text-white/30">{faculty.imagePlaceholder}</span>
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-sans font-semibold text-charcoal leading-snug truncate">{faculty.name}</p>
                <p className="text-[10px] font-sans text-charcoal/50 truncate">{faculty.designation}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </span>
  )
}