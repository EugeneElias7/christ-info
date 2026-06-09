import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { visionMission, founderMessage, historyNarrative, history, universityAnthem } from '../data/about'
import { getMotionVariants, fadeInUp, staggerContainer, viewportLazy } from '../lib/animations'
import { scrollToSection } from '../lib/utils'
import chavraImg from '../assets/images/Chavra-Img.png'
import { RulesSection } from '../components/sections/RulesSection'

const tabs = [
  { id: 'vision-mission', label: 'Vision & Mission' },
  { id: 'graduate-attributes', label: 'Graduate Attributes' },
  { id: 'founder', label: 'Founder' },
  { id: 'history', label: 'History' },
  { id: 'anthem', label: 'Anthem' },
  { id: 'rules', label: 'Rules & Regulations' },
]

export function AboutUniversityPage() {
  const [activeTab, setActiveTab] = useState('vision-mission')
  const containerVariants = getMotionVariants(staggerContainer)
  const location = useLocation()

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (tabs.some((t) => t.id === hash)) {
      setActiveTab(hash)
    }
    if (hash && tabs.some((t) => t.id === hash)) {
      requestAnimationFrame(() => {
        scrollToSection(hash, 100)
      })
    }
  }, [location])

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    const el = document.getElementById(tabId)
    if (el) {
      scrollToSection(tabId, 100)
    }
  }

  return (
    <div className="min-h-screen bg-cream pt-nav-h">
      <div className="relative bg-gradient-to-r from-maroon-dark via-maroon to-maroon/90 border-b border-gold/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,160,23,0.08),transparent_60%)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-10 lg:py-14">
          <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-1">About</p>
          <h1 className="text-display-sm font-serif text-cream leading-tight">CHRIST University</h1>
          <p className="text-body-sm text-cream/60 font-sans mt-2 max-w-lg">
            A legacy of excellence in higher education since 1969.
          </p>
        </div>
      </div>

      <div className="sticky top-nav-h z-10 bg-cream/95 backdrop-blur-sm border-b border-cream-border">
        <div className="mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x flex overflow-x-auto gap-1 py-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-4 py-2 rounded-card text-label-sm font-sans font-medium whitespace-nowrap transition-all duration-250 ${
                activeTab === tab.id
                  ? 'bg-maroon text-cream'
                  : 'text-charcoal/50 hover:text-maroon hover:bg-maroon/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Vision & Mission */}
      <section id="vision-mission" className="mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-section-y-sm lg:py-section-y">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportLazy}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={getMotionVariants(fadeInUp)} className="mb-10">
            <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-2">Our Vision</p>
            <h2 className="text-display-sm font-serif text-maroon mb-4">Vision</h2>
            <p className="text-body-lg font-sans text-charcoal/70 leading-relaxed italic border-l-[3px] border-gold pl-5">
              "{visionMission.vision}"
            </p>
          </motion.div>

          <motion.div variants={getMotionVariants(fadeInUp)} className="mb-10">
            <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-2">Our Mission</p>
            <h2 className="text-display-sm font-serif text-maroon mb-4">Mission</h2>
            <p className="text-body font-sans text-charcoal/70 leading-relaxed">
              {visionMission.mission}
            </p>
          </motion.div>

          <motion.div id="graduate-attributes" variants={getMotionVariants(fadeInUp)}>
            <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-2">Graduate Attributes</p>
            <h2 className="text-display-sm font-serif text-maroon mb-4">Graduate Attributes</h2>
            <div className="text-body font-sans text-charcoal/70 leading-relaxed space-y-4">
              {visionMission.graduateAttributes.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <a
              href="https://christuniversity.in/uploads/userfiles/file/GRADUATE%20ATTRIBUTES.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-pill bg-gold/10 text-gold text-label-sm font-sans font-medium hover:bg-gold hover:text-maroon-dark transition-all duration-250"
            >
              Know More
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Founder */}
      <section id="founder" className="bg-cream-muted border-t border-cream-border">
        <div className="mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-section-y-sm lg:py-section-y">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportLazy}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-4xl mx-auto"
          >
            <motion.div variants={getMotionVariants(fadeInUp)} className="relative flex justify-center">
              <div className="rounded-card-lg overflow-hidden border border-cream-border bg-maroon/5 shadow-card-white w-full max-w-[200px] sm:max-w-[300px]">
                <img
                  src={chavraImg}
                  alt="St. Kuriakose Elias Chavara"
                  className="w-full h-auto block"
                />
              </div>
            </motion.div>

            <motion.div variants={getMotionVariants(fadeInUp)}>
              <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-2">Founder</p>
              <h2 className="text-display-sm font-serif text-maroon mb-1">{founderMessage.name}</h2>
              <p className="text-label font-sans text-charcoal/50 mb-2">{founderMessage.years}</p>
              <p className="text-label-sm font-sans text-gold mb-6">{founderMessage.title}</p>
              <blockquote className="text-body-lg font-sans text-charcoal/70 leading-relaxed italic border-l-[3px] border-gold pl-5">
                "{founderMessage.message}"
              </blockquote>
              <a
                href="https://christuniversity.in/founder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-pill bg-gold/10 text-gold text-label-sm font-sans font-medium hover:bg-gold hover:text-maroon-dark transition-all duration-250"
              >
                Know More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* History & Milestones */}
      <section id="history" className="mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-section-y-sm lg:py-section-y">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportLazy}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={getMotionVariants(fadeInUp)} className="mb-10 text-center">
            <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-2">Our Journey</p>
            <h2 className="text-display-sm font-serif text-maroon">History &amp; Milestones</h2>
          </motion.div>

          <motion.div variants={getMotionVariants(fadeInUp)} className="space-y-6 mb-12">
            <p className="text-body font-sans text-charcoal/70 leading-relaxed">{historyNarrative.intro}</p>
            <blockquote className="text-body font-sans text-charcoal/60 leading-relaxed italic border-l-[3px] border-gold pl-5">
              {historyNarrative.founding}
            </blockquote>
            <p className="text-body font-sans text-charcoal/70 leading-relaxed">{historyNarrative.growth}</p>
            <p className="text-body font-sans text-charcoal/70 leading-relaxed">{historyNarrative.present}</p>
          </motion.div>

          <motion.div variants={getMotionVariants(fadeInUp)} className="mb-6">
            <h3 className="text-heading font-serif text-maroon text-center">Milestones</h3>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-1/2" />

            <div className="space-y-8">
              {history.map((item, i) => (
                <motion.div
                  key={item.year}
                  variants={getMotionVariants(fadeInUp)}
                  transition={{ delay: i * 0.06 }}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white border border-cream-border rounded-card-lg p-card-p shadow-card-white">
                      <span className="text-heading-sm font-serif text-gold font-bold">{item.year}</span>
                      <h3 className="text-body font-sans font-semibold text-charcoal mt-1">{item.event}</h3>
                      <p className="text-body-sm font-sans text-charcoal/50 mt-1">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gold border-2 border-cream -translate-x-1/2 mt-1.5 z-10" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Anthem */}
      <section id="anthem" className="bg-maroon/[0.02] border-t border-cream-border">
        <div className="mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-section-y-sm lg:py-section-y">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportLazy}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={getMotionVariants(fadeInUp)} className="text-center mb-8">
              <p className="text-eyebrow font-sans text-gold tracking-widest uppercase mb-2">University Anthem</p>
              <h2 className="text-display-sm font-serif text-maroon">{universityAnthem.title}</h2>
            </motion.div>

            <motion.div variants={getMotionVariants(fadeInUp)} className="max-w-2xl mx-auto bg-white border border-cream-border rounded-card-lg shadow-card-white overflow-hidden">
              <div className="p-0">
                <video
                  controls
                  poster={universityAnthem.videoPoster}
                  className="w-full"
                >
                  <source src={universityAnthem.videoSrc} type="video/mp4" />
                </video>
              </div>
              <div className="px-card-p py-5 text-center space-y-3">
                {universityAnthem.lyrics.map((stanza, i) => (
                  <p key={i} className="text-body-sm font-sans text-charcoal/70 leading-relaxed italic whitespace-pre-line">{stanza}</p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Rules & Regulations */}
      <div className="border-t border-cream-border">
        <RulesSection />
      </div>
    </div>
  )
}

export default AboutUniversityPage
