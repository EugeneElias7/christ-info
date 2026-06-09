import { motion } from 'framer-motion'
import { MapPin, Monitor } from 'lucide-react'
import { getMotionVariants, fadeInUp, viewportLazy } from '../lib/animations'

const labImage = 'https://live.staticflickr.com/65535/53284785260_324778aa81_n.jpg'

const labs = [
  { name: 'Lab A', description: 'General-purpose computing lab with workstations for programming, web development, and database management sessions.', location: 'A Block, Second Floor' },
  { name: 'Lab B', description: 'Advanced computing lab equipped for data science, machine learning, and statistical computing.', location: 'A Block, Second Floor' },
  { name: 'Lab C', description: 'General-purpose computing lab with workstations for programming, web development, and database management sessions.', location: 'A Block, Second Floor' },
]

export function LabsPage() {
  return (
    <div className="min-h-screen bg-cream pt-nav-h">
      <div className="relative bg-gradient-to-r from-maroon-dark via-maroon to-maroon/90 border-b border-gold/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,160,23,0.08),transparent_60%)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-10 lg:py-14">
          <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-1">Facilities</p>
          <h1 className="text-display-sm font-serif text-cream leading-tight">Computer Labs</h1>
          <p className="text-body-sm text-cream/60 font-sans mt-2 max-w-xl">
            State-of-the-art computing facilities supporting teaching, research, and innovation.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-8 lg:py-10 space-y-6">
        {/* Overview Image */}
        <motion.div
          variants={getMotionVariants(fadeInUp)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportLazy}
          className="rounded-card-lg overflow-hidden shadow-card-white border border-cream-border"
        >
          <img src={labImage} alt="Computer Lab" className="w-full h-48 sm:h-64 object-cover" />
        </motion.div>

        {labs.map((lab, i) => (
          <motion.div
            key={lab.name}
            variants={getMotionVariants(fadeInUp)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportLazy}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-cream-border rounded-card-lg shadow-card-white overflow-hidden flex flex-col sm:flex-row"
          >
            <div className="w-full sm:w-48 h-40 sm:h-auto bg-gradient-to-br from-charcoal/5 to-maroon/5 flex items-center justify-center flex-shrink-0">
              <Monitor size={48} strokeWidth={1} className="text-gold/30" />
            </div>
            <div className="p-5 flex-1">
              <h3 className="text-heading-sm font-serif text-maroon leading-tight">{lab.name}</h3>
              <p className="text-body-sm font-sans text-charcoal/60 mt-2 leading-relaxed">{lab.description}</p>
              <p className="text-xs font-sans text-charcoal/40 mt-3 flex items-center gap-1">
                <MapPin size={12} strokeWidth={1.5} className="text-gold/60" />
                {lab.location}
              </p>
            </div>
          </motion.div>
        ))}

        {/* METIS Lab - Featured */}
        <motion.div
          variants={getMotionVariants(fadeInUp)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportLazy}
          transition={{ delay: 0.4 }}
          className="bg-white border-2 border-gold/20 rounded-card-lg shadow-card-white overflow-hidden flex flex-col sm:flex-row relative"
        >
          <div className="absolute top-3 left-3">
            <span className="text-[9px] font-sans font-semibold text-gold uppercase tracking-wider px-2 py-0.5 rounded bg-gold/10">Featured Lab</span>
          </div>
          <div className="w-full sm:w-56 aspect-video sm:h-auto flex-shrink-0 overflow-hidden relative bg-maroon/10">
            <img
              src="https://intelcorp.scene7.com/is/image/intelcorp/intel-unnati-overview-page-banner-22-01:1920-1080?wid=480&hei=270"
              alt="Intel Unnati"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <p className="absolute bottom-2 left-2 text-[9px] font-sans font-semibold text-white/80 uppercase tracking-wider">Intel Unnati</p>
          </div>
          <div className="p-5 flex-1">
            <h3 className="text-heading-sm font-serif text-maroon leading-tight">METIS Lab</h3>
            <p className="text-[11px] font-sans text-charcoal/50 mt-0.5">Model-driven Explorative Technologies and Intelligent Solutions</p>
            <p className="text-body-sm font-sans text-charcoal/60 mt-3 leading-relaxed">
              Data-centric AI laboratory established under the Intel Unnati Program. The lab focuses on explorative technologies, intelligent solutions, and model-driven approaches to advance artificial intelligence research and education.
            </p>
            <p className="text-xs font-sans text-charcoal/40 mt-3 flex items-center gap-1">
              <MapPin size={12} strokeWidth={1.5} className="text-gold/60" />
              A Block, Second Floor
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default LabsPage
