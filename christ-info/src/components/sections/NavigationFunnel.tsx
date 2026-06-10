import { motion } from 'framer-motion';
import { GraduationCap, FlaskConical, Microscope, Trophy, Calendar, Briefcase, ArrowRight } from 'lucide-react';
import { getMotionVariants, fadeInUp, staggerContainer } from '../../lib/animations';

const csHighlights = [
  { icon: GraduationCap, label: 'Industry-Focused Curriculum' },
  { icon: FlaskConical,  label: 'Cutting-Edge Lab' },
  { icon: Microscope,    label: 'Impactful Research' },
  { icon: Trophy,        label: 'Encouraging Achievements' },
  { icon: Calendar,      label: 'Result-Oriented Events' },
  { icon: Briefcase,     label: 'Support for Placements' },
] as const;

export function NavigationFunnel() {
  const containerVariants = getMotionVariants(staggerContainer);

  return (
    <section id="navigation-funnel" aria-labelledby="funnel-cs-heading" className="bg-cream pt-nav-h">
      <div className="mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-8 lg:py-12">
        <h1 className="sr-only">CHRIST INFO — Department of Computer Science</h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-card-gap"
        >
          {/* Department of Computer Science card */}
          <motion.div variants={getMotionVariants(fadeInUp)} className="md:col-span-2">
            <div className="bg-white border border-cream-border rounded-card-lg shadow-card-white overflow-hidden">
              <div className="p-card-p lg:p-card-p">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6 xl:gap-8">
                  <div className="flex-shrink-0 mb-5 lg:mb-0">
                    <p className="text-label text-gold font-sans tracking-wider uppercase mb-1">Department of</p>
                    <h2 id="funnel-cs-heading" className="text-heading-lg font-serif text-maroon leading-tight mb-1">
                      Computer Science
                    </h2>
                    <p className="text-body-sm font-sans text-charcoal/60 leading-relaxed max-w-xs">
                      Empowering students with technical knowledge, societal commitment, and a pursuit of excellence through the mentorship of dedicated faculty.
                    </p>
                  </div>

                  <div className="hidden lg:block w-px h-20 bg-cream-border flex-shrink-0" />

                  <div className="flex-1 min-w-0 mb-5 lg:mb-0">
                    <div className="flex flex-wrap gap-2">
                      {csHighlights.map((item) => {
                        const Icon = item.icon;
                        return (
                          <div key={item.label} className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-gold/[0.06]">
                            <Icon size={11} strokeWidth={1.5} className="text-gold/70" />
                            <span className="text-[10px] font-sans text-charcoal/60 leading-tight">{item.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex-shrink-0 self-start lg:self-center">
                    <a
                      href="https://christuniversity.in/departments/yeshwanthpur-campus/school-of-sciences/computer-science"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-card bg-gold text-maroon-dark text-label-sm font-sans font-semibold hover:bg-gold-light transition-colors duration-250"
                    >
                      Explore Department <ArrowRight size={14} strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CHRIST University card */}
          <motion.div variants={getMotionVariants(fadeInUp)} className="md:col-span-1">
            <div className="bg-white border border-cream-border rounded-card-lg shadow-card-white overflow-hidden h-full flex flex-col">
              <div className="relative h-48 lg:h-56 overflow-hidden">
                <img
                  src="https://christuniversity.in/uploads/coursecategory/medium/999927713_2026-05-20_10-19-38.webp"
                  alt="CHRIST University"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-card-p flex flex-col flex-1">
                <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-1">University</p>
                <h2 className="text-heading font-serif text-maroon leading-tight mb-1">CHRIST (Deemed to be University) </h2>
                <p className="text-body-sm font-sans text-charcoal/60 flex-1 mb-4">
                  Discover our legacy of excellence, holistic education, and value-based learning since 1969.
                </p>
                <a
                  href="https://christuniversity.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 self-start px-4 py-2 rounded-card bg-transparent border border-gold/30 text-label-sm font-sans font-medium text-gold hover:bg-gold hover:text-maroon-dark transition-all duration-250"
                >
                  Explore CHRIST <ArrowRight size={14} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Yeshwantpur Campus card */}
          <motion.div variants={getMotionVariants(fadeInUp)} className="md:col-span-1">
            <div className="bg-white border border-cream-border rounded-card-lg shadow-card-white overflow-hidden h-full flex flex-col">
              <div className="relative h-48 lg:h-56 overflow-hidden">
                <img
                  src="https://byc.christuniversity.in/images/byc-campus.webp"
                  alt="Yeshwantpur Campus"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-card-p flex flex-col flex-1">
                <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-1">Campus</p>
                <h2 className="text-heading font-serif text-maroon leading-tight mb-1">Banglore Yeshwantpur Campus (BYC)</h2>
                <p className="text-body-sm font-sans text-charcoal/60 flex-1 mb-4">
                  A Joyful and Caring Campus for innovation, collaboration, and cutting-edge technology education.
                </p>
                <a
                  href="https://byc.christuniversity.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 self-start px-4 py-2 rounded-card bg-transparent border border-gold/30 text-label-sm font-sans font-medium text-gold hover:bg-gold hover:text-maroon-dark transition-all duration-250"
                >
                  Explore Campus <ArrowRight size={14} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default NavigationFunnel;
