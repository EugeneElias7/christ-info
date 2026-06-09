import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { programmes } from '../data/programmes'
import { getMotionVariants, fadeInUp, staggerContainer } from '../lib/animations'

export function ProgrammesPage() {
  const navigate = useNavigate()
  const containerVariants = getMotionVariants(staggerContainer)

  return (
    <div className="min-h-screen bg-cream pt-nav-h">
      <div className="mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-section-y-sm lg:py-section-y">
        <div className="mb-12 lg:mb-16">
          <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-2">Academic Programmes</p>
          <h1 className="text-display-sm font-serif text-maroon">Our Programmes</h1>
          <p className="text-body-sm text-charcoal/60 font-sans mt-2 max-w-lg">
            Explore our undergraduate, postgraduate, and doctoral programmes in Computer Science.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {programmes.map((p, i) => (
            <motion.div
              key={p.id}
              variants={getMotionVariants(fadeInUp)}
              transition={{ delay: i * 0.08 }}
              onClick={() => navigate(`/programmes/${p.id}`)}
              className="group relative bg-white border border-cream-border rounded-card-lg shadow-card overflow-hidden cursor-pointer transition-all duration-350 ease-smooth hover:border-gold/30 hover:shadow-card-hover hover:-translate-y-1 flex flex-col h-full justify-between"
            >
              <div>
                <div className="h-2 bg-gradient-to-r from-maroon via-gold to-maroon shrink-0" />
                <div className="p-card-p flex flex-col">
                  <h2 className="text-heading lg:text-heading-lg font-serif text-maroon">{p.shortName}</h2>
                  <div className="mt-1.5 space-y-0.5">
                    <p className="text-label-sm font-sans text-charcoal/50">{p.duration}</p>
                    {p.durationHons && (
                      <p className="text-label-sm font-sans text-gold/70">{p.durationHons}</p>
                    )}
                  </div>
                  <p className="text-body-sm font-sans text-charcoal/60 leading-relaxed mt-3 line-clamp-4 max-w-prose">{p.description}</p>
                </div>
              </div>
              <div className="px-card-p pb-card-p flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-pill bg-gold/10 text-label-sm font-sans font-semibold text-gold whitespace-nowrap transition-all duration-250 group-hover:bg-gold/20 group-hover:gap-2.5">
                  View Programme <ArrowRight size={12} strokeWidth={1.5} />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default ProgrammesPage
