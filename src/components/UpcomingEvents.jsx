import { Link } from 'react-router-dom'
import { MapPin, Calendar } from 'lucide-react'

const EVENTS = [
  {
    id: 1,
    title: 'Comedy Circus',
    artist: 'Kapil Sharma',
    city: 'Mumbai',
    date: 'Apr 12, 2025',
    price: '₹999',
    image: '/images/comedy-circus.jpg',
  },
  {
    id: 2,
    title: 'Indie Night Live',
    artist: 'Prateek Kuhad',
    city: 'Bangalore',
    date: 'Apr 18, 2025',
    price: '₹1,499',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=90',
  },
  {
    id: 3,
    title: 'Bollywood Unplugged',
    artist: 'Arijit Singh',
    city: 'Delhi',
    date: 'Apr 25, 2025',
    price: '₹3,999',
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&q=90',
  },
  {
    id: 4,
    title: 'Club Night',
    artist: 'DJ Snake',
    city: 'Goa',
    date: 'May 1, 2025',
    price: '₹2,499',
    image: '/images/club-night.jpg',
  },
]

export default function UpcomingEvents() {
  return (
    <section className="py-16 md:py-20 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Upcoming Events</h2>
            <p className="mt-2 text-gray-400">Shows you won't want to miss</p>
          </div>
          <Link
            to="/events/upcoming"
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium"
          >
            See All Upcoming
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENTS.map((event) => (
            <Link
              key={event.id}
              to={`/events/${event.id}`}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-indigo-500/50 hover:bg-white/[0.07] transition"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5 flex-1">
                <h3 className="font-semibold text-lg group-hover:text-indigo-400 transition">{event.title}</h3>
                <p className="text-sm text-indigo-400 mt-1">{event.artist}</p>
                <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} /> {event.city}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} /> {event.date}
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold text-indigo-400">{event.price}</span>
                  <span className="text-sm font-medium text-indigo-400 group-hover:underline">
                    View Event
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
