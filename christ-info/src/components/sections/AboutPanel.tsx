import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { aboutTabs, visionMission, founderMessage, history, universityAnthem } from '../../data/about';
import { cn } from '../../lib/utils';

export function AboutPanel({ open, initialTab, onClose }: {
  open: boolean; initialTab: string | null; onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState(initialTab || 'vision-mission');

  const activeContent = () => {
    switch (activeTab) {
      case 'vision-mission':
        return (
          <div className="space-y-6">
            <div>
              <p className="text-sm font-sans text-gold italic mb-3">&ldquo;{visionMission.vision}&rdquo;</p>
              <div className="w-10 h-0.5 bg-gold/40 rounded-full" />
            </div>
            <div>
              <p className="text-label-sm font-sans text-maroon tracking-wider uppercase mb-2">Our Mission</p>
              <ul className="space-y-2">
                {visionMission.mission.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm font-sans text-charcoal/70">
                    <span className="text-gold/70 mt-0.5 flex-shrink-0">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-label-sm font-sans text-maroon tracking-wider uppercase mb-2">Core Values</p>
              <div className="flex flex-wrap gap-2">
                {visionMission.coreValues.map((v) => (
                  <span key={v} className="text-xs font-sans px-3 py-1.5 rounded-pill bg-gold/8 text-gold/80 border border-gold/15">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      case 'founder':
        return (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-28 h-28 rounded-card-lg bg-gradient-to-br from-cream-dark to-cream-border flex items-center justify-center flex-shrink-0 border border-gold/20">
                <span className="text-3xl font-serif font-bold text-maroon/40">CMI</span>
              </div>
              <div>
                <h3 className="text-heading-sm font-serif text-maroon">{founderMessage.name}</h3>
                <p className="text-xs font-sans text-gold font-medium mt-0.5">{founderMessage.years}</p>
                <p className="text-xs font-sans text-charcoal/50 mt-0.5">{founderMessage.title}</p>
              </div>
            </div>
            <div className="bg-white border border-cream-border rounded-card p-5">
              <p className="text-sm font-sans text-charcoal/70 leading-relaxed italic">&ldquo;{founderMessage.message}&rdquo;</p>
            </div>
          </div>
        );
      case 'history':
        return (
          <div className="space-y-0">
            {history.map((item, i) => (
              <div key={i} className="flex gap-4 pb-6 relative">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gold/60 ring-2 ring-gold/20 flex-shrink-0 z-10" />
                  {i < history.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gold/10 mt-1" />
                  )}
                </div>
                <div className="flex-1 pt-0.5">
                  <span className="text-sm font-serif font-bold text-gold">{item.year}</span>
                  <p className="text-sm font-sans font-medium text-charcoal mt-0.5">{item.event}</p>
                  <p className="text-xs font-sans text-charcoal/50 mt-0.5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'anthem':
        return (
          <div className="space-y-6">
              <div className="space-y-4">
                {universityAnthem.lyrics.map((stanza, i) => (
                  <div key={i} className="bg-white border-l-[3px] border-gold/40 rounded-r-card px-5 py-4">
                    <pre className="text-sm font-sans text-charcoal/70 leading-relaxed italic whitespace-pre-line font-[inherit]">{stanza}</pre>
                  </div>
                ))}
              </div>
          </div>
        );
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-overlay bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="bg-cream rounded-card-lg w-full max-w-2xl max-h-[85vh] overflow-hidden shadow-hero-glow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-maroon-deep via-maroon to-maroon/90 relative">
              <div className="px-6 pt-5 pb-0">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-heading-sm font-serif text-cream">About CHRIST University</h2>
                  <button
                    onClick={onClose}
                    className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-cream/60 hover:bg-white/20 hover:text-cream transition-colors"
                    aria-label="Close"
                  >
                    <X size={14} strokeWidth={1.5} />
                  </button>
                </div>
                <div className="flex gap-1 -mb-px">
                  {aboutTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        'px-4 py-2.5 text-xs font-sans font-medium transition-all duration-250 rounded-t-card',
                        activeTab === tab.id
                          ? 'bg-cream text-maroon'
                          : 'text-cream/60 hover:text-cream/90 hover:bg-white/5',
                      )}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(85vh-120px)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeContent()}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AboutPanel;
