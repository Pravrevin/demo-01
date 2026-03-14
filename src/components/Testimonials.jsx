import { Star, Quote } from 'lucide-react'

const REVIEWS = [
  {
    name: 'Rajesh Kumar',
    eventType: 'Corporate Event',
    review: 'Booked a stand-up comedian for our annual day. The process was seamless and the performance was outstanding. Highly recommend!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Priya Sharma',
    eventType: 'Wedding',
    review: 'The singer we booked made our Sangeet unforgettable. The platform made it so easy to compare artists and book within our budget.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Vikram Mehta',
    eventType: 'College Fest',
    review: 'Got a full band for our college festival. Professional, punctual, and the crowd loved them. Will definitely use again.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
          <p className="mt-2 text-gray-400 max-w-xl mx-auto">Trusted by event organizers across India</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 hover:border-indigo-500/30 transition"
            >
              <Quote className="text-indigo-500/50 mb-4" size={32} />
              <p className="text-gray-300 leading-relaxed">"{r.review}"</p>
              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-sm text-indigo-400">{r.eventType}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
