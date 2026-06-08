import { Linkedin, Instagram, Youtube, Twitter, Facebook, Smartphone, FileText, Image, Mail, MapPin, ExternalLink } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { footerColumns } from '../../data/navigation';
import { scrollToSection } from '../../lib/utils';
import departmentLogo from '../../assets/images/department-Logo.png';

const socialIcons = [
  { icon: Linkedin, href: 'https://in.linkedin.com/school/christ-university-bangalore', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/christ_university_bangalore/', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitter, href: 'https://twitter.com/christbangalore', label: 'X (Twitter)' },
  { icon: Facebook, href: 'https://www.facebook.com/www.christuniversity.in/?modal=admin_todo_tour', label: 'Facebook' },
  { icon: Smartphone, href: 'https://play.google.com/store/apps/developer?id=Christ+University', label: 'Play Store' },
  { icon: FileText, href: 'http://christbangalore.blogspot.com/', label: 'Blogger' },
  { icon: Image, href: 'https://www.flickr.com/photos/christuniversity/albums', label: 'Flickr' },
  { icon: Mail, href: 'mailto:computer.science.byc@christuniversity.in', label: 'Email' },
  { icon: MapPin, href: 'https://www.google.com/maps/place/CHRIST+(Deemed+to+be+University)+Bangalore+Yeshwanthpur+Campus/@13.0916193,77.4649936,12.48z/data=!4m6!3m5!1s0x3bae3d0a40ad5761:0xe5a58bef32d6e1b7!8m2!3d13.0362625!4d77.5046094!16s%2Fg%2F11rv1vpm0m?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D', label: 'Map' },
];

const contactItems = [
  { label: 'Email', value: 'computer.science.byc@christuniversity.in' },
  { label: 'Phone', value: '+91 806989 6666' },
  { label: 'Address', value: 'Bangalore Yeshwanthpur Campus, Nagasandra, Near Tumkur Road, Bangalore, Karnataka-560073' },
];

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer aria-label="Site footer" className="bg-gradient-to-b from-charcoal to-charcoal-dark text-white/70">
      <div className="mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-14 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a
              href="https://christuniversity.in/departments/yeshwanthpur-campus/school-of-sciences/computer-science"
              target="_blank"
              rel="noopener noreferrer"
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
            >
              <img
                src={departmentLogo}
                alt="Department of Computer Science"
                className="h-14 w-auto object-contain mb-3"
              />
            </a>
            <button
              onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
              className="text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
            >
              <span className="font-serif text-lg tracking-wide">
                CHRIST <span className="text-gold">INFO</span>
              </span>
            </button>
            <div className="flex flex-wrap items-center gap-2.5">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-card flex items-center justify-center bg-gold/8 border border-gold/15 text-gold/50 hover:bg-gold hover:text-charcoal-dark hover:border-gold transition-all duration-250"
                >
                  <Icon size={14} strokeWidth={1.5} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading} className="col-span-1 md:col-span-1 lg:col-span-2">
              {column.heading === 'Programmes' ? (
                <button
                  onClick={() => { navigate('/programmes'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  className="text-sm font-sans font-semibold text-white/80 tracking-wide mb-4 block text-left focus-visible:outline-none focus-visible:text-gold hover:text-gold transition-colors duration-250"
                >
                  {column.heading}
                </button>
              ) : (
                <h4 className="text-sm font-sans font-semibold text-white/80 tracking-wide mb-4">
                  {column.heading}
                </h4>
              )}
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-sans text-white/40 hover:text-gold transition-colors duration-250"
                      >
                        {link.label} <ExternalLink size={10} strokeWidth={1.5} className="opacity-40" />
                      </a>
                    ) : (
                      <button
                        onClick={() => {
                          if (link.href.includes('#')) {
                            const hash = link.href.split('#')[1];
                            if (location.pathname !== '/') {
                              navigate('/');
                              setTimeout(() => scrollToSection(hash), 100);
                            } else {
                              scrollToSection(hash);
                            }
                          } else {
                            navigate(link.href);
                            window.scrollTo({ top: 0, behavior: 'instant' });
                          }
                        }}
                        className="text-sm font-sans text-white/40 hover:text-gold transition-colors duration-250 focus-visible:outline-none focus-visible:text-gold"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <h4 className="text-sm font-sans font-semibold text-white/80 tracking-wide mb-4">Contact</h4>
            <ul className="space-y-3">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <p className="text-[10px] font-sans text-white/25 tracking-wider uppercase">{item.label}</p>
                  <p className="text-sm font-sans text-white/50">{item.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-section-x-sm sm:px-section-x-md lg:px-section-x py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs font-sans text-white/25">
            &copy; 2026 CHRIST INFO &mdash; Computer Science Department. All Rights Reserved.
          </p>
          <p className="text-xs font-sans text-white/20">
            Built by Student of Computer Science{" "}
            <a
              href="https://www.linkedin.com/in/eugene-elias"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/40 hover:text-gold transition-colors duration-250"
            >
              Eugene Elias
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
