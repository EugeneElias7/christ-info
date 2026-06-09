import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, ExternalLink, Instagram, GraduationCap, Users, Sparkles, Theater } from 'lucide-react'
import { getMotionVariants, fadeInUp, viewportLazy } from '../lib/animations'
import { EmailPopup } from '../components/ui/EmailPopup'
import {
  samagraLeadership,
  samagraWings,
  afterHourInfo,
  afterHourWings,
} from '../data/samagra'
import type { WingDetail, AfterHourWing } from '../data/samagra'

import samagraLogo from '../assets/images/samagra logo.png'
import techRevampImg from '../assets/images/Tech Revamp.png'
import vaultVortexImg from '../assets/images/Vault Vortex.png'
import shieldImg from '../assets/images/SHIELD.png'
import vizerionImg from '../assets/images/Vizerion.png'
import offTopicImg from '../assets/images/OF(F) Topic.png'
import cscSocImg from '../assets/images/CSC SOC.png'
import wistImg from '../assets/images/WIST.png'
import afterHourLogo from '../assets/images/afterhours Production logo.jpg'

const samagraImages: Record<string, string> = {
  'vault-vortex': vaultVortexImg,
  shield: shieldImg,
  vizerion: vizerionImg,
  'off-topic': offTopicImg,
  'csc-soc': cscSocImg,
  wist: wistImg,
  'tech-revamp': techRevampImg,
}

type ModalData =
  | { type: 'samagra'; wing: WingDetail }
  | { type: 'after-hour'; wing: AfterHourWing }

function WingModal({ data, onClose }: { data: ModalData; onClose: () => void }) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
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
        className="relative bg-white rounded-card-lg shadow-xl border border-cream-border max-w-lg w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="h-[3px] bg-gradient-to-r from-gold/60 via-gold to-gold/60" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-charcoal/5 hover:bg-charcoal/10 flex items-center justify-center transition-colors z-10"
          aria-label="Close"
        >
          <X size={16} strokeWidth={1.5} className="text-charcoal/50" />
        </button>

        {data.type === 'samagra' ? (
          <SamagraWingContent wing={data.wing} />
        ) : (
          <AfterHourWingContent wing={data.wing} />
        )}
      </motion.div>
    </motion.div>
  )
}

function SamagraWingContent({ wing }: { wing: WingDetail }) {
  const imgSrc = samagraImages[wing.id]
  return (
    <div className="p-6 sm:p-8">
      <div className="flex flex-col items-center text-center mb-6">
        <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-gold/30 shadow-lg mb-4">
          {imgSrc ? (
            <img src={imgSrc} alt={wing.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-maroon to-charcoal flex items-center justify-center">
              <span className="text-2xl font-serif font-bold text-gold">
                {wing.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
              </span>
            </div>
          )}
        </div>
        <h2 className="text-heading font-serif text-maroon leading-tight">{wing.name}</h2>
        <p className="text-label-sm font-sans text-gold mt-1">{wing.tagline}</p>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-[10px] font-sans font-semibold text-charcoal/40 uppercase tracking-wider mb-2">Faculty Coordinator{wing.facultyCoordinators.length > 1 ? 's' : ''}</p>
          <div className="space-y-2">
            {wing.facultyCoordinators.map((fc, i) => (
              <div key={i} className="flex items-center justify-between bg-cream rounded-card px-3 py-2">
                <span className="text-body-sm font-sans text-charcoal">{fc.name}</span>
                <EmailPopup email={fc.email}>
                  <Mail size={12} strokeWidth={1.5} />
                  <span className="hidden sm:inline">{fc.email}</span>
                </EmailPopup>
              </div>
            ))}
          </div>
        </div>

        {wing.studentCoordinators && wing.studentCoordinators.length > 0 && (
          <div>
            <p className="text-[10px] font-sans font-semibold text-charcoal/40 uppercase tracking-wider mb-2">Student Coordinator{wing.studentCoordinators.length > 1 ? 's' : ''}</p>
            <div className="space-y-2">
              {wing.studentCoordinators.map((sc, i) => (
                <div key={i} className="flex items-center justify-between bg-cream rounded-card px-3 py-2">
                  <span className="text-body-sm font-sans text-charcoal">{sc.name}</span>
                  <EmailPopup email={sc.email}>
                    <Mail size={12} strokeWidth={1.5} />
                    <span className="hidden sm:inline">{sc.email}</span>
                  </EmailPopup>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <p className="text-[10px] font-sans font-semibold text-charcoal/40 uppercase tracking-wider mb-1">Description</p>
          <p className="text-body-sm font-sans text-charcoal/70 leading-relaxed">{wing.description}</p>
        </div>

        {wing.focusAreas && wing.focusAreas.length > 0 && (
          <div>
            <p className="text-[10px] font-sans font-semibold text-charcoal/40 uppercase tracking-wider mb-2">Focus Areas</p>
            <div className="flex flex-wrap gap-1.5">
              {wing.focusAreas.map((area, i) => (
                <span
                  key={i}
                  className="text-[11px] font-sans text-maroon/70 bg-maroon/5 px-2.5 py-1 rounded-full border border-maroon/10"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function AfterHourWingContent({ wing }: { wing: AfterHourWing }) {
  return (
    <div className="p-6 sm:p-8">
      <div className="flex flex-col items-center text-center mb-6">
        <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-gold/30 shadow-lg mb-4 bg-gradient-to-br from-maroon to-charcoal flex items-center justify-center">
          <Theater size={32} strokeWidth={1.5} className="text-gold/70" />
        </div>
        <h2 className="text-heading font-serif text-maroon leading-tight">{wing.name}</h2>
        <p className="text-label-sm font-sans text-gold mt-1">{wing.tagline}</p>
      </div>

      <div className="space-y-4">
        {wing.facultyCoordinator.email && (
          <div>
            <p className="text-[10px] font-sans font-semibold text-charcoal/40 uppercase tracking-wider mb-2">Faculty Coordinator</p>
            <div className="flex items-center justify-between bg-cream rounded-card px-3 py-2">
              <span className="text-body-sm font-sans text-charcoal">{wing.facultyCoordinator.name}</span>
              <EmailPopup email={wing.facultyCoordinator.email}>
                <Mail size={12} strokeWidth={1.5} />
                <span className="hidden sm:inline">{wing.facultyCoordinator.email}</span>
              </EmailPopup>
            </div>
          </div>
        )}

        <div>
          <p className="text-[10px] font-sans font-semibold text-charcoal/40 uppercase tracking-wider mb-1">Description</p>
          <p className="text-body-sm font-sans text-charcoal/70 leading-relaxed">{wing.description}</p>
        </div>

        {wing.performanceHighlights && wing.performanceHighlights.length > 0 && (
          <div>
            <p className="text-[10px] font-sans font-semibold text-charcoal/40 uppercase tracking-wider mb-2">Performance Highlights</p>
            <ul className="space-y-1.5">
              {wing.performanceHighlights.map((h, i) => (
                <li key={i} className="text-body-sm font-sans text-charcoal/60 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-[7px] flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export function ClubsAssociationsPage() {
  const [modalData, setModalData] = useState<ModalData | null>(null)

  const closeModal = useCallback(() => setModalData(null), [])

  return (
    <div className="min-h-screen bg-cream pt-nav-h">
      <div className="relative bg-gradient-to-r from-maroon-dark via-maroon to-maroon/90 border-b border-gold/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,160,23,0.08),transparent_60%)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-10 lg:py-14">
          <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-1">Student Life</p>
          <h1 className="text-display-sm font-serif text-cream leading-tight">Clubs & Associations</h1>
          <p className="text-body-sm text-cream/60 font-sans mt-2 max-w-xl">
            Student communities and cultural collectives fostering creativity, leadership, and innovation.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-8 lg:py-10">
        {/* ──────────── Samagra Association ──────────── */}
        <section id="samagra">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-maroon/10 flex items-center justify-center flex-shrink-0">
              <GraduationCap size={20} strokeWidth={1.5} className="text-maroon" />
            </div>
            <div>
              <h2 className="text-heading font-serif text-maroon">Samagra Association</h2>
              <p className="text-label-sm font-sans text-charcoal/40">Computer Science Association</p>
            </div>
          </div>

          {/* Samagra Leadership */}
          <motion.div
            variants={getMotionVariants(fadeInUp)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportLazy}
            className="bg-white border border-cream-border rounded-card-lg shadow-card-white overflow-hidden mb-8"
          >
            <div className="h-[3px] bg-gradient-to-r from-gold/60 via-gold to-gold/60" />
            <div className="p-card-p">
              <div className="flex items-center gap-2 mb-4">
                <Users size={18} strokeWidth={1.5} className="text-gold" />
                <h3 className="text-label-sm font-sans font-semibold text-charcoal">Samagra Leadership</h3>
              </div>
              <div className="space-y-2 mb-4">
                {samagraLeadership.facultyCoordinators.map((fc, i) => (
                  <div key={i} className="flex items-center justify-between bg-cream rounded-card px-3 py-2">
                    <span className="text-body-sm font-sans text-charcoal">{fc.name}</span>
                    <EmailPopup email={fc.email}>
                      <Mail size={12} strokeWidth={1.5} />
                      <span className="hidden sm:inline">{fc.email}</span>
                    </EmailPopup>
                  </div>
                ))}
              </div>
              <p className="text-body-sm font-sans text-charcoal/60 leading-relaxed">
                {samagraLeadership.description}
              </p>
            </div>
          </motion.div>

          {/* Samagra logo + description */}
          <motion.div
            variants={getMotionVariants(fadeInUp)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportLazy}
            className="flex flex-col lg:flex-row items-center gap-6 mb-8 bg-white border border-cream-border rounded-card-lg shadow-card-white p-card-p"
          >
            <div className="flex-shrink-0">
              <div className="bg-maroon rounded-card-lg px-5 py-3">
                <img src={samagraLogo} alt="SAMAGRA" className="h-12 sm:h-14 w-auto object-contain" />
              </div>
            </div>
            <div>
              <p className="text-body-sm font-sans text-charcoal/70 leading-relaxed">
                Samagra, the Computer Science Association of CHRIST (Deemed to be University), Bangalore Yeshwanthpur Campus (BYC), is a vibrant platform that fosters academic excellence, innovation, and professional growth.
              </p>
              <p className="text-body-sm font-sans text-charcoal/70 leading-relaxed mt-3">
                The association conducts a variety of intra-class and inter-class activities throughout the year, providing students with opportunities to enhance their technical skills, creativity, leadership, and teamwork.
              </p>
              <p className="text-body-sm font-sans text-charcoal/70 leading-relaxed mt-3">
                By bringing together students and faculty, Samagra promotes collaborative learning, knowledge sharing, and holistic development within the field of computer science.
              </p>
              <a
                href="https://www.instagram.com/samagra_cs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-label-sm font-sans text-gold hover:text-gold-light transition-colors"
              >
                <Instagram size={14} strokeWidth={1.5} /> Follow on Instagram
              </a>
            </div>
          </motion.div>

          {/* Samagra Wings */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-5 lg:gap-6 mb-16">
            {samagraWings.map((wing, i) => {
              const imgSrc = samagraImages[wing.id]
              return (
                <motion.button
                  key={wing.id}
                  variants={getMotionVariants(fadeInUp)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportLazy}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setModalData({ type: 'samagra', wing })}
                  className="group flex flex-col items-center text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-card p-3 transition-all duration-300 hover:bg-white/80"
                >
                  <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden ring-2 ring-gold/30 shadow-[0_4px_16px_-4px_rgba(212,160,23,0.2)] transition-all duration-500 group-hover:scale-105 group-hover:ring-gold/50">
                    {imgSrc ? (
                      <img src={imgSrc} alt={wing.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-maroon to-charcoal flex items-center justify-center">
                        <span className="text-lg font-serif font-bold text-gold">
                          {wing.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-sm font-serif font-bold text-maroon mt-2 leading-tight">{wing.name}</h3>
                  <p className="text-[10px] font-sans text-charcoal/50 leading-tight">{wing.domain}</p>
                  <span className="mt-1.5 text-[10px] font-sans text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to Explore
                  </span>
                </motion.button>
              )
            })}
          </div>
        </section>

        {/* ──────────── After Hour Productions ──────────── */}
        <section id="after-hour">
          <div className="w-full h-px bg-cream-border mb-8" />
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-maroon/10 flex items-center justify-center flex-shrink-0">
              <Sparkles size={20} strokeWidth={1.5} className="text-maroon" />
            </div>
            <div>
              <h2 className="text-heading font-serif text-maroon">After Hour Productions</h2>
              <p className="text-label-sm font-sans text-charcoal/40">School of Sciences Cultural Club</p>
            </div>
          </div>

          {/* After Hour logo + description */}
          <motion.div
            variants={getMotionVariants(fadeInUp)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportLazy}
            className="bg-white border border-cream-border rounded-card-lg shadow-card-white p-card-p mb-8"
          >
            <div className="h-[3px] bg-gradient-to-r from-gold/60 via-gold to-gold/60 -mx-card-p -mt-card-p mb-6" />
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-gold/30 shadow-lg flex-shrink-0">
                <img src={afterHourLogo} alt="After Hour Productions" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-label-sm font-sans text-gold tracking-wider uppercase mb-1">{afterHourInfo.category}</p>
                <p className="text-body-sm font-sans text-charcoal/70 leading-relaxed">{afterHourInfo.description}</p>
                <a
                  href={afterHourInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2 text-xs font-sans text-[#E4405F] hover:text-[#E4405F]/80 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  Follow on Instagram
                </a>
              </div>
            </div>
          </motion.div>

          {/* After Hour Wings */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {afterHourWings.map((wing, i) => (
              <motion.button
                key={wing.id}
                variants={getMotionVariants(fadeInUp)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportLazy}
                transition={{ delay: i * 0.08 }}
                onClick={() => setModalData({ type: 'after-hour', wing })}
                className="group bg-white border border-cream-border rounded-card-lg shadow-card-white overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <div className="h-[3px] bg-gradient-to-r from-gold/60 via-gold to-gold/60" />
                <div className="p-5 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-maroon/10 to-charcoal/5 flex items-center justify-center ring-2 ring-gold/20 mb-3 transition-all duration-500 group-hover:ring-gold/40 group-hover:scale-105">
                    <Theater size={28} strokeWidth={1.5} className="text-maroon/50" />
                  </div>
                  <h3 className="text-heading-sm font-serif font-bold text-maroon">{wing.name}</h3>
                  <p className="text-[10px] font-sans text-charcoal/50 mt-1">{wing.tagline}</p>
                  <span className="mt-2 text-[11px] font-sans text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                    Click to Explore <ExternalLink size={10} strokeWidth={1.5} />
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* About After Hour Productions */}
          <motion.div
            variants={getMotionVariants(fadeInUp)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportLazy}
            className="bg-white border border-cream-border rounded-card-lg shadow-card-white p-card-p"
          >
            <div className="flex items-center gap-2 mb-4">
              <Theater size={18} strokeWidth={1.5} className="text-gold" />
              <h3 className="text-label-sm font-sans font-semibold text-charcoal">About After Hour Productions</h3>
            </div>
            <ul className="space-y-2">
              {afterHourInfo.about.map((fact, i) => (
                <li key={i} className="text-body-sm font-sans text-charcoal/60 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-[7px] flex-shrink-0" />
                  {fact}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>
      </div>

      <AnimatePresence>
        {modalData && <WingModal data={modalData} onClose={closeModal} />}
      </AnimatePresence>
    </div>
  )
}

export default ClubsAssociationsPage
