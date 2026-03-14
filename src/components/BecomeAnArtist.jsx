import { Link } from 'react-router-dom'
import { Mic2 } from 'lucide-react'

export default function BecomeAnArtist() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 rounded-full bg-indigo-500/25 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center">
        <div className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-600/20 to-purple-600/10 p-12 md:p-16 shadow-2xl shadow-indigo-900/20">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-indigo-900/10 to-transparent" />

          <div className="relative">
            <div className="mx-auto inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-indigo-600/30 mb-6 ring-2 ring-indigo-400/40 animate-pulse">
              <Mic2 size={40} className="text-indigo-200" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Are You an Artist?</h2>
            <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Join India’s premier artist booking platform. Get discovered, receive bookings from events across the country, and grow your career. Create your profile, upload your portfolio, and start getting booked today.
            </p>

            <Link
              to="/join"
              className="mt-10 inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg shadow-indigo-900/30 transition-transform duration-200 hover:-translate-y-0.5 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200"
            >
              Join as Artist
              <span className="inline-flex h-2 w-2 rounded-full bg-white/70 animate-ping" />
            </Link>

            <p className="mt-6 text-sm text-gray-300 opacity-90">
              Tip: Use a clear profile photo and add samples of past events to stand out.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
