import { Link } from 'react-router-dom'

const CATEGORIES = [
  {
    name: 'Stand-up Comedians',
    image: '/images/comedians/kenny-sebastian.png',
    href: '/artists/comedians',
  },
  {
    name: 'Singers',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=90',
    href: '/artists/singers',
  },
  {
    name: 'Dancers',
    image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&q=90',
    href: '/artists/dancers',
  },
  {
    name: 'DJs',
    image: '/images/dj.jpg',
    href: '/artists/djs',
  },
  {
    name: 'Bands',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=90',
    href: '/artists/bands',
  },
  {
    name: 'Magicians',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=90',
    href: '/artists/magicians',
  },
  {
    name: 'Motivational Speakers',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=90',
    href: '/artists/speakers',
  },
  {
    name: 'Anchors / Hosts',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&q=90',
    href: '/artists/anchors',
  },
]

export default function BrowseByCategory() {
  return (
    <section className="py-16 md:py-20 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Browse by Category</h2>
          <p className="mt-2 text-gray-400 max-w-xl mx-auto">Find the perfect artist for your event</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.name}
              to={cat.href}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-lg shadow-black/10 hover:shadow-indigo-500/30 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 md:h-52 lg:h-60 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="pointer-events-none absolute -right-10 -top-10 w-24 h-24 rounded-full bg-indigo-500/20 blur-2xl" />
                <div className="pointer-events-none absolute -left-10 -bottom-10 w-28 h-28 rounded-full bg-purple-500/20 blur-2xl" />
              </div>

              <div className="p-5">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 uppercase tracking-wide">
                  <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                  {cat.name}
                </span>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">Explore top {cat.name.toLowerCase()} for your next event.</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-medium text-indigo-200">Browse</span>
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/10 text-indigo-200 group-hover:bg-white/20 transition">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
