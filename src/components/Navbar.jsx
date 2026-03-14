import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import logo from '../assets/logo.jpg'

const MENU_ITEMS = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About Us',
    href: '/about',
    submenu: [
      { name: 'Our Story', href: '/about/story' },
      { name: 'Our Team', href: '/about/team' },
      { name: 'Partners', href: '/about/partners' },
      { name: 'Careers', href: '/about/careers' },
    ],
  },
  {
    name: 'Artists',
    href: '/artists',
    submenu: [
      { name: 'Stand-up Comedians', href: '/artists/comedians' },
      { name: 'Singers', href: '/artists/singers' },
      { name: 'Dancers', href: '/artists/dancers' },
      { name: 'DJs', href: '/artists/djs' },
      { name: 'Bands', href: '/artists/bands' },
      { name: 'Motivational Speakers', href: '/artists/speakers' },
      { name: 'Magicians', href: '/artists/magicians' },
      { name: 'Anchors', href: '/artists/anchors' },
      { name: 'Influencers', href: '/artists/influencers' },
      { name: 'All Artists', href: '/artists' },
    ],
  },
  {
    name: 'Book an Artist',
    href: '/book',
    submenu: [
      { name: 'Quick Booking', href: '/book/quick' },
      { name: 'Custom Event Request', href: '/book/custom' },
      { name: 'Corporate Events', href: '/book/corporate' },
      { name: 'Wedding Events', href: '/book/wedding' },
      { name: 'Private Parties', href: '/book/private-parties' },
      { name: 'College Shows', href: '/book/college' },
      { name: 'Festival Shows', href: '/book/festival' },
    ],
  },
  {
    name: 'Events',
    href: '/events',
    submenu: [
      { name: 'Upcoming Shows', href: '/events/upcoming' },
      { name: 'Past Events', href: '/events/past' },
      { name: 'Live Shows', href: '/events/live' },
      { name: 'Virtual Shows', href: '/events/virtual' },
      { name: 'Featured Events', href: '/events/featured' },
    ],
  },
  {
    name: 'Join',
    href: '/join',
    submenu: [
      { name: 'Apply as Artist', href: '/join/apply' },
      { name: 'Create Profile', href: '/join/create-profile' },
      { name: 'Upload Portfolio', href: '/join/portfolio' },
      { name: 'Artist Dashboard', href: '/join/dashboard' },
    ],
  },
  {
    name: 'Categories',
    href: '/categories',
    submenu: [
      { name: 'Comedy Shows', href: '/categories/comedy' },
      { name: 'Music Shows', href: '/categories/music' },
      { name: 'Dance Performances', href: '/categories/dance' },
      { name: 'Celebrity Appearances', href: '/categories/celebrity' },
      { name: 'Cultural Shows', href: '/categories/cultural' },
      { name: 'Kids Entertainment', href: '/categories/kids' },
    ],
  },
  {
    name: 'Blog',
    href: '/blog',
    submenu: [
      { name: 'Artist Interviews', href: '/blog/interviews' },
      { name: 'Event Planning Tips', href: '/blog/planning-tips' },
      { name: 'Comedy & Music News', href: '/blog/news' },
      { name: 'Behind the Scenes', href: '/blog/behind-the-scenes' },
    ],
  },
  {
    name: 'Contact Us',
    href: '/contact',
    submenu: [
      { name: 'FAQs', href: '/contact/faqs' },
      { name: 'Booking Help', href: '/contact/booking-help' },
      { name: 'Cancellation Policy', href: '/contact/cancellation' },
    ],
  },
]

function NavItem({ item, isMobile, onClose }) {
  const [open, setOpen] = useState(false)

  const LinkTag = item.href?.startsWith('/') ? Link : 'a'
  const linkProps = item.href?.startsWith('/')
    ? { to: item.href }
    : { href: item.href || '#' }

  if (item.submenu?.length) {
    return (
      <div
        className={`relative ${isMobile ? 'border-b border-white/10' : ''}`}
        onMouseEnter={() => !isMobile && setOpen(true)}
        onMouseLeave={() => !isMobile && setOpen(false)}
      >
        {isMobile ? (
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-between gap-2 py-3 w-full text-gray-400 hover:text-white font-medium transition"
          >
            {item.name}
            <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
          </button>
        ) : (
          <div className="flex items-center gap-0.5 py-2 px-3 rounded-lg hover:bg-white/5">
            <LinkTag {...linkProps} className="text-gray-400 hover:text-white font-medium transition">
              {item.name}
            </LinkTag>
            <ChevronDown size={16} className="text-gray-500" />
          </div>
        )}
        {open && (
          <div
            className={`md:absolute md:top-full md:left-0 md:pt-2 md:min-w-[220px] ${
              isMobile ? 'pl-4 pb-2' : ''
            }`}
          >
            <div className="md:rounded-xl md:border md:border-white/10 md:bg-[#0d0d12] md:py-2 md:shadow-xl">
              {item.submenu.map((sub) => {
                const SubLink = sub.href?.startsWith('/') ? Link : 'a'
                const subProps = sub.href?.startsWith('/')
                  ? { to: sub.href }
                  : { href: sub.href || '#' }
                return (
                  <SubLink
                    key={sub.name}
                    {...subProps}
                    onClick={onClose}
                    className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition"
                  >
                    {sub.name}
                  </SubLink>
                )
              })}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <LinkTag
      {...linkProps}
      onClick={onClose}
      className="block py-2 px-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 font-medium transition"
    >
      {item.name}
    </LinkTag>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-6">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-8 w-auto object-contain" />
        <span className="text-2xl font-bold tracking-tight">Kalakaar Studios</span>
      </Link>

      {/* Desktop menu */}
      <div className="hidden lg:flex items-center gap-1">
        {MENU_ITEMS.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="text-gray-400 hover:text-white transition p-1" aria-label="Search">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="hidden md:block border border-white/30 px-5 py-2 rounded-md hover:bg-white/10 transition backdrop-blur-sm font-medium">
          Login
        </button>
        <button className="hidden md:block bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-md font-medium transition">
          Signup
        </button>
        <div className="hidden md:flex items-center gap-3 border-l border-white/20 pl-4">
          <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Facebook">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Instagram">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition" aria-label="YouTube">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-gray-400 hover:text-white transition"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 lg:hidden mt-0 border-t border-white/10 bg-[#09090E]/98 backdrop-blur-xl overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="px-6 py-4 space-y-1">
            {MENU_ITEMS.map((item) => (
              <NavItem key={item.name} item={item} isMobile onClose={() => setMobileOpen(false)} />
            ))}
            <div className="pt-4 border-t border-white/10 flex gap-3">
              <button className="flex-1 py-3 border border-white/30 rounded-md font-medium">Login</button>
              <button className="flex-1 py-3 bg-indigo-600 rounded-md font-medium">Signup</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
