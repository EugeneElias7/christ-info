import { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { wings } from '../data/samagra'
import { getMotionVariants, fadeInUp, viewportLazy } from '../lib/animations'

import samagraLogo from '../assets/images/samagra logo.png'
import techRevampImg from '../assets/images/Tech Revamp.png'
import vaultVortexImg from '../assets/images/Vault Vortex.png'
import shieldImg from '../assets/images/SHIELD.png'
import vizerionImg from '../assets/images/Vizerion.png'
import offTopicImg from '../assets/images/OF(F) Topic.png'
import cscSocImg from '../assets/images/CSC SOC.png'
import wistImg from '../assets/images/WIST.png'

const wingInfo: Record<string, { img: string; description: string }> = {
  'vault-vortex': { img: vaultVortexImg, description: 'Fin-tech innovation hub — exploring blockchain, DeFi, and financial technologies.' },
  shield: { img: shieldImg, description: 'Defend. Detect. Disrupt. — cybersecurity club focused on ethical hacking, CTFs, and security research.' },
  vizerion: { img: vizerionImg, description: 'E Sports, redefined — competitive gaming, community tournaments, and fostering the next generation of esports talent.' },
  'off-topic': { img: offTopicImg, description: 'Where ideas roam free — creative, quirky, and unconventional tech explorations.' },
  'csc-soc': { img: cscSocImg, description: 'Code. Connect. Collaborate. — the core computer science community for peer learning and projects.' },
  wist: { img: wistImg, description: 'Empowering women in tech — Women in Software & Technology fostering inclusion and growth.' },
  'tech-revamp': { img: techRevampImg, description: 'Driving technological innovation and digital transformation across the department.' },
}

const allWings = [
  ...wings,
  { id: 'tech-revamp' as const, name: 'Tech Revamp', domain: 'Tech Innovation', tagline: 'Driving digital transformation', icon: 'Zap' },
]

export function SamagraPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-cream pt-nav-h">
      <div className="relative bg-gradient-to-r from-maroon-dark via-maroon to-maroon/90 border-b border-gold/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,160,23,0.08),transparent_60%)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-10 lg:py-14">
          <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-1">Student Community</p>
          <div className="flex items-center gap-3 sm:gap-4 mb-2">
            <img
              src={samagraLogo}
              alt="SAMAGRA"
              className="h-10 sm:h-14 w-auto object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <p className="text-body-sm text-cream/60 font-sans mt-2 max-w-lg">
            Seven wings, one vision — a student innovation ecosystem under the Computer Science Department.
            <a
              href="https://www.instagram.com/samagra_cs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 ml-2 text-cream/50 hover:text-gold transition-colors duration-250 align-middle"
              aria-label="SAMAGRA on Instagram"
            >
              <Instagram size={16} strokeWidth={1.5} />
            </a>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-8 lg:py-10">
        {/* SAMAGRA centered with maroon backdrop */}
        <div className="flex flex-col items-center mb-10">
          <a
            href="https://www.instagram.com/samagra_cs/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-maroon rounded-card-lg px-6 sm:px-8 py-4 sm:py-5 shadow-card transition-all duration-700 ease-out hover:shadow-card-hover hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <img
              src={samagraLogo}
              alt="SAMAGRA"
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </a>
        </div>

        {/* Wings grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 lg:gap-8">
          {allWings.map((wing, i) => {
            const info = wingInfo[wing.id]
            const isHovered = hoveredId === wing.id
            return (
              <motion.div
                key={wing.id}
                variants={getMotionVariants(fadeInUp)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportLazy}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center text-center"
                onMouseEnter={() => setHoveredId(wing.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden ring-2 ring-gold/30 shadow-[0_4px_16px_-4px_rgba(212,160,23,0.2)] transition-all duration-700 ease-out"
                  style={{ transform: isHovered ? 'scale(1.08)' : 'scale(1)' }}
                >
                  <img
                    src={info.img}
                    alt={wing.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-maroon/30 transition-opacity duration-700 ease-out"
                    style={{ opacity: isHovered ? 1 : 0 }}
                  />
                </div>
                <h3 className="text-sm font-serif font-bold text-maroon mt-2 leading-tight">{wing.name}</h3>
                <p className="text-[10px] font-sans text-charcoal/50 leading-tight">{wing.domain}</p>
                <div className="overflow-hidden pt-1">
                  <p className="text-xs font-sans text-charcoal/60 leading-relaxed transition-all duration-700 ease-out"
                    style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? 'translateY(0)' : 'translateY(4px)' }}
                  >
                    {info.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom info */}
        <div className="mt-10 text-center border-t border-cream-border pt-8">
          <p className="text-label-sm font-sans text-charcoal/40">
            SAMAGRA — The official student community of the Department of Computer Science
          </p>
        </div>
      </div>
    </div>
  )
}

export default SamagraPage
