import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { getMotionVariants, fadeInUp, viewportLazy } from '../../lib/animations';

const rules = [
  { title: 'Academic Integrity', description: 'All students must adhere to the highest standards of academic honesty. Plagiarism, cheating, and any form of academic misconduct will result in disciplinary action as per university policy.' },
  { title: 'Attendance Requirement', description: 'A minimum of 85% attendance in each course is mandatory for appearing in semester examinations. Shortfall may result in detention as per university regulations.' },
  { title: 'Code of Conduct', description: 'Students are expected to maintain decorum and discipline on campus. Respect for faculty, staff, and fellow students is paramount at all times.' },
  { title: 'Laboratory Guidelines', description: 'Computer labs are to be used exclusively for academic purposes. Eating, drinking, and unauthorized software installation are strictly prohibited.' },
  { title: 'Examination Rules', description: 'Students must carry valid ID cards to all examinations. Use of electronic gadgets, unauthorized materials, or any form of malpractice will lead to strict action.' },
  { title: 'Dress Code', description: 'Students are expected to dress modestly and professionally on campus. The university reserves the right to enforce appropriate dress standards.' },
];

export function RulesSection() {
  return (
    <SectionWrapper id="rules" background="cream-muted" ariaLabel="Rules and Regulations">
      <div className="text-center mb-8">
        <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-2">University Policy</p>
        <h2 className="text-display-sm font-serif text-maroon">Rules &amp; Regulations</h2>
        <p className="text-body-sm text-charcoal/60 font-sans mt-2 max-w-lg mx-auto">
          Guidelines to maintain academic excellence and campus harmony.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rules.map((rule, i) => (
          <motion.div
            key={rule.title}
            variants={getMotionVariants(fadeInUp)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportLazy}
            transition={{ delay: i * 0.05 }}
            className="bg-white border border-cream-border rounded-card px-5 py-4"
          >
            <h3 className="text-sm font-sans font-bold text-maroon mb-1">{rule.title}</h3>
            <p className="text-xs font-sans text-charcoal/60 leading-relaxed">{rule.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default RulesSection;
