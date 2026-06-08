import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Users, MapPin, ExternalLink } from 'lucide-react'
import { programmes } from '../data/programmes'
import { getMotionVariants, fadeInUp, staggerContainer } from '../lib/animations'

export function ProgrammeDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const programme = programmes.find((p) => p.id === id)

  if (!programme) {
    return (
      <div className="min-h-screen bg-cream pt-nav-h flex items-center justify-center">
        <div className="text-center">
          <p className="text-body text-charcoal/60 font-sans mb-4">Programme not found</p>
          <button
            onClick={() => navigate('/programmes')}
            className="text-label-sm font-sans text-gold hover:text-gold-light transition-colors"
          >
            ← Back to Programmes
          </button>
        </div>
      </div>
    )
  }

  const containerVariants = getMotionVariants(staggerContainer)

  return (
    <div className="min-h-screen bg-cream pt-nav-h">
      <div className="relative bg-gradient-to-r from-maroon-dark via-maroon to-maroon/90 border-b border-gold/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,160,23,0.08),transparent_60%)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-10 lg:py-14">
          <button
            onClick={() => navigate('/programmes')}
            className="flex items-center gap-1.5 text-label-sm font-sans text-cream/50 hover:text-cream transition-colors mb-4"
          >
            <ArrowLeft size={14} strokeWidth={1.5} /> Back to Programmes
          </button>
          <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-1">{programme.shortName}</p>
          <h1 className="text-display-sm font-serif text-cream leading-tight max-w-2xl">{programme.name}</h1>
          <p className="text-body-sm text-cream/70 font-sans mt-2 max-w-xl">{programme.description}</p>
          <p className="text-label-sm font-sans text-gold/70 mt-2">{programme.duration}</p>
          {programme.exploreUrl && (
            <a
              href={programme.exploreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 px-4 py-2 rounded-card bg-gold text-maroon-dark text-label-sm font-sans font-semibold hover:bg-gold-light transition-colors"
            >
              Explore Course <ExternalLink size={14} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>

      {programme.sections.length > 0 && (
        <div className="mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-8 lg:py-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {programme.sections.map((section, i) => (
              <motion.div
                key={section.name}
                variants={getMotionVariants(fadeInUp)}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-cream-border rounded-card-lg shadow-card-white p-card-p"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-maroon/5 flex items-center justify-center">
                    <span className="text-label font-sans font-bold text-maroon">{section.name.replace('Section ', '')}</span>
                  </div>
                  <h2 className="text-heading-sm font-serif text-charcoal">Section {section.name.replace('Section ', '')}</h2>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-body-sm font-sans text-charcoal/60">
                    <MapPin size={14} strokeWidth={1.5} className="text-gold flex-shrink-0" />
                    <span>Room <strong className="text-charcoal/80">{section.roomNo}</strong></span>
                  </div>
                  <div className="flex items-center gap-3 text-body-sm font-sans text-charcoal/60">
                    <span className="w-7 h-7 rounded-full bg-maroon/5 flex items-center justify-center text-[10px] font-bold text-maroon flex-shrink-0">CT</span>
                    <span>Class Teacher: <strong className="text-charcoal/80">{section.classTeacher}</strong></span>
                  </div>
                  {section.strength && (
                    <div className="flex items-center gap-3 text-body-sm font-sans text-charcoal/60">
                      <Users size={14} strokeWidth={1.5} className="text-gold flex-shrink-0" />
                      <span><strong className="text-charcoal/80">{section.strength}</strong> Students</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {programme.sections.length === 0 && (
        <div className="mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-8 lg:py-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={getMotionVariants(fadeInUp)} className="text-center mb-10">
              <div className="w-16 h-16 rounded-full bg-maroon/5 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7F1D1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"/>
                </svg>
              </div>
              <h2 className="text-heading font-serif text-maroon mb-2">Research Programme</h2>
              <p className="text-body font-sans text-charcoal/60 max-w-xl mx-auto">
                Doctoral research in Computer Science under expert supervision. Scholars explore cutting-edge topics across AI, data science, cybersecurity, and emerging technologies.
              </p>
            </motion.div>

            <motion.div variants={getMotionVariants(fadeInUp)} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-cream-border rounded-card-lg shadow-card-white p-card-p">
                <h3 className="text-label-sm font-sans font-semibold text-maroon mb-2">Research Areas</h3>
                <ul className="space-y-1.5">
                  <li className="text-body-sm font-sans text-charcoal/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    Artificial Intelligence & Machine Learning
                  </li>
                  <li className="text-body-sm font-sans text-charcoal/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    Cybersecurity & Cryptography
                  </li>
                  <li className="text-body-sm font-sans text-charcoal/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    Data Science & Big Data Analytics
                  </li>
                  <li className="text-body-sm font-sans text-charcoal/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    Computer Vision & Image Processing
                  </li>
                  <li className="text-body-sm font-sans text-charcoal/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    Natural Language Processing
                  </li>
                  <li className="text-body-sm font-sans text-charcoal/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    Software Engineering & Cloud Computing
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-cream-border rounded-card-lg shadow-card-white p-card-p">
                <h3 className="text-label-sm font-sans font-semibold text-maroon mb-2">Programme Highlights</h3>
                <ul className="space-y-1.5">
                  <li className="text-body-sm font-sans text-charcoal/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    Duration: 3 – 5 Years
                  </li>
                  <li className="text-body-sm font-sans text-charcoal/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    Rigorous research methodology training
                  </li>
                  <li className="text-body-sm font-sans text-charcoal/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    Expert guidance from experienced supervisors
                  </li>
                  <li className="text-body-sm font-sans text-charcoal/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    Access to state-of-the-art labs
                  </li>
                  <li className="text-body-sm font-sans text-charcoal/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    Publication in peer-reviewed journals
                  </li>
                  <li className="text-body-sm font-sans text-charcoal/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    Interdisciplinary research opportunities
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default ProgrammeDetailPage
