import { Link } from 'react-router-dom'

export default function CardCarousel({ title, subtitle, items, type, fallbackImage }) {
  return (
    <section className="mb-14" id={type}>
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-gray-400 text-sm mt-0.5">{subtitle}</p>
        </div>
      </div>
      <div className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
        {items.map((item, i) => {
          const isMovieCard = type === 'movie' || type === 'premiere'
          const cardHref = isMovieCard && item.id ? `/movie/${item.id}` : '#'

          return (
            <Link
              key={i}
              to={cardHref}
              className="flex-shrink-0 group block"
            >
              <div className="relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all">
                <div className={isMovieCard ? 'w-[180px] h-[270px]' : 'w-[320px] h-[180px]'}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = fallbackImage || 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop'
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                  <p className="font-semibold text-white">{item.title}</p>
                  {item.genre && <p className="text-gray-400 text-sm">{item.genre}</p>}
                  {item.venue && <p className="text-gray-400 text-sm">{item.venue} · {item.date}</p>}
                  {item.release && <p className="text-indigo-400 text-sm">{item.release}</p>}
                </div>
              </div>
              {isMovieCard && (
                <p className="font-medium mt-2 text-gray-300 group-hover:text-white transition">{item.title}</p>
              )}
            </Link>
          )
        })}
      </div>
    </section>
  )
}
