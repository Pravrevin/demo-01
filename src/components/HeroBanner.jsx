import { Link } from 'react-router-dom'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=90&fit=crop'

export default function HeroBanner() {
  return (
    <div className="relative w-full h-[75vh] min-h-[500px] md:h-[80vh] overflow-hidden">
      <img
        src={HERO_IMAGE}
        alt="Live performance"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white max-w-4xl leading-tight">
          Book the Best Artists for Your Event
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
          Stand-up comedians, singers, dancers, DJs, magicians & more — one platform, endless possibilities
        </p>
        <div className="mt-8 w-full max-w-2xl">
          <div className="flex flex-col sm:flex-row gap-3 bg-white/10 backdrop-blur-xl rounded-2xl p-2 border border-white/20">
            <input
              type="text"
              placeholder="Search artists or events..."
              className="flex-1 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
            />
            <button className="px-6 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold text-white transition whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            to="/artists"
            className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition shadow-lg shadow-indigo-900/30"
          >
            Browse Artists
          </Link>
          <Link
            to="/book"
            className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold backdrop-blur-sm transition"
          >
            Book an Artist
          </Link>
        </div>
      </div>
    </div>
  )
}
