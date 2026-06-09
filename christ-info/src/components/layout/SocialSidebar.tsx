import { useState } from 'react'
import { ChevronLeft } from 'lucide-react'

const socialLinks = [
  {
    label: 'LinkedIn', href: 'https://www.linkedin.com/in/computer-science-yeshwanthpur-cs-byc-christ-university-75b423371/',
    icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: 'Instagram', href: 'https://www.instagram.com/csbyc.connect/',
    icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#E4405F"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
  },
  {
    label: 'YouTube', href: 'https://www.youtube.com/@Christuniversity.bangalore',
    icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  },
  {
    label: 'X (Twitter)', href: 'https://twitter.com/christbangalore',
    icon: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="#1DA1F2"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    label: 'Facebook', href: 'https://www.facebook.com/www.christuniversity.in/?modal=admin_todo_tour',
    icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    label: 'Play Store', href: 'https://play.google.com/store/apps/developer?id=Christ+University',
    icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#34A853"><path d="M1.703 2.016C1.266 2.316 1 2.82 1 3.422v16.899c0 .602.266 1.106.703 1.406l.008.004 10.281-9.848V11.86L1.703 2.016zm11.39 7.168l2.598-2.488L5.628 2.219l7.465 6.965zm3.168 2.868c-.324-.328-.852-.605-1.418-.605-.566 0-1.094.277-1.418.605l-1.543 1.477v1.641l1.543 1.477c.324.328.852.605 1.418.605.566 0 1.094-.277 1.418-.605.331-.336.543-.785.543-1.282V13.33c0-.496-.212-.946-.543-1.282v.004zM5.629 21.524l7.469-6.965-2.602-2.489-4.867 9.454z"/></svg>,
  },
  {
    label: 'Blogger', href: 'https://www.thebyteboard-csbyc.blog/',
    icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#F57C00"><path d="M19.422 9.172H15.3a.3.3 0 01-.3-.3V4.227a.3.3 0 00-.3-.3H9.633c-.3 0-.6.087-.851.276l-.08.066-5.242 4.757A1.563 1.563 0 002.7 10.17v8.716c0 .861.701 1.562 1.563 1.562h15.474c.861 0 1.563-.701 1.563-1.562V10.73c0-.86-.702-1.557-1.563-1.557zM8.485 7.895c0-.342.278-.62.62-.62h2.328c.343 0 .62.278.62.62 0 .342-.277.62-.62.62H9.105a.62.62 0 01-.62-.62zm7.03 7.595c0 .343-.278.62-.62.62H9.105a.62.62 0 01-.62-.62c0-.343.277-.62.62-.62h5.79c.342 0 .62.277.62.62zm0-3.467c0 .343-.278.62-.62.62H9.105a.62.62 0 01-.62-.62c0-.343.277-.62.62-.62h5.79c.342 0 .62.277.62.62z"/></svg>,
  },
  {
    label: 'Flickr', href: 'https://www.flickr.com/photos/christuniversity/albums',
    icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#0063DC"><circle cx="7.5" cy="12" r="4.5"/><circle cx="16.5" cy="12" r="4.5" fill="#FF0084"/></svg>,
  },
  {
    label: 'Email', href: 'mailto:computer.science.byc@christuniversity.in',
    icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#D4A017"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>,
  },
  {
    label: 'Map', href: 'https://www.google.com/maps/place/CHRIST+(Deemed+to+be+University)+Bangalore+Yeshwanthpur+Campus/@13.0916193,77.4649936,12.48z/data=!4m6!3m5!1s0x3bae3d0a40ad5761:0xe5a58bef32d6e1b7!8m2!3d13.0362625!4d77.5046094!16s%2Fg%2F11rv1vpm0m?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D',
    icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#EA4335"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>,
  },
]

export function SocialSidebar() {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`flex flex-col items-center transition-all duration-400 ease-out ${
          hovered ? 'translate-x-0' : 'translate-x-[calc(100%-28px)]'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-sm border border-cream-border rounded-l-card-lg shadow-card-white py-2 px-1.5">
          <div className="flex flex-col gap-1.5">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group/icon relative w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-250 hover:scale-110 hover:shadow-sm"
              >
                {icon}
                <span className="absolute right-full mr-2 px-2 py-1 rounded-md bg-charcoal text-cream text-[10px] font-sans font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover/icon:opacity-100 transition-opacity duration-200 shadow-md">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div
          className={`flex items-center justify-center w-5 h-10 bg-white/95 backdrop-blur-sm border border-l-0 border-t-0 border-cream-border rounded-br-sm cursor-pointer transition-all duration-400 ${
            hovered ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <ChevronLeft size={10} strokeWidth={1.5} className="text-charcoal/40" />
        </div>
      </div>
    </div>
  )
}
