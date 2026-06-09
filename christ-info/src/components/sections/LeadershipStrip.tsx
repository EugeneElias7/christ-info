import { motion } from 'framer-motion';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { EmailPopup } from '../ui/EmailPopup';
import { getMotionVariants, fadeInUp, staggerContainer, viewportLazy } from '../../lib/animations';
import { leadershipTeam } from '../../data/leadership';

export function LeadershipStrip() {
  const containerVariants = getMotionVariants(staggerContainer);

  return (
    <SectionWrapper id="faculty" ariaLabel="Department Leadership" background="cream-muted" innerClassName="!py-section-y-sm lg:!py-section-y">
      <div className="mb-8 lg:mb-12">
        <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-2">Leadership</p>
        <h2 className="text-display-sm font-serif text-maroon">Our Leadership</h2>
        <p className="text-body-sm text-charcoal/60 font-sans mt-2 max-w-lg">
          Distinguished leaders guiding the Department of Computer Science.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportLazy}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        {leadershipTeam.map((leader, i) => (
          <motion.div
            key={leader.id}
            variants={getMotionVariants(fadeInUp)}
            transition={{ delay: i * 0.08 }}
            className="group relative bg-white border border-cream-border rounded-card-lg overflow-hidden transition-all duration-400 ease-smooth hover:border-gold/50 hover:shadow-[0_8px_32px_-4px_rgba(212,160,23,0.15)] hover:-translate-y-2.5"
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
                    <span className="text-4xl lg:text-5xl font-serif font-bold text-white/10 tracking-wider select-none">{leader.imagePlaceholder}</span>
                  </div>
                )}

                {/* Maroon overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-maroon/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Gold inner glow ring */}
                <div className="absolute inset-0 ring-[2px] ring-inset ring-transparent group-hover:ring-gold/40 rounded-[inherit] transition-all duration-400 pointer-events-none" />

                {/* CTA overlay */}
                <a
                  href={leader.profileUrl || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="flex items-center gap-2 px-4 py-2 rounded-card bg-gold text-maroon-dark text-label-sm font-sans font-semibold shadow-lg translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    View CHRIST Profile <ExternalLink size={14} strokeWidth={1.5} />
                  </span>
                </a>
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
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

export default LeadershipStrip;
