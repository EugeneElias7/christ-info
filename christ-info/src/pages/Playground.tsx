import { motion } from 'framer-motion';
import {
  GraduationCap, FlaskConical, Microscope, Trophy,
  Calendar, Briefcase, Mail, Phone,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { GlassCard } from '../components/ui/GlassCard';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { IconWrapper } from '../components/ui/IconWrapper';
import { IconLabelPair } from '../components/ui/IconLabelPair';
import { AnimatedCard } from '../components/ui/AnimatedCard';
import { fadeInUp, staggerContainer, getMotionVariants, viewportOnce } from '../lib/animations';
import { cn } from '../lib/utils';

/** Playground — dev-only visual QA. Only rendered at /playground in development. */

function Block({ title, children, dark = false }: { title: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={cn('py-10 px-8 border-b border-cream-border', dark && 'bg-charcoal')}>
      <p className="text-eyebrow font-sans uppercase tracking-widest text-gold mb-5">{title}</p>
      {children}
    </div>
  );
}

export function Playground() {
  return (
    <div className="min-h-screen bg-cream font-sans">
      {/* Header */}
      <div className="bg-maroon px-8 py-5 sticky top-0 z-50">
        <p className="text-eyebrow text-gold tracking-widest uppercase">DEV ONLY · Component Playground</p>
        <p className="text-label text-cream/50 font-sans mt-0.5">Visual QA before section implementation</p>
      </div>

      {/* 1. Typography */}
      <Block title="1 · Typography Scale">
        <div className="space-y-3 max-w-3xl">
          <p className="text-eyebrow text-maroon uppercase tracking-widest font-sans">Eyebrow — Welcome Christite</p>
          <p className="text-label-sm text-charcoal/60 font-sans">Label SM — Navigation, metadata</p>
          <p className="text-label text-charcoal/70 font-sans">Label — UI labels, tags</p>
          <p className="text-label-lg text-charcoal font-sans">Label LG — Nav links</p>
          <p className="text-body-sm text-charcoal/80 font-sans">Body SM — Captions and secondary copy.</p>
          <p className="text-body text-charcoal font-sans">Body — Standard reading copy for descriptions.</p>
          <p className="text-body-lg text-charcoal font-sans">Body LG — Lead paragraph text.</p>
          <div className="pt-3 border-t border-cream-border" />
          <h4 className="text-heading-sm font-serif text-maroon">Heading SM</h4>
          <h3 className="text-heading font-serif text-maroon">Heading</h3>
          <h2 className="text-heading-lg font-serif text-maroon">Heading LG</h2>
          <h2 className="text-display-sm font-serif text-maroon">Display SM</h2>
          <h1 className="text-display font-serif text-maroon">Display</h1>
          <h1 className="text-display-lg font-serif text-maroon">Display LG</h1>
        </div>
      </Block>

      {/* 2. Colors */}
      <Block title="2 · Color Tokens">
        <div className="flex flex-wrap gap-3">
          {[
            { bg: 'bg-maroon', label: 'maroon', text: 'text-cream' },
            { bg: 'bg-gold', label: 'gold', text: 'text-charcoal' },
            { bg: 'bg-cream border border-cream-border', label: 'cream', text: 'text-charcoal' },
            { bg: 'bg-cream-muted', label: 'cream-muted', text: 'text-charcoal' },
            { bg: 'bg-charcoal', label: 'charcoal', text: 'text-cream' },
            { bg: 'bg-charcoal-dark', label: 'charcoal-dark', text: 'text-cream' },
          ].map(({ bg, label, text }) => (
            <div key={label} className={cn('w-28 h-14 rounded-card flex items-end p-2', bg)}>
              <span className={cn('text-label-sm font-sans', text)}>{label}</span>
            </div>
          ))}
        </div>
      </Block>

      {/* 3. Shadows */}
      <Block title="3 · Shadow Scale">
        <div className="flex flex-wrap gap-6">
          {['shadow-card', 'shadow-card-md', 'shadow-card-hover', 'shadow-card-lg', 'shadow-gold-glow'].map((s) => (
            <div key={s} className={cn('w-32 h-16 rounded-card bg-cream flex items-end p-2', s)}>
              <span className="text-label-sm text-charcoal/50 font-sans">{s}</span>
            </div>
          ))}
        </div>
      </Block>

      {/* 4. Buttons */}
      <Block title="4 · Buttons">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="primary" size="sm">Primary SM</Button>
            <Button variant="primary">Primary Default</Button>
            <Button variant="primary" size="lg">Primary LG</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="ghost" size="sm">Ghost SM</Button>
            <Button variant="ghost">Ghost Default</Button>
            <Button variant="ghost" size="lg">Ghost LG</Button>
            <Button variant="ghost" disabled>Disabled</Button>
          </div>
        </div>
      </Block>

      {/* 5. Cards */}
      <Block title="5 · Cards">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-card-gap mb-card-gap">
          <Card variant="base" className="p-card-p">
            <h3 className="text-heading-sm font-serif text-maroon mb-1">Base Card</h3>
            <p className="text-body-sm text-charcoal/70 font-sans">Static cream surface, maroon-tinted shadow.</p>
          </Card>
          <Card variant="interactive" className="p-card-p">
            <h3 className="text-heading-sm font-serif text-maroon mb-1">Interactive Card</h3>
            <p className="text-body-sm text-charcoal/70 font-sans">Hover for translateY(-4px) + shadow upgrade.</p>
          </Card>
          <Card variant="maroon" className="p-card-p">
            <h3 className="text-heading-sm font-serif text-cream mb-1">Maroon Card</h3>
            <p className="text-body-sm text-cream/70 font-sans">Inverted surface for featured CTAs.</p>
          </Card>
        </div>
        <GlassCard className="p-card-p max-w-md">
          <h3 className="text-heading-sm font-serif text-maroon mb-1">GlassCard</h3>
          <p className="text-body-sm text-charcoal/70 font-sans">rounded-card-lg, backdrop-blur, shadow-card-md. Used by Navigation Funnel.</p>
        </GlassCard>
        <div className="mt-card-gap">
          <p className="text-label text-charcoal/50 mb-3 font-sans uppercase tracking-wider">Animated Cards (scroll into view)</p>
          <div className="grid grid-cols-3 gap-card-gap">
            {([0, 0.12, 0.24] as const).map((delay, i) => (
              <AnimatedCard key={i} delay={delay} variant="interactive" className="p-card-p">
                <h3 className="text-heading-sm font-serif text-maroon mb-1">Card {i + 1}</h3>
                <p className="text-body-sm text-charcoal/60 font-sans">delay: {delay}s</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </Block>

      {/* 6. Icons */}
      <Block title="6 · Icons & IconLabelPair">
        <div className="space-y-6">
          <div className="flex items-end gap-6">
            <IconWrapper icon={GraduationCap} size="sm" className="text-maroon" />
            <IconWrapper icon={GraduationCap} size="default" className="text-maroon" />
            <IconWrapper icon={GraduationCap} size="lg" className="text-maroon" />
            <IconWrapper icon={GraduationCap} size="xl" className="text-maroon" />
          </div>
          <div className="flex gap-8">
            <IconLabelPair icon={GraduationCap} label="Academics" />
            <IconLabelPair icon={FlaskConical} label="Labs" />
            <IconLabelPair icon={Microscope} label="Research" />
            <IconLabelPair icon={Trophy} label="Achievements" />
            <IconLabelPair icon={Calendar} label="Events" />
            <IconLabelPair icon={Briefcase} label="Placements" />
          </div>
          <div className="flex gap-4">
            <IconWrapper icon={Mail} size="default" ariaLabel="Send email" onClick={() => {}} className="text-maroon" />
            <IconWrapper icon={Phone} size="default" ariaLabel="Call" onClick={() => {}} className="text-maroon" />
          </div>
        </div>
      </Block>

      {/* 7. Motion */}
      <Block title="7 · Motion (scroll to trigger)">
        <div className="space-y-6">
          <motion.div
            variants={getMotionVariants(fadeInUp)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="h-14 bg-maroon/10 rounded-card flex items-center px-4"
          >
            <span className="text-body-sm text-maroon font-sans">fadeInUp — 0.5s editorial ease</span>
          </motion.div>
          <motion.div
            variants={getMotionVariants(staggerContainer)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex gap-3"
          >
            {['First', 'Second', 'Third', 'Fourth'].map((l) => (
              <motion.div key={l} variants={getMotionVariants(fadeInUp)} className="flex-1 h-14 bg-maroon rounded-card flex items-center justify-center">
                <span className="text-label text-cream font-sans">{l}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Block>

      {/* 8. Focus states */}
      <Block title="8 · Focus States (Tab through)">
        <p className="text-body-sm text-charcoal/60 font-sans mb-4">Press Tab — gold ring must be visible on every element.</p>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Focus me</Button>
          <Button variant="ghost">Focus me</Button>
          <IconWrapper icon={Mail} size="default" ariaLabel="Email" onClick={() => {}} className="text-maroon" />
          <a href="#" className="text-body-sm text-maroon underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm">Focus link</a>
        </div>
      </Block>

      {/* 9. SectionWrapper */}
      <Block title="9 · SectionWrapper">
        <SectionWrapper id="pg-section" ariaLabel="Playground section test" background="cream-muted" animate={false}>
          <div className="bg-maroon/10 rounded-card p-4 text-center">
            <p className="text-body-sm text-maroon font-sans">max-w-7xl · responsive padding · py-section-y</p>
          </div>
        </SectionWrapper>
      </Block>

      <div className="bg-charcoal text-cream/30 text-label-sm font-sans text-center py-4">
        Playground · DEV ONLY · not included in production build
      </div>
    </div>
  );
}

export default Playground;
