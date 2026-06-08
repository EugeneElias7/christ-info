import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { getMotionVariants, fadeInUp, staggerContainerFast, viewportLazy } from '../../lib/animations';
import { stats } from '../../data/stats';

export function UniversityExcellence() {
  const containerVariant = getMotionVariants(staggerContainerFast);

  return (
    <SectionWrapper id="stats" background="cream-muted" ariaLabel="University Excellence">
      <div className="text-center mb-8">
        <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-2">Accreditations & Rankings</p>
        <h2 className="text-display-sm font-serif text-maroon">University Excellence</h2>
      </div>

      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={viewportLazy}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.id}
            variants={getMotionVariants(fadeInUp)}
            transition={{ delay: i * 0.05 }}
            className="bg-white border border-cream-border rounded-card-lg shadow-card-white px-5 py-4 flex flex-col justify-center transition-all duration-300 hover:border-gold/30 hover:shadow-card-hover"
          >
            <span className="text-2xl lg:text-3xl font-serif font-bold text-gold leading-none">{stat.value}</span>
            <span className="text-label-sm font-sans text-charcoal/60 mt-1">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

export default UniversityExcellence;
