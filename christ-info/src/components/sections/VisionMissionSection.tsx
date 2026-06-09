import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { visionMission } from '../../data/about'
import { SectionWrapper } from '../ui/SectionWrapper'
import { getMotionVariants, fadeInUp, staggerContainer, viewportLazy } from '../../lib/animations'

export function VisionMissionSection() {
  return (
    <SectionWrapper id="vision-mission" background="cream" ariaLabel="Vision and Mission">
      <motion.div
        variants={getMotionVariants(staggerContainer)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportLazy}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={getMotionVariants(fadeInUp)} className="text-center mb-8">
          <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-2">Our Foundation</p>
          <h2 className="text-display-sm font-serif text-maroon">Vision &amp; Mission</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div
            variants={getMotionVariants(fadeInUp)}
            className="bg-white border border-cream-border rounded-card-lg shadow-card-white p-card-p"
          >
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
            </div>
            <p className="text-[10px] font-sans font-semibold text-gold uppercase tracking-wider mb-1">Our Vision</p>
            <p className="text-body-lg font-sans text-charcoal/70 leading-relaxed italic">
              &ldquo;{visionMission.vision}&rdquo;
            </p>
          </motion.div>

          <motion.div
            variants={getMotionVariants(fadeInUp)}
            transition={{ delay: 0.08 }}
            className="bg-white border border-cream-border rounded-card-lg shadow-card-white p-card-p"
          >
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            <p className="text-[10px] font-sans font-semibold text-gold uppercase tracking-wider mb-1">Our Mission</p>
            <p className="text-body-sm font-sans text-charcoal/70 leading-relaxed">
              {visionMission.mission}
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={getMotionVariants(fadeInUp)}
          transition={{ delay: 0.12 }}
          className="bg-white border border-cream-border rounded-card-lg shadow-card-white p-card-p mb-6"
        >
          <p className="text-[10px] font-sans font-semibold text-maroon uppercase tracking-wider mb-3">Graduate Attributes</p>
          {visionMission.graduateAttributes.split('\n\n').map((para, i) => (
            <p key={i} className="text-body-sm font-sans text-charcoal/60 leading-relaxed mb-4 last:mb-0">
              {para}
            </p>
          ))}
        </motion.div>

        <motion.div
          variants={getMotionVariants(fadeInUp)}
          transition={{ delay: 0.16 }}
          className="text-center"
        >
          <a
            href="https://christuniversity.in/uploads/userfiles/file/GRADUATE%20ATTRIBUTES.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-gold/10 text-gold text-label-sm font-sans font-medium hover:bg-gold hover:text-maroon-dark transition-all duration-250"
          >
            View More <ArrowRight size={14} strokeWidth={1.5} />
          </a>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
