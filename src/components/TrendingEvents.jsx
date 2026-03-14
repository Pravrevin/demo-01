import { Link } from 'react-router-dom'
import { ChevronRight, MapPin, Calendar } from 'lucide-react'

const EVENTS = [
  {
    id: 1,
    name: 'Stand-Up Comedy Night',
    artist: 'Amit Bhadana',
    image: '/images/comedians/kenny-sebastian.png',
    date: 'Mar 22, 2025',
    location: 'Jawaharlal Nehru Stadium, Delhi',
    price: '₹499',
  },
  {
    id: 2,
    name: 'Indie Music Concert',
    artist: 'The Local Train',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=90',
    date: 'Mar 25, 2025',
    location: 'Phoenix Mall, Mumbai',
    price: '₹999',
  },
  {
    id: 3,
    name: 'EDM Night',
    artist: 'DJ Nucleya',
    image: '/images/edm-night.jpg',
    date: 'Mar 28, 2025',
    location: 'Koramangala, Bangalore',
    price: '₹1,499',
  },
  {
    id: 4,
    name: 'Bollywood Night',
    artist: 'Arijit Singh',
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&q=90',
    date: 'Apr 5, 2025',
    location: 'Gachibowli Stadium, Hyderabad',
    price: '₹2,999',
  },
]

export default function TrendingEvents() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Trending Events</h2>
            <p className="mt-2 text-gray-400">Don't miss the hottest shows happening near you</p>
          </div>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium"
          >
            View All Events <ChevronRight size={20} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENTS.map((event) => (
            <Link
              key={event.id}
              to={`/events/${event.id}`}
              className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-indigo-500/50 hover:bg-white/[0.07] transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg group-hover:text-indigo-400 transition">{event.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{event.artist}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} /> {event.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} /> {event.location.split(',')[0]}
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-indigo-400 font-semibold">From {event.price}</span>
                  <span className="px-4 py-2 rounded-lg bg-indigo-600/20 text-indigo-400 text-sm font-medium group-hover:bg-indigo-600/30">
                    Book Now
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
