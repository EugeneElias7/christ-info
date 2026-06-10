import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, Award, BookOpen, Globe, Users, GraduationCap, Briefcase, Microscope, Target, Sparkles } from 'lucide-react'
import { getMotionVariants, fadeInUp, staggerContainer, viewportLazy } from '../lib/animations'
import { SectionWrapper } from '../components/ui/SectionWrapper'
import {
  harmonyStats, harmonyWings,
  inheritanceOutcomes, archiveHighlights,
  certificationProviders, skillsCategories,
  internationalHighlights,
} from '../data/harmony'
import type { HarmonyWing } from '../data/harmony'

const wingContent: Record<string, { icon: React.ReactNode; description: string }> = {
  inheritance: {
    icon: <Briefcase size={32} strokeWidth={1.5} />,
    description: 'Inheritance is the department\'s industry mentorship initiative that connects students with experienced professionals, entrepreneurs, researchers, and technology leaders from diverse domains. The initiative promotes career readiness, professional networking, real-world exposure, project guidance, internship opportunities, and industry-oriented skill development. Students benefit from structured mentorship sessions, collaborative discussions, career guidance, and insights into emerging industry practices.',
  },
  archive: {
    icon: <Microscope size={32} strokeWidth={1.5} />,
    description: 'ARCHive serves as the department\'s research and innovation ecosystem. The initiative encourages students to transform ideas into impactful research, innovative solutions, publications, prototypes, and collaborative projects.',
  },
  skills: {
    icon: <Award size={32} strokeWidth={1.5} />,
    description: 'The department actively promotes professional skill development through certifications, projects, internships, and industry-oriented learning opportunities.',
  },
  international: {
    icon: <Globe size={32} strokeWidth={1.5} />,
    description: 'The department facilitates global learning opportunities through student exchange programmes, international academic interactions, expert talks, and collaborative learning initiatives.',
  },
}

function HarmonyWingModal({ wing, onClose }: { wing: HarmonyWing; onClose: () => void }) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onEsc)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-card-lg shadow-xl border border-cream-border max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="h-[3px] bg-gradient-to-r from-gold/60 via-gold to-gold/60" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-charcoal/5 hover:bg-charcoal/10 flex items-center justify-center transition-colors z-10"
          aria-label="Close"
        >
          <X size={16} strokeWidth={1.5} className="text-charcoal/50" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="flex flex-col items-center text-center mb-6">
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${wing.color} bg-opacity-10 flex items-center justify-center mb-4`}>
              <div className="text-white/90">{wingContent[wing.id]?.icon}</div>
            </div>
            <h2 className="text-heading font-serif text-maroon leading-tight">{wing.name}</h2>
            <p className="text-label-sm font-sans text-gold mt-1">{wing.tagline}</p>
          </div>

          {wing.id === 'inheritance' && <InheritanceContent />}
          {wing.id === 'archive' && <ArchiveContent />}
          {wing.id === 'skills' && <SkillsContent />}
          {wing.id === 'international' && <InternationalContent />}
        </div>
      </motion.div>
    </motion.div>
  )
}

function InheritanceContent() {
  return (
    <div className="space-y-5">
      <p className="text-body-sm font-sans text-charcoal/60 leading-relaxed">
        Inheritance is the department's industry mentorship initiative that connects students with experienced professionals, entrepreneurs, researchers, and technology leaders from diverse domains.
      </p>
      <p className="text-body-sm font-sans text-charcoal/60 leading-relaxed">
        The initiative promotes career readiness, professional networking, real-world exposure, project guidance, internship opportunities, and industry-oriented skill development. Students benefit from structured mentorship sessions, collaborative discussions, career guidance, and insights into emerging industry practices.
      </p>
      <div className="bg-cream/80 rounded-card-lg border border-cream-border p-4">
        <p className="text-[10px] font-sans font-semibold text-gold uppercase tracking-wider mb-3">Expected Outcomes</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {inheritanceOutcomes.map((o) => (
            <div key={o} className="flex items-center gap-2 px-3 py-2 rounded-card bg-white border border-cream-border">
              <Target size={12} strokeWidth={1.5} className="text-gold shrink-0" />
              <span className="text-xs font-sans text-charcoal/70">{o}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ArchiveContent() {
  return (
    <div className="space-y-5">
      <p className="text-body-sm font-sans text-charcoal/60 leading-relaxed">
        ARCHive serves as the department's research and innovation ecosystem. The initiative encourages students to transform ideas into impactful research, innovative solutions, publications, prototypes, and collaborative projects.
      </p>
      <div className="space-y-3">
        {archiveHighlights.map((h, i) => (
          <div key={h.year} className="flex gap-3 items-start">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Sparkles size={12} strokeWidth={1.5} className="text-gold" />
              </div>
              {i < archiveHighlights.length - 1 && <div className="w-px flex-1 bg-gold/20 min-h-[16px]" />}
            </div>
            <div className="pb-3">
              <p className="text-sm font-serif font-semibold text-maroon">{h.year}</p>
              <p className="text-xs font-sans text-charcoal/60 mt-0.5">{h.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SkillsContent() {
  const [failedLogos, setFailedLogos] = useState<Set<string>>(new Set())

  return (
    <div className="space-y-5">
      <p className="text-body-sm font-sans text-charcoal/60 leading-relaxed">
        The department actively promotes professional skill development through certifications, projects, internships, and industry-oriented learning opportunities.
      </p>

      <div>
        <p className="text-[10px] font-sans font-semibold text-gold uppercase tracking-wider mb-3">Certification Partners</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {certificationProviders.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 rounded-card-lg border border-cream-border bg-cream/50 hover:bg-cream hover:border-gold/30 transition-all duration-200">
              {p.logo && !failedLogos.has(p.name) ? (
                <img
                  src={p.logo}
                  alt={p.name}
                  className="w-6 h-6 object-contain shrink-0"
                  onError={() => setFailedLogos(prev => new Set(prev).add(p.name))}
                />
              ) : (
                <Award size={14} strokeWidth={1.5} className="text-gold shrink-0" />
              )}
              <span className="text-[10px] font-sans font-medium text-charcoal/70 leading-tight">{p.name}</span>
            </a>
          ))}
        </div>
        <p className="text-center text-xs font-sans text-gold font-semibold mt-3">431+ Certifications Completed</p>
      </div>

      <div>
        <p className="text-[10px] font-sans font-semibold text-gold uppercase tracking-wider mb-3">Projects & Internships</p>
        <div className="grid grid-cols-2 gap-2">
          {skillsCategories.map((c) => (
            <div key={c.label} className="p-3 rounded-card-lg border border-cream-border bg-white text-center">
              <p className="text-lg font-serif font-bold text-maroon">{c.value}</p>
              <p className="text-[10px] font-sans font-semibold text-charcoal/70 mt-0.5">{c.label}</p>
              <p className="text-[9px] font-sans text-charcoal/40 mt-0.5">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function InternationalContent() {
  return (
    <div className="space-y-5">
      <p className="text-body-sm font-sans text-charcoal/60 leading-relaxed">
        The department facilitates global learning opportunities through student exchange programmes, international academic interactions, expert talks, and collaborative learning initiatives.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {internationalHighlights.map((h) => (
          <div key={h} className="flex items-center gap-2 p-3 rounded-card-lg border border-cream-border bg-cream/50">
            <Globe size={14} strokeWidth={1.5} className="text-gold shrink-0" />
            <span className="text-xs font-sans text-charcoal/70">{h}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function HarmonyPage() {
  const [selectedWing, setSelectedWing] = useState<HarmonyWing | null>(null)
  const closeModal = useCallback(() => setSelectedWing(null), [])

  return (
    <div className="min-h-screen bg-cream pt-nav-h">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-maroon-dark via-maroon to-maroon/90 border-b border-gold/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,160,23,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,160,23,0.05),transparent_50%)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-2">Flagship Initiative</p>
            <h1 className="text-[3.5rem] sm:text-[5rem] lg:text-[7rem] font-serif font-bold text-cream leading-none tracking-tight">
              HARMONY
            </h1>
            <p className="text-body-lg sm:text-heading-sm font-sans text-gold/90 mt-3 max-w-2xl font-medium">
              Holistic Assistance on Research, Mentorship, and Opportunities for Nurturing Youth
            </p>
            <p className="text-body-sm font-sans text-cream/60 mt-4 max-w-xl leading-relaxed">
              HARMONY is a flagship initiative of the Department of Computer Science, CHRIST (Deemed to be University), Bangalore Yeshwanthpur Campus, designed to bridge academic learning with research, mentorship, professional development, and global opportunities.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <motion.div
        variants={getMotionVariants(staggerContainer)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportLazy}
        className="mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x -mt-8 relative z-10"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {harmonyStats.map((stat, i) => (
            <motion.div
              key={stat.id}
              variants={getMotionVariants(fadeInUp)}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-cream-border rounded-card-lg shadow-card-white px-5 py-4 flex flex-col justify-center text-center transition-all duration-300 hover:border-gold/30 hover:shadow-card-hover flex-1 min-w-[140px] max-w-[200px]"
            >
              <span className="text-2xl lg:text-3xl font-serif font-bold text-gold leading-none">{stat.value}</span>
              <span className="text-label-sm font-sans text-charcoal/60 mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>



      {/* Harmony Wings */}
      <SectionWrapper background="cream-muted" ariaLabel="Harmony Wings">
        <motion.div
          variants={getMotionVariants(staggerContainer)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportLazy}
        >
          <div className="text-center mb-8">
            <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-2">Explore</p>
            <h2 className="text-display-sm font-serif text-maroon">Harmony Wings</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {harmonyWings.map((wing, i) => (
              <motion.button
                key={wing.id}
                variants={getMotionVariants(fadeInUp)}
                transition={{ delay: i * 0.08 }}
                onClick={() => setSelectedWing(wing)}
                className="group text-left bg-white border border-cream-border rounded-card-lg shadow-card-white overflow-hidden hover:border-gold/30 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className={`h-2 bg-gradient-to-r ${wing.color}`} />
                <div className="p-5">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${wing.color} bg-opacity-10 flex items-center justify-center mb-3`}>
                    <div className="text-white/80">
                      {wing.id === 'inheritance' && <Briefcase size={20} strokeWidth={1.5} />}
                      {wing.id === 'archive' && <Microscope size={20} strokeWidth={1.5} />}
                      {wing.id === 'skills' && <Award size={20} strokeWidth={1.5} />}
                      {wing.id === 'international' && <Globe size={20} strokeWidth={1.5} />}
                    </div>
                  </div>
                  <h3 className="text-body font-serif font-semibold text-maroon group-hover:text-gold transition-colors">{wing.name}</h3>
                  <p className="text-[11px] font-sans text-charcoal/50 mt-1 leading-relaxed">{wing.tagline}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>



      {/* Wing Modal */}
      <AnimatePresence>
        {selectedWing && <HarmonyWingModal wing={selectedWing} onClose={closeModal} />}
      </AnimatePresence>
    </div>
  )
}

export default HarmonyPage
