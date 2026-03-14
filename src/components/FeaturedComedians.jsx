import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'

const COMEDIANS = [
  { id: 1, name: 'Anubhav Singh Bassi', image: '/images/comedians/anubhav-singh-bassi.png', rating: 4.9, tagline: 'Cheater Bhaiya sensation' },
  { id: 2, name: 'Abhishek Upmanyu', image: '/images/comedians/abhishek-upmanyu.png', rating: 4.9, tagline: 'Witty observations & dry humor' },
  { id: 3, name: 'Kenny Sebastian', image: '/images/comedians/kenny-sebastian.png', rating: 4.8, tagline: 'Music, comedy & storytelling' },
  { id: 4, name: 'Harsh Gujral', image: '/images/comedians/harsh-gujral.png', rating: 4.8, tagline: 'Observational comedy maestro' },
  { id: 5, name: 'Rahul Subramanian', image: '/images/comedians/rahul-subramanian.png', rating: 4.9, tagline: 'Corporate comedy specialist' },
  { id: 6, name: 'Atul Khatri', image: '/images/comedians/atul-khatri.png', rating: 4.7, tagline: 'CEO turned comedian' },
  { id: 7, name: 'Amit Tandon', image: '/images/comedians/amit-tandon.png', rating: 4.8, tagline: 'Marriage & family humor' },
  { id: 8, name: 'Kanan Gill', image: '/images/comedians/kanan-gill.png', rating: 4.8, tagline: 'Pretentious Movie Reviews fame' },
  { id: 9, name: 'Aditi Mittal', image: '/images/comedians/aditi-mittal.png', rating: 4.9, tagline: 'Pioneer of Indian women comedy' },
  { id: 10, name: 'Samay Raina', image: '/images/comedians/samay-raina.png', rating: 4.8, tagline: 'Chess, comedy & streams' },
]

export default function FeaturedComedians() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Stand-up Comedians</h2>
            <p className="mt-2 text-gray-400">Book India&apos;s top comedians for your next event</p>
          </div>
          <Link
            to="/artists/comedians"
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium"
          >
            View All Comedians
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {COMEDIANS.map((comedian) => (
            <div
              key={comedian.id}
              className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-indigo-500/50 hover:bg-white/[0.07] transition"
            >
              <Link to={`/artists/${comedian.id}`} className="block">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={comedian.image}
                    alt={comedian.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold group-hover:text-indigo-400 transition line-clamp-2">{comedian.name}</h3>
                  <div className="mt-1 flex items-center gap-1">
                    <Star size={14} className="fill-amber-400 text-amber-400 shrink-0" />
                    <span className="text-sm font-medium">{comedian.rating}</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-400 line-clamp-2">{comedian.tagline}</p>
                </div>
              </Link>
              <div className="px-4 pb-4 flex gap-2">
                <Link
                  to={`/artists/${comedian.id}`}
                  className="flex-1 py-2 rounded-lg border border-white/20 text-center text-xs font-medium hover:bg-white/10 transition"
                >
                  Profile
                </Link>
                <Link
                  to={`/book/${comedian.id}`}
                  className="flex-1 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-center text-xs font-medium transition"
                >
                  Book
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
