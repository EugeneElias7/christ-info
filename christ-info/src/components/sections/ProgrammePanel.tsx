import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, User } from 'lucide-react';
import { programmes } from '../../data/programmes';

export function ProgrammePanel({ open, programmeId, onClose }: {
  open: boolean; programmeId: string | null; onClose: () => void;
}) {
  const programme = programmes.find(p => p.id === programmeId);

  return (
    <AnimatePresence>
      {open && programme && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-overlay bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="bg-cream rounded-card-lg w-full max-w-lg max-h-[85vh] overflow-hidden shadow-hero-glow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-maroon-dark via-maroon to-maroon/90 px-6 py-6 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-cream/60 hover:bg-white/20 hover:text-cream transition-colors"
                aria-label="Close"
              >
                <X size={14} strokeWidth={1.5} />
              </button>
              <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-1">Programme</p>
              <h2 className="text-heading font-serif text-cream">{programme.name}</h2>
              <p className="text-sm font-sans text-cream/60 mt-1">{programme.duration}</p>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(85vh-120px)]">
              <p className="text-sm font-sans text-charcoal/70 leading-relaxed mb-6">{programme.description}</p>

              <p className="text-label font-sans text-maroon tracking-wider uppercase mb-3">Sections</p>
              <div className="space-y-3">
                {programme.sections.map((section) => (
                  <div
                    key={section.name}
                    className="bg-white border border-cream-border rounded-card px-5 py-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-sans font-bold text-maroon">{section.name}</h4>
                      <span className="text-xs font-sans bg-maroon/5 text-maroon/70 px-2 py-0.5 rounded-pill font-medium">
                        {section.strength} students
                      </span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-xs font-sans text-charcoal/60">
                        <MapPin size={12} strokeWidth={1.5} className="text-gold/60" />
                        Room: {section.roomNo}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-sans text-charcoal/60">
                        <User size={12} strokeWidth={1.5} className="text-gold/60" />
                        Class Teacher: <span className="text-charcoal/80 font-medium">{section.classTeacher}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProgrammePanel;
