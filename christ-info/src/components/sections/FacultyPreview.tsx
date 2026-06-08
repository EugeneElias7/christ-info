import { motion } from 'framer-motion';
import { Linkedin, Mail, ExternalLink, ClipboardList } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SectionWrapper } from '../ui/SectionWrapper';
import { getMotionVariants, fadeInUp, staggerContainer, viewportLazy } from '../../lib/animations';
import { facultyOnly } from '../../data/leadership';

function FacultyCard({ faculty }: { faculty: typeof facultyOnly[0] }) {
  return (
    <motion.a
      href={faculty.profileUrl || undefined}
      target="_blank"
      rel="noopener noreferrer"
      variants={getMotionVariants(fadeInUp)}
      className="group block bg-white border border-cream-border rounded-card-lg shadow-card-white overflow-hidden cursor-pointer transition-all duration-350 ease-smooth hover:border-gold/40 hover:shadow-card-hover hover:-translate-y-1.5"
    >
      {/* Image area */}
      <div className="relative overflow-hidden">
        {faculty.imageUrl ? (
          <img
            src={faculty.imageUrl}
            alt={faculty.name}
            className="aspect-[4/5] w-full object-cover transition-transform duration-350 ease-smooth group-hover:scale-105"
          />
        ) : (
          <div className="aspect-[4/5] bg-gradient-to-br from-charcoal via-charcoal-mid to-charcoal/90 flex items-center justify-center transition-transform duration-350 ease-smooth group-hover:scale-105">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.06),transparent_60%)]" />
            <span className="text-2xl font-serif font-bold text-white/10 tracking-wider select-none">{faculty.imagePlaceholder}</span>
          </div>
        )}

        {/* Maroon overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-maroon/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Gold border */}
        <div className="absolute inset-0 ring-[2px] ring-transparent group-hover:ring-gold/40 rounded-[inherit] transition-all duration-350 pointer-events-none" />

        {/* CTA overlay */}
        <div className={[
          'absolute inset-0 flex items-center justify-center',
          'opacity-0 group-hover:opacity-100 transition-opacity duration-300',
        ].join(' ')}>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-card bg-gold text-maroon-dark text-[10px] font-sans font-semibold shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Profile <ExternalLink size={10} strokeWidth={1.5} />
          </span>
        </div>
      </div>

      {/* Details */}
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

        <div className="flex items-center gap-1.5 mt-2.5 pt-2.5 border-t border-cream-border">
          {faculty.linkedin && (
            <a
              href={faculty.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 px-2 py-1 rounded-[4px] bg-blue-600 text-white text-[9px] font-sans font-medium hover:bg-blue-700 transition-colors"
              aria-label={`${faculty.name} on LinkedIn`}
            >
              <Linkedin size={10} strokeWidth={1.5} /> in
            </a>
          )}
          {faculty.emailLink && (
            <a
              href={faculty.emailLink}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 px-2 py-1 rounded-[4px] bg-gold/10 text-gold/70 text-[9px] font-sans font-medium hover:bg-gold hover:text-maroon-dark transition-all"
              aria-label={`Email ${faculty.name}`}
            >
              <Mail size={10} strokeWidth={1.5} /> @
            </a>
          )}
        </div>
      </div>
    </motion.a>
  );
}

export function FacultyPreview() {
  const navigate = useNavigate();
  const containerVariants = getMotionVariants(staggerContainer);
  const previewFaculty = facultyOnly.slice(0, 8);

  return (
    <SectionWrapper id="faculty-preview" ariaLabel="Faculty Preview" background="cream" innerClassName="!py-section-y-sm lg:!py-section-y">
      <div className="flex items-end justify-between mb-6 lg:mb-8">
        <div>
          <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-2">Our Team</p>
          <h2 className="text-display-sm font-serif text-maroon">Department Faculty</h2>
        </div>
        <button
          onClick={() => navigate('/faculty')}
          className="hidden sm:flex items-center gap-1.5 text-label-sm font-sans text-gold hover:text-gold-light transition-colors duration-250"
        >
          View All Faculty &rarr;
        </button>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportLazy}
      >
        <div className="hidden lg:grid grid-cols-4 gap-3">
          {previewFaculty.slice(0, 8).map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>

        <div className="hidden sm:grid lg:hidden grid-cols-3 gap-3">
          {previewFaculty.slice(0, 6).map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>

        <div className="grid sm:hidden grid-cols-2 gap-3">
          {previewFaculty.slice(0, 4).map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>

        <button
          onClick={() => navigate('/faculty')}
          className="sm:hidden w-full mt-3 py-3 rounded-card border border-dashed border-cream-border text-label-sm font-sans text-charcoal/40 hover:text-gold hover:border-gold/30 transition-all duration-250"
        >
          View All Faculty &rarr;
        </button>
      </motion.div>
    </SectionWrapper>
  );
}

export default FacultyPreview;
