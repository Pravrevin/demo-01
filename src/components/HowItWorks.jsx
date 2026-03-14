import { Search, CalendarCheck, CreditCard } from 'lucide-react'

const STEPS = [
  {
    icon: Search,
    title: 'Browse Artists or Events',
    description: 'Search by category, city, or artist name to find the perfect fit for your event.',
  },
  {
    icon: CalendarCheck,
    title: 'Select Event Date or Request Booking',
    description: 'Choose your preferred date and send a booking request. Artists respond within 24 hours.',
  },
  {
    icon: CreditCard,
    title: 'Confirm Booking and Make Payment',
    description: 'Secure payment through our platform. Get instant confirmation and event details.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-20 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="mt-2 text-gray-400 max-w-xl mx-auto">Book your favorite artist in three simple steps</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
            <div key={i} className="relative text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 mb-6">
                <Icon size={36} className="text-indigo-400" />
              </div>
              <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold">
                {i + 1}
              </span>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-indigo-500/50 to-transparent" />
              )}
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
