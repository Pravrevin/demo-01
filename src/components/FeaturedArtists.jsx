import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'

const ARTISTS = [
  {
    id: 1,
    name: 'Amit Bhadana',
    category: 'Stand-up Comedian',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=90',
    rating: 4.9,
    tagline: 'India\'s most subscribed comedy creator',
  },
  {
    id: 2,
    name: 'Neha Kakkar',
    category: 'Singer',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=90',
    rating: 4.8,
    tagline: 'Bollywood playback sensation',
  },
  {
    id: 3,
    name: 'Shraddha Sharma',
    category: 'Dancer',
    image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&q=90',
    rating: 4.9,
    tagline: 'Contemporary & Bollywood choreographer',
  },
  {
    id: 4,
    name: 'DJ Chetas',
    category: 'DJ',
    image: '/images/dj.jpg',
    rating: 4.7,
    tagline: 'Wedding & party specialist',
  },
]

export default function FeaturedArtists() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Artists</h2>
            <p className="mt-2 text-gray-400">Top performers ready to make your event memorable</p>
          </div>
          <Link
            to="/artists"
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium"
          >
            View All Artists
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTISTS.map((artist) => (
            <div
              key={artist.id}
              className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-indigo-500/50 hover:bg-white/[0.07] transition"
            >
              <Link to={`/artists/${artist.id}`} className="block">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg group-hover:text-indigo-400 transition">{artist.name}</h3>
                  <p className="text-sm text-indigo-400">{artist.category}</p>
                  <div className="mt-2 flex items-center gap-1">
                    <Star size={16} className="fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium">{artist.rating}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-400 line-clamp-2">{artist.tagline}</p>
                </div>
              </Link>
              <div className="px-5 pb-5 flex gap-3">
                <Link
                  to={`/artists/${artist.id}`}
                  className="flex-1 py-2.5 rounded-lg border border-white/20 text-center text-sm font-medium hover:bg-white/10 transition"
                >
                  View Profile
                </Link>
                <Link
                  to={`/book/${artist.id}`}
                  className="flex-1 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-center text-sm font-medium transition"
                >
                  Book Artist
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
