import { motion } from 'framer-motion';
import { getMotionVariants, fadeInUp, staggerContainerFast, viewportLazy } from '../../lib/animations';
import { stats } from '../../data/stats';

export function StatsBar() {
  const containerVariant = getMotionVariants(staggerContainerFast);
  const itemVariant = getMotionVariants(fadeInUp);

  return (
    <section id="stats" aria-label="Institutional rankings and statistics">
      <div className="bg-gradient-to-r from-maroon-deep via-maroon to-maroon-deep border-t border-gold/10 border-b border-gold/5">
        <div className="mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-10 lg:py-14">
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportLazy}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                variants={itemVariant}
                className="flex flex-col items-center text-center px-2 py-3"
              >
                <span className="text-2xl lg:text-3xl font-serif font-bold text-gold leading-none mb-1">{stat.value}</span>
                <span className="text-xs font-sans font-semibold text-cream/80 tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default StatsBar;
