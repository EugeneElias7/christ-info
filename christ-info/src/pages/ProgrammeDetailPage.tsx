import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, GraduationCap, Mail, BookOpen } from 'lucide-react'
import { programmes } from '../data/programmes'
import type { HighlightGroup } from '../data/programmes'
import { leaders } from '../data/leadership'
import { getMotionVariants, fadeInUp, staggerContainer } from '../lib/animations'
import { EmailPopup } from '../components/ui/EmailPopup'

function HighlightsSidebar({ groups }: { groups: HighlightGroup[] }) {
  return (
    <motion.div
      variants={getMotionVariants(fadeInUp)}
      className="bg-white border border-cream-border rounded-card-lg shadow-card-white overflow-hidden"
    >
      <div className="h-[3px] bg-gradient-to-r from-gold/60 via-gold to-gold/60" />
      <div className="p-card-p">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
            <GraduationCap size={16} strokeWidth={1.5} className="text-gold" />
          </div>
          <h3 className="text-heading-sm font-serif text-maroon leading-tight">Programme Highlights</h3>
        </div>

        {groups.map((group, gi) => (
          <div key={gi}>
            {gi > 0 && (
              <div className="my-4 border-t border-cream-border" />
            )}

            <p className="text-label-sm font-sans font-semibold text-charcoal mb-3">{group.title}</p>

            <ul className="space-y-2.5">
              {group.items.map((item, ii) => (
                <li key={ii}>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-[7px] flex-shrink-0" />
                    <span className="text-body-sm font-sans text-charcoal/70 leading-relaxed">{item.text}</span>
                  </div>

                  {item.universities && item.universities.length > 0 && (
                    <div className="ml-5 mt-2 space-y-2">
                      {item.universities.map((uni, ui) => (
                        <div key={ui}>
                          <a
                            href={uni.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-1.5 text-body-sm font-sans text-maroon/80 hover:text-gold transition-colors"
                            title="Visit University Website"
                          >
                            <span className="w-2 h-px bg-gold/40 flex-shrink-0" />
                            {uni.name}
                            <ExternalLink size={11} strokeWidth={1.5} className="text-gold/50 group-hover/link:text-gold transition-colors flex-shrink-0" />
                          </a>

                          {uni.subItems && uni.subItems.length > 0 && (
                            <div className="ml-5 mt-1.5 space-y-1">
                              {uni.subItems.map((sub, si) => (
                                <div key={si} className="flex items-center gap-2">
                                  <span className="w-px h-3 bg-gold/20 flex-shrink-0" />
                                  <span className="text-xs font-sans text-charcoal/50">{sub}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export function ProgrammeDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const programme = programmes.find((p) => p.id === id)

  const whatsappLinks: Record<string, string> = {
    mds: 'https://chat.whatsapp.com/FcQuXZ3L0LgBpwXKjAwehH',
    'msc-ai-cs': 'https://chat.whatsapp.com/GLlcZDlXZMCLrB14AZJhWa',
  }

  const whatsappUrl = id ? whatsappLinks[id] : undefined

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
            className="lg:grid lg:grid-cols-4 gap-6"
          >
            <div className="lg:col-span-3">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
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
                          {(() => {
                            const parts = section.name.split(' ');
                            const sectionLetter = parts.length > 1 ? parts[parts.length - 1] : '';
                            const yearNum = parts.length > 1 ? parts[0] : '';
                            const programmeName = parts.length > 2 ? parts.slice(1, parts.length - 1).join(' ') : '';
                            return (
                              <>
                                {yearNum && (
                                  <span className="text-[1.7rem] font-serif font-bold text-maroon leading-none">{yearNum}</span>
                                )}
                                {programmeName && (
                                  <span className="text-heading-sm font-serif font-bold text-maroon leading-none">{programmeName}</span>
                                )}
                                {sectionLetter && (
                                  <span className="text-[1.35rem] font-serif font-bold text-gold leading-none">{sectionLetter}</span>
                                )}
                              </>
                            );
                          })()}
                          {whatsappUrl && (
                            <a
                              href={whatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Join WhatsApp Group"
                              className="ml-auto w-7 h-7 rounded-full bg-[#25D366]/10 flex items-center justify-center hover:bg-[#25D366] group/whatsapp transition-all duration-250 flex-shrink-0"
                            >
                              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#25D366] group-hover/whatsapp:fill-white transition-colors duration-250" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                              </svg>
                            </a>
                          )}
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
                            <p className="text-xs font-sans font-bold text-charcoal/70 mt-1">B Block</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Student Support & Counselling */}
              <motion.div
                variants={getMotionVariants(fadeInUp)}
                transition={{ delay: 0.3 }}
                className="bg-white border border-cream-border rounded-card-lg shadow-card-white overflow-hidden mt-8"
              >
                <div className="h-[3px] bg-gradient-to-r from-gold/60 via-gold to-gold/60" />
                <div className="px-5 py-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-sans font-semibold text-gold uppercase tracking-wider px-2 py-0.5 rounded bg-gold/10">Student Support</span>
                    <BookOpen size={13} strokeWidth={1.5} className="text-gold/60" />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="w-20 h-28 rounded-lg overflow-hidden bg-charcoal/5 ring-2 ring-gold/20 flex-shrink-0 mx-auto sm:mx-0">
                      <img
                        src="https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E5445.jpg"
                        alt="Teja C G"
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0 text-center sm:text-left">
                      <h3 className="text-base font-serif text-maroon leading-tight">Teja C G</h3>
                      <p className="text-[11px] font-sans text-charcoal/50 mt-0.5">Student Counselor</p>
                      <p className="text-[10px] font-sans text-charcoal/40 mt-1">
                        Centre for Counselling &amp; Health Services (CCHS)
                      </p>
                      <div className="flex items-center justify-center sm:justify-start gap-2 mt-1.5">
                        <EmailPopup email="teja.cg@christuniversity.in">
                          <Mail size={11} strokeWidth={1.5} />
                          <span>teja.cg@christuniversity.in</span>
                        </EmailPopup>
                      </div>
                      <p className="text-[10px] font-sans text-charcoal/40 mt-1.5 flex items-center justify-center sm:justify-start gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold/60 flex-shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        CCHS, Second Floor, Block A
                      </p>
                      <p className="text-body-sm font-sans text-charcoal/60 leading-relaxed mt-2 border-t border-cream-border pt-2">
                        Students can approach the Centre for Counselling &amp; Health Services (CCHS) for academic, emotional, personal, and wellness-related support. The counselling service promotes student well-being, personal growth, and a healthy learning environment.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {programme.highlights && programme.highlights.length > 0 && (
              <div className="mt-6 lg:mt-0 lg:sticky lg:top-[calc(3.5rem+2rem)] lg:self-start">
                <HighlightsSidebar groups={programme.highlights} />
              </div>
            )}
          </motion.div>
        </div>
      )}

      {programme.sections.length === 0 && (
        <div className="mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-8 lg:py-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
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
                Doctoral research in Computer Science under expert supervision. Scholars explore cutting-edge topics across artificial intelligence, data science, cybersecurity, and emerging technologies.
              </p>
            </motion.div>

            <div className="lg:grid lg:grid-cols-5 gap-6 items-start">
              <div className="lg:col-span-2">
                {/* PhD Coordinator */}
                <motion.div
                  variants={getMotionVariants(fadeInUp)}
                  transition={{ delay: 0.15 }}
                  className="bg-white border border-cream-border rounded-card-lg shadow-card-white overflow-hidden"
                >
                  <div className="h-[3px] bg-gradient-to-r from-gold/60 via-gold to-gold/60" />
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[10px] font-sans font-semibold text-gold uppercase tracking-wider px-2 py-0.5 rounded bg-gold/10">PhD Coordinator</span>
                      <GraduationCap size={14} strokeWidth={1.5} className="text-gold/60" />
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-28 h-32 rounded-lg overflow-hidden bg-charcoal/5 ring-2 ring-gold/20 mb-3">
                        <img
                          src="https://christuniversity.in/uploads/faculty-image/E6190.jpg"
                          alt="Deepa S"
                          className="w-full h-full object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="text-heading-sm font-serif text-maroon leading-tight">Deepa S</h3>
                      <p className="text-xs font-sans text-charcoal/50 mt-0.5">PhD Coordinator</p>
                      <div className="flex items-center justify-center gap-2 mt-2">
                        <EmailPopup email="deepa.s@christuniversity.in">
                          <Mail size={12} strokeWidth={1.5} />
                          <span>deepa.s@christuniversity.in</span>
                        </EmailPopup>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-3 mt-6 lg:mt-0">
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
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default ProgrammeDetailPage
