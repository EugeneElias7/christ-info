import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import { scrollToSection } from '../../lib/utils';
import { navLinks } from '../../data/navigation';
import christLogo from '../../assets/images/christ logo.png';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close mobile panel when path changes (navigation succeeded)
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (href?: string, path?: string) => {
    if (path) {
      navigate(path);
      if (path === '/' && location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setMobileOpen(false);
        setOpenDropdown(null);
      }
      return;
    }
    if (!href) return;
    if (href.startsWith('http://') || href.startsWith('https://')) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }
    if (href.startsWith('/')) {
      navigate(href);
      return;
    }
    const id = href.replace('#', '');
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
      setMobileOpen(false);
      setOpenDropdown(null);
    }
  };

  const activePath = location.pathname;

  function renderNavChildren(items: { label: string; href?: string; path?: string; children?: { label: string; href?: string; path?: string }[] }[], onClose: () => void) {
    return items.map((child) => {
      if (child.children && child.children.length > 0) {
        return (
          <div key={child.label}>
            <div className="px-4 pt-3 pb-1 text-[10px] font-sans font-semibold text-gold/60 uppercase tracking-wider">{child.label}</div>
            {child.children.map((sub) => {
              const subHref = sub.path || sub.href || '#';
              return (
                <a
                  key={sub.label}
                  href={subHref}
                  onClick={(e) => { if (sub.path) { e.preventDefault(); onClose(); }}}
                  className="w-full text-left block pl-8 pr-4 py-2 hover:bg-white/5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <span className="text-sm font-sans text-cream/70">{sub.label}</span>
                </a>
              );
            })}
          </div>
        );
      }
      if (child.path) {
        return (
          <Link
            key={child.label}
            to={child.path}
            onClick={onClose}
            className="w-full text-left block px-4 py-3 hover:bg-white/5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-gold"
          >
            <span className="text-sm font-sans font-medium text-cream/90">{child.label}</span>
            {child.description && (
              <span className="block text-xs text-cream/40 mt-0.5">{child.description}</span>
            )}
          </Link>
        );
      }
      return (
        <button
          key={child.label}
          onClick={() => { handleNavClick(child.href); onClose(); }}
          className="w-full text-left block px-4 py-3 hover:bg-white/5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-gold"
        >
          <span className="text-sm font-sans font-medium text-cream/90">{child.label}</span>
          {child.description && (
            <span className="block text-xs text-cream/40 mt-0.5">{child.description}</span>
          )}
        </button>
      );
    });
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-nav h-nav-h w-full',
          'transition-shadow duration-350',
          scrolled
            ? 'bg-maroon shadow-nav border-b border-gold/15'
            : 'bg-maroon',
        )}
      >
        <div className="mx-auto max-w-7xl h-full flex items-center justify-between px-section-x-sm sm:px-section-x-md lg:px-section-x">
          <a
            href="https://christuniversity.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
            aria-label="CHRIST University"
          >
            <img
              src={christLogo}
              alt="CHRIST University"
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </a>

          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1" ref={dropdownRef}>
            {navLinks.map((link) => {
              const hasDropdown = link.children && link.children.length > 0;
              const isOpen = openDropdown === link.label;
              const active = link.path ? activePath === link.path : activePath === link.href;

              const handleMouseEnter = () => {
                if (closeTimer.current) {
                  clearTimeout(closeTimer.current);
                  closeTimer.current = null;
                }
                setOpenDropdown(link.label);
              };

              const handleMouseLeave = () => {
                closeTimer.current = setTimeout(() => {
                  setOpenDropdown(null);
                }, 200);
              };

              return (
                <div
                  key={link.label}
                  className="relative group/nav"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {hasDropdown ? (
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : link.label)}
                      onMouseEnter={handleMouseEnter}
                      className={cn(
                        'flex items-center gap-1 px-3 py-2 rounded-card text-sm',
                        'font-sans font-medium tracking-wide',
                        'transition-all duration-250',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold',
                        active
                          ? 'text-gold'
                          : 'text-cream/80 hover:text-cream',
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        strokeWidth={1.5}
                        className={cn(
                          'transition-transform duration-250',
                          isOpen && 'rotate-180',
                        )}
                      />
                      <span
                        className={cn(
                          'absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full',
                          'transition-transform duration-300 ease-smooth',
                          'scale-x-0 group-hover/nav:scale-x-100',
                          'group-hover/nav:origin-left origin-right',
                        )}
                        style={{ transformOrigin: 'right center' }}
                      />
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setOpenDropdown(null)}
                      className={cn(
                        'flex items-center gap-1 px-3 py-2 rounded-card text-sm',
                        'font-sans font-medium tracking-wide',
                        'transition-all duration-250',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold',
                        active
                          ? 'text-gold'
                          : 'text-cream/80 hover:text-cream',
                      )}
                    >
                      {link.label}
                      <span
                        className={cn(
                          'absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full',
                          'transition-transform duration-300 ease-smooth',
                          'scale-x-0 group-hover/nav:scale-x-100',
                          'origin-right',
                        )}
                        style={{ transformOrigin: 'right center' }}
                      />
                    </Link>
                  )}

                  <AnimatePresence>
                    {hasDropdown && isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        className={cn(
                          'absolute top-full left-0 mt-1 bg-maroon-dark border border-gold/15 rounded-card-lg shadow-hero-glow overflow-hidden',
                          link.label === 'Facilities' ? 'min-w-[140px]' : 'min-w-[220px]',
                        )}
                      >
                        <div className="flex flex-col">
                          {renderNavChildren(link.children!, () => setOpenDropdown(null))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <button
            className={cn(
              'md:hidden flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-card',
              'text-cream/80 hover:text-cream',
              'transition-colors duration-250',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold',
            )}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-label="Mobile navigation"
          className="fixed top-nav-h left-0 right-0 z-overlay bg-maroon-dark border-t border-gold/15 shadow-hero-glow md:hidden max-h-[calc(100vh-3.5rem)] overflow-y-auto"
          style={{ animation: 'fadeSlideIn 0.2s ease-out' }}
        >
          <style>{`@keyframes fadeSlideIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
          <nav aria-label="Mobile navigation links" className="flex flex-col py-2">
            {navLinks.map((link) => {
              const hasDropdown = link.children && link.children.length > 0;
              const active = link.path ? activePath === link.path : activePath === link.href;
              const isOpen = openDropdown === link.label;

              return (
                <div key={link.label}>
                  <button
                    onClick={() => {
                      if (hasDropdown) {
                        setOpenDropdown(isOpen ? null : link.label);
                      } else {
                        const href = link.href;
                        if (href.startsWith('/')) {
                          navigate(href);
                        } else {
                          handleNavClick(href, link.path);
                        }
                      }
                    }}
                    className={cn(
                      'w-full text-left px-section-x-sm py-3',
                      'flex items-center justify-between',
                      'text-label-lg font-sans',
                      'transition-colors duration-200',
                      active ? 'text-gold' : 'text-cream/80 hover:text-cream',
                    )}
                  >
                    {link.label}
                    {hasDropdown && (
                      <ChevronDown
                        size={16}
                        strokeWidth={1.5}
                        className={cn(
                          'transition-transform duration-200',
                          isOpen && 'rotate-180',
                        )}
                      />
                    )}
                  </button>

                  {hasDropdown && isOpen && (
                    <div className="bg-black/20">
                      {renderMobileChildren(link.children!, () => setMobileOpen(false))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}

function renderMobileChildren(items: { label: string; href?: string; path?: string; children?: { label: string; href?: string; path?: string }[] }[], onClose: () => void) {
  return items.map((child) => {
    if (child.children && child.children.length > 0) {
      return (
        <div key={child.label}>
          <div className="pl-8 pr-section-x-sm pt-3 pb-1 text-[10px] font-sans font-semibold text-gold/50 uppercase tracking-wider">{child.label}</div>
          {child.children.map((sub) => {
            const subHref = sub.path || sub.href || '#';
            return (
              <a
                key={sub.label}
                href={subHref}
                className="block w-full pl-12 pr-section-x-sm py-2 text-sm font-sans text-cream/60 hover:text-cream hover:bg-white/5 transition-colors duration-200"
              >
                {sub.label}
              </a>
            );
          })}
        </div>
      );
    }
    const href = child.path || child.href || '#';
    return (
      <a
        key={child.label}
        href={href}
        className="block w-full pl-8 pr-section-x-sm py-2.5 text-sm font-sans text-cream/70 hover:text-cream hover:bg-white/5 transition-colors duration-200"
      >
        <span>{child.label}</span>
        {child.description && (
          <span className="block text-xs text-cream/40 mt-0.5">{child.description}</span>
        )}
      </a>
    );
  });
}

export default Navbar;
