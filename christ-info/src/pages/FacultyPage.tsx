import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Linkedin, Mail, ExternalLink, ClipboardList, MapPin, FileText, GraduationCap } from 'lucide-react'
import { facultyOnly, leadershipTeam } from '../data/leadership'
import { getMotionVariants, fadeInUp, staggerContainer } from '../lib/animations'
import { EmailPopup } from '../components/ui/EmailPopup'
import dayanaImage from '../assets/images/dayana david.png'

const filters = ['All', 'Professors', 'Associate Professors', 'Assistant Professors', 'Academic Support'] as const

function FacultyCard({ faculty }: { faculty: typeof facultyOnly[0] }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.a
      href={faculty.profileUrl || undefined}
      target="_blank"
      rel="noopener noreferrer"
      variants={getMotionVariants(fadeInUp)}
      className="group block bg-white border border-cream-border rounded-card-lg shadow-card-white overflow-hidden cursor-pointer transition-all duration-350 ease-smooth hover:border-gold/40 hover:shadow-card-hover hover:-translate-y-1.5"
    >
      <div className="relative overflow-hidden">
        {(() => {
          const src = faculty.name === 'Dayana David' ? dayanaImage : faculty.imageUrl
          return src && !imgError
            ? <img src={src} alt={faculty.name} className="aspect-[4/5] w-full object-cover transition-transform duration-350 ease-smooth group-hover:scale-105" loading="lazy" onError={() => setImgError(true)} />
            : <div className="aspect-[4/5] bg-gradient-to-br from-charcoal via-charcoal-mid to-charcoal/90 flex items-center justify-center transition-transform duration-350 ease-smooth group-hover:scale-105"><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.06),transparent_60%)]" /><span className="text-2xl font-serif font-bold text-white/10 tracking-wider select-none">{faculty.imagePlaceholder}</span></div>
        })()}

        <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-maroon/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 ring-[2px] ring-transparent group-hover:ring-gold/40 rounded-[inherit] transition-all duration-350 pointer-events-none" />

        <div className={[
          'absolute inset-0 flex items-center justify-center',
          'opacity-0 group-hover:opacity-100 transition-opacity duration-300',
        ].join(' ')}>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-card bg-gold text-maroon-dark text-[10px] font-sans font-semibold shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Profile <ExternalLink size={10} strokeWidth={1.5} />
          </span>
        </div>
      </div>

      <div className="p-2.5">
        <p className="text-xs font-sans font-semibold text-charcoal leading-snug truncate">{faculty.name}</p>
        <p className="text-[10px] font-sans text-charcoal/50 truncate mt-0.5">{faculty.designation}</p>

        {faculty.note && (
          <div className="mt-2 pt-2 border-t border-dashed border-gold/20">
            <div className="flex items-start gap-1.5">
              <ClipboardList size={11} strokeWidth={1.5} className="text-gold/60 mt-0.5 shrink-0" />
              <p className="text-[9px] font-sans text-charcoal/50 leading-relaxed">{faculty.note}</p>
            </div>
          </div>
        )}

        {faculty.location && (
          <div className="mt-2 pt-2 border-t border-dashed border-gold/20">
            <div className="flex items-start gap-1.5">
              <MapPin size={13} strokeWidth={1.5} className="text-gold/60 mt-0.5 shrink-0" />
              <p className="text-[11px] font-sans text-charcoal/60 leading-relaxed">{faculty.location}</p>
            </div>
          </div>
        )}

              <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-cream-border">
                {faculty.linkedin && (
                  <a
                    href={faculty.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded bg-blue-600 text-white text-[10px] font-sans font-medium leading-none hover:bg-blue-700 transition-colors"
                    aria-label={`${faculty.name} on LinkedIn`}
                  >
                    <Linkedin size={10} strokeWidth={1.5} /> LinkedIn
                  </a>
                )}
                {faculty.email && (
                  <EmailPopup email={faculty.email}>
                    <Mail size={10} strokeWidth={1.5} />
                  </EmailPopup>
                )}
              </div>
      </div>
    </motion.a>
  )
}

function LeadershipCard({ leader }: { leader: typeof leadershipTeam[0] }) {
  return (
    <motion.a
      href={leader.profileUrl || undefined}
      target="_blank"
      rel="noopener noreferrer"
      variants={getMotionVariants(fadeInUp)}
      className="group block bg-white border border-cream-border rounded-card-lg shadow-card-white overflow-hidden cursor-pointer transition-all duration-400 ease-smooth hover:border-gold/50 hover:shadow-[0_8px_32px_-4px_rgba(212,160,23,0.15)] hover:-translate-y-2.5"
    >
      {/* Gold top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent z-10" />

      {/* Portrait frame */}
      <div className="px-5 pt-6 pb-2 bg-gradient-to-b from-cream to-cream/50">
        <div className="relative overflow-hidden rounded-lg shadow-[0_4px_20px_-4px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
          {leader.imageUrl ? (
            <img
              src={leader.imageUrl}
              alt={leader.name}
              className="aspect-[4/5] w-full object-cover transition-transform duration-400 ease-smooth group-hover:scale-105"
            />
          ) : (
            <div className="aspect-[4/5] bg-gradient-to-br from-charcoal via-charcoal-mid to-charcoal/90 flex items-center justify-center transition-transform duration-400 ease-smooth group-hover:scale-105">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.06),transparent_60%)]" />
              <span className="text-4xl font-serif font-bold text-white/10 tracking-wider select-none">{leader.imagePlaceholder}</span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-maroon/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 ring-[2px] ring-inset ring-transparent group-hover:ring-gold/40 rounded-[inherit] transition-all duration-400 pointer-events-none" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="flex items-center gap-2 px-4 py-2 rounded-card bg-gold text-maroon-dark text-label-sm font-sans font-semibold shadow-lg translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
              View CHRIST Profile <ExternalLink size={14} strokeWidth={1.5} />
            </span>
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="px-5 pb-5 pt-3 relative">
        <div className="absolute left-0 top-3 bottom-5 w-[2px] bg-gold/40 group-hover:bg-gold/80 transition-colors duration-300" />

        <h3 className="font-serif text-body-lg font-semibold text-maroon group-hover:text-gold transition-colors duration-300 leading-snug">
          {leader.name}
        </h3>
        <p className="text-label-sm font-sans text-gold/80 group-hover:text-gold font-medium tracking-tight uppercase mt-0.5">
          {leader.designation}
        </p>

        <div className="w-8 h-px bg-gold/20 mt-3 mb-3 transition-all duration-300 group-hover:w-12" />

        <div className="flex items-center gap-2">
          {leader.linkedin && (
            <a
              href={leader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-blue-600 text-white text-[10px] font-sans font-medium leading-none hover:bg-blue-700 transition-colors"
              aria-label={`${leader.name} on LinkedIn`}
            >
              <Linkedin size={10} strokeWidth={1.5} /> LinkedIn
            </a>
          )}
          {leader.email && (
            <EmailPopup email={leader.email}>
              <Mail size={10} strokeWidth={1.5} />
            </EmailPopup>
          )}
        </div>
      </div>
    </motion.a>
  )
}

export function FacultyPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const filtered = facultyOnly.filter((l) => {
    const matchesSearch = l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.title.toLowerCase().includes(searchQuery.toLowerCase())
    if (activeFilter === 'All') return matchesSearch
    if (activeFilter === 'Professors') return matchesSearch && l.title === 'Professor'
    if (activeFilter === 'Associate Professors') return matchesSearch && l.title === 'Associate Professor'
    if (activeFilter === 'Assistant Professors') return matchesSearch && l.title === 'Assistant Professor'
    if (activeFilter === 'Academic Support') return matchesSearch && l.title.toLowerCase().includes('academic support')
    return matchesSearch
  })

  const containerVariants = getMotionVariants(staggerContainer)

  return (
    <div className="min-h-screen bg-cream pt-nav-h">
      <div className="relative bg-gradient-to-r from-maroon-dark via-maroon to-maroon/90 border-b border-gold/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,160,23,0.08),transparent_60%)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-10 lg:py-14">
          <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-1">Department</p>
          <h1 className="text-display-sm font-serif text-cream leading-tight">Our Faculty</h1>
          <p className="text-body-sm text-cream/60 font-sans mt-2 max-w-lg">
            Distinguished educators, researchers, and mentors shaping future technologists.
          </p>
        </div>
      </div>

      <div className="sticky top-nav-h z-10 bg-cream/95 backdrop-blur-sm border-b border-cream-border">
        <div className="mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-3 relative">
          <div className="relative w-full sm:w-64 mb-2 sm:mb-0 sm:absolute sm:right-4 sm:top-3">
            <Search size={14} strokeWidth={1.5} className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/30" />
            <input
              type="text"
              placeholder="Search faculty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-card bg-white border border-cream-border text-sm font-sans text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold/50 transition-colors"
            />
          </div>

          <div className="relative sm:pr-[18rem]">
            {/* Fade gradient indicator — only visible on mobile when content overflows */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 z-[1] bg-gradient-to-l from-cream via-cream/90 to-transparent sm:hidden" />

            <div
              className="flex overflow-x-auto gap-1.5 pt-1 sm:pt-0 scroll-smooth whitespace-nowrap"
              style={{
                scrollbarWidth: 'thin',
                WebkitOverflowScrolling: 'touch',
                msOverflowStyle: '-ms-autohiding-scrollbar',
              }}
            >
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-3 py-1.5 rounded-card text-label-sm font-sans font-medium whitespace-nowrap transition-all duration-250 flex-shrink-0 snap-start ${
                    activeFilter === f
                      ? 'bg-maroon text-cream shadow-sm'
                      : 'text-charcoal/50 hover:text-maroon hover:bg-maroon/5'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Custom thin scrollbar style for webkit */}
            <style>{`
              .sticky .overflow-x-auto::-webkit-scrollbar {
                height: 3px;
              }
              .sticky .overflow-x-auto::-webkit-scrollbar-track {
                background: transparent;
              }
              .sticky .overflow-x-auto::-webkit-scrollbar-thumb {
                background: rgba(212, 160, 23, 0.25);
                border-radius: 4px;
              }
            `}</style>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-8 lg:py-10">
        {/* Leadership */}
        {activeFilter === 'All' && !searchQuery && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-10"
          >
            <h2 className="text-heading font-serif text-maroon mb-4">Leadership</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {leadershipTeam.map((leader) => (
                <LeadershipCard key={leader.id} leader={leader} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Faculty Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {searchQuery ? (
            <p className="text-body-sm font-sans text-charcoal/50 mb-4">
              {filtered.length} result{filtered.length !== 1 ? 's' : ''} for "{searchQuery}"
            </p>
          ) : activeFilter !== 'All' ? (
            <h2 className="text-heading font-serif text-maroon mb-4 capitalize">{activeFilter}</h2>
          ) : null}

          {!searchQuery && activeFilter === 'All' && (
            <h2 className="text-heading font-serif text-maroon mb-4">All Faculty</h2>
          )}

          {activeFilter === 'Academic Support' && !searchQuery ? (
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="w-[190px] flex-shrink-0">
                {filtered.map((faculty) => (
                  <FacultyCard key={faculty.id} faculty={faculty} />
                ))}
              </div>
              <div className="flex-1 min-w-0">
                <div className="bg-white border border-cream-border rounded-card-lg shadow-card-white overflow-hidden">
                  <div className="h-[3px] bg-gradient-to-r from-gold/60 via-gold to-gold/60" />
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[9px] font-sans font-semibold text-gold uppercase tracking-wider px-2 py-0.5 rounded bg-gold/10">Forms & Services</span>
                      <FileText size={11} strokeWidth={1.5} className="text-gold/60" />
                    </div>
                    <div className="space-y-2">
                      {[
                        { color: 'bg-yellow-400', label: 'Yellow Forms', desc: 'Claim attendance for ECAs, Events & Workshops' },
                        { color: 'bg-blue-500', label: 'Blue Forms', desc: 'Claim medical leave with genuine prescription' },
                        { color: 'bg-pink-400', label: 'Pink Forms', desc: 'Claim attendance while sitting for placements' },
                      ].map((f) => (
                        <div key={f.label} className="flex items-start gap-2.5 p-2.5 rounded-card-lg border border-cream-border bg-cream/50">
                          <div className={`w-6 h-6 rounded ${f.color} bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <div className={`w-3 h-3 rounded-full ${f.color}`} />
                          </div>
                          <div>
                            <p className="text-[11px] font-serif font-semibold text-maroon">{f.label}</p>
                            <p className="text-[9px] font-sans text-charcoal/60">{f.desc}</p>
                          </div>
                        </div>
                      ))}
                      <div className="flex items-start gap-2.5 p-2.5 rounded-card-lg border border-cream-border bg-cream/50">
                        <div className="w-6 h-6 rounded bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <GraduationCap size={12} strokeWidth={1.5} className="text-gold" />
                        </div>
                        <div>
                          <p className="text-[11px] font-serif font-semibold text-maroon">Bonafide Certificates</p>
                          <p className="text-[9px] font-sans text-charcoal/60">Also available — contact the office</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 p-2.5 rounded-card-lg bg-gold/5 border border-gold/20">
                      <p className="text-[11px] font-sans text-charcoal/60">📍 Room 201, Block B</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5">
              {filtered.map((faculty) => (
                <FacultyCard key={faculty.id} faculty={faculty} />
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <p className="text-center text-charcoal/40 font-sans py-12">No faculty found matching your criteria.</p>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default FacultyPage
