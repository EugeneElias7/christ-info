import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { programmes } from '../data/programmes'
import { leaders } from '../data/leadership'
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
          <div className="mt-2 space-y-0.5">
            <p className="text-label-sm font-sans text-gold/70">{programme.duration}</p>
            {programme.durationHons && (
              <p className="text-label-sm font-sans text-gold/50">{programme.durationHons}</p>
            )}
          </div>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {programme.sections.map((section, i) => {
              const teacher = leaders.find(l =>
                l.name.toLowerCase() === section.classTeacher.toLowerCase() ||
                l.name.toLowerCase().startsWith(section.classTeacher.toLowerCase()) ||
                section.classTeacher.toLowerCase().startsWith(l.name.toLowerCase().split(' ')[0])
              )

              return (
                <motion.div
                  key={section.name}
                  variants={getMotionVariants(fadeInUp)}
                  transition={{ delay: i * 0.08 }}
                  className="group bg-white border border-cream-border rounded-card-lg shadow-card-white overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
                >
                  <div className="h-[3px] bg-gradient-to-r from-gold/60 via-gold to-gold/60" />

                  <div className="p-5">
                    <div className="flex items-center gap-2.5 mb-4">
                      <span className="text-[10px] font-sans font-semibold text-gold uppercase tracking-wider px-2 py-0.5 rounded bg-gold/10">Class</span>
                      <span className="text-body-sm font-sans text-charcoal/40">•</span>
                      <h3 className="text-heading-sm font-serif text-maroon leading-tight">{section.name}</h3>
                    </div>

                    <div className="flex items-center gap-4 mb-4 pb-4 border-b border-cream-border">
                      <div className="w-20 h-28 rounded-lg overflow-hidden bg-charcoal/5 ring-2 ring-gold/20 flex-shrink-0">
                        {teacher?.imageUrl ? (
                          <img src={teacher.imageUrl} alt={teacher.name} className="w-full h-full object-cover object-center" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-charcoal to-charcoal-mid">
                            <span className="text-lg font-serif font-bold text-white/30">
                              {section.classTeacher.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-base font-sans font-semibold text-charcoal leading-snug">{section.classTeacher}</p>
                        <p className="text-xs font-sans text-charcoal/50 mt-0.5">Class Teacher</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center">
                        <p className="text-label-sm font-sans font-semibold text-charcoal">{section.roomNo}</p>
                        <p className="text-[10px] font-sans text-charcoal/40 mt-0.5">Room No</p>
                      </div>
                      <div className="text-center border-x border-cream-border">
                        <p className="text-label-sm font-sans font-semibold text-charcoal">{section.strength}</p>
                        <p className="text-[10px] font-sans text-charcoal/40 mt-0.5">Students</p>
                      </div>
                      <div className="text-center">
                        <p className="text-label-sm font-sans font-semibold text-charcoal">{section.floor || '—'}</p>
                        <p className="text-[10px] font-sans text-charcoal/40 mt-0.5">Floor</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
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
