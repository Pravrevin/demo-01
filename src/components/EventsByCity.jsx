import { Link } from 'react-router-dom'

const CITIES = [
  {
    name: 'Delhi',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=90',
    eventCount: 24,
    href: '/events/city/delhi',
  },
  {
    name: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=600&q=90',
    eventCount: 32,
    href: '/events/city/mumbai',
  },
  {
    name: 'Bangalore',
    image: '/images/banglore.jpg',
    eventCount: 28,
    href: '/events/city/bangalore',
  },
  {
    name: 'Hyderabad',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=90',
    eventCount: 18,
    href: '/events/city/hyderabad',
  },
  {
    name: 'Chennai',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=90',
    eventCount: 15,
    href: '/events/city/chennai',
  },
  {
    name: 'Pune',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=90',
    eventCount: 12,
    href: '/events/city/pune',
  },
]

export default function EventsByCity() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Events by City</h2>
          <p className="mt-2 text-gray-400 max-w-xl mx-auto">Explore shows happening in your city</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CITIES.map((city) => (
            <Link
              key={city.name}
              to={city.href}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 hover:border-indigo-500/50 transition"
            >
              <img
                src={city.image}
                alt={city.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <span className="font-bold text-lg text-white">{city.name}</span>
                <span className="text-sm text-gray-300">{city.eventCount} events</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
