import { motion } from 'framer-motion'
import { getMotionVariants, fadeInUp, viewportLazy } from '../lib/animations'
import intelLogo from '../assets/images/intel-header-logo.svg'

const providers = [
  { name: 'Infosys Springboard', logo: 'https://infyspringboard.onwingspan.com/web/assets/images/infosysheadstart/app_logos/landing-new.png', bg: '' },
  { name: 'Coursera', logo: 'data:image/png;base64,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', bg: '' },
  { name: 'Intel', logo: intelLogo, bg: '' },
  { name: 'L&T EduTech', logo: 'https://lntedutech.com/wp-content/uploads/2025/12/white_logo_2026.png', bg: 'bg-[#003366]' },
]

export function CertificationsPage() {
  return (
    <div className="min-h-screen bg-cream pt-nav-h">
      <div className="relative bg-gradient-to-r from-maroon-dark via-maroon to-maroon/90 border-b border-gold/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,160,23,0.08),transparent_60%)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-10 lg:py-14">
          <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-1">Student Support</p>
          <h1 className="text-display-sm font-serif text-cream leading-tight">Certifications</h1>
          <p className="text-body-sm text-cream/60 font-sans mt-2 max-w-xl">
            Professional certification programmes from leading industry partners.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-8 lg:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {providers.map((p, i) => (
            <motion.div
              key={p.name}
              variants={getMotionVariants(fadeInUp)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportLazy}
              transition={{ delay: i * 0.08 }}
              className="group bg-white border border-cream-border rounded-card-lg shadow-card-white p-card-p flex flex-col items-center text-center transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 cursor-default"
            >
              <div className={`w-24 h-24 rounded-card ${p.bg || 'bg-white'} border border-cream-border flex items-center justify-center p-3 mb-4 transition-all duration-300 group-hover:border-gold/30`}>
                <img src={p.logo} alt={p.name} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-body font-sans font-semibold text-charcoal mb-2">{p.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CertificationsPage
