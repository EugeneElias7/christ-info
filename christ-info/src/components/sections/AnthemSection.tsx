import { motion } from 'framer-motion'
import { universityAnthem } from '../../data/about'
import { SectionWrapper } from '../ui/SectionWrapper'
import { getMotionVariants, fadeInUp, viewportLazy } from '../../lib/animations'

export function AnthemSection() {
  return (
    <SectionWrapper id="anthem" background="cream-muted" ariaLabel="University Anthem">
      <motion.div
        variants={getMotionVariants(fadeInUp)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportLazy}
        className="text-center mb-8"
      >
        <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-2">University Anthem</p>
        <h2 className="text-display-sm font-serif text-maroon">{universityAnthem.title}</h2>
      </motion.div>

      <motion.div
        variants={getMotionVariants(fadeInUp)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportLazy}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start max-w-5xl mx-auto"
      >
        <div className="bg-white border border-cream-border rounded-card-lg shadow-card-white overflow-hidden">
          <video
            controls
            poster={universityAnthem.videoPoster}
            className="w-full"
          >
            <source src={universityAnthem.videoSrc} type="video/mp4" />
          </video>
        </div>

        <div className="bg-white border border-cream-border rounded-card-lg shadow-card-white overflow-hidden">
          <div className="p-card-p max-h-[320px] overflow-y-auto scrollbar-thin scrollbar-thumb-gold/20 scrollbar-track-transparent">
            <div className="space-y-4">
              {universityAnthem.lyrics.map((stanza, i) => (
                <p key={i} className="text-body-sm font-sans text-charcoal/70 leading-relaxed italic whitespace-pre-line">{stanza}</p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
