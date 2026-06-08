import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { getMotionVariants, fadeInUp, staggerContainer, viewportLazy } from '../../lib/animations';
import { wings } from '../../data/samagra';

const wingEmojis: Record<string, string> = {
  'vault-vortex': '⚡',
  shield: '🛡️',
  vizerion: '🧠',
  'off-topic': '✨',
  'csc-soc': '💻',
  wist: '👩‍💻',
};

export function SamagraEcosystem() {
  const containerVariants = getMotionVariants(staggerContainer);

  return (
    <SectionWrapper id="samagra-club" background="cream" ariaLabel="SAMAGRA Ecosystem">
      <div className="text-center mb-10 lg:mb-12">
        <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-2">Student Community</p>
        <h2 className="text-display-sm font-serif text-maroon">SAMAGRA</h2>
        <p className="text-body text-charcoal/60 font-sans mt-2 max-w-md mx-auto">
          Six wings, one vision — a student innovation ecosystem
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportLazy}
        className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
      >
        {wings.map((wing, i) => {
          const emoji = wingEmojis[wing.id] || '🚀';
          return (
            <motion.div
              key={wing.id}
              variants={getMotionVariants(fadeInUp)}
              transition={{ delay: i * 0.06 }}
              className="group relative bg-white border border-cream-border rounded-card-lg px-5 py-6 text-center transition-all duration-350 ease-smooth hover:bg-gradient-to-br hover:from-maroon hover:to-maroon-dark hover:border-gold hover:shadow-card-hover hover:-translate-y-1.5"
            >
              <span className="block text-3xl mb-3 transition-transform duration-350 group-hover:scale-110" aria-hidden="true">{emoji}</span>
              <h3 className="text-[15px] font-serif font-bold text-maroon group-hover:text-gold transition-colors duration-350">{wing.name}</h3>
              <p className="text-xs font-sans text-charcoal/50 group-hover:text-cream/70 mt-1 transition-colors duration-350">{wing.domain}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}

export default SamagraEcosystem;
