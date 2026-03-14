const CATEGORIES = [
  { name: 'Movies', icon: '🎬', href: '#movies' },
  { name: 'Stream', icon: '📺', href: '#stream' },
  { name: 'Events', icon: '🎉', href: '#events' },
  { name: 'Plays', icon: '🎭', href: '#plays' },
  { name: 'Sports', icon: '⚽', href: '#sports' },
  { name: 'Activities', icon: '🎯', href: '#activities' },
]

export default function CategorySection() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
      {CATEGORIES.map((cat) => (
        <a
          key={cat.name}
          href={cat.href}
          className="flex flex-col items-center gap-2 min-w-[80px] p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all group"
        >
          <span className="text-2xl group-hover:scale-110 transition-transform">{cat.icon}</span>
          <span className="text-sm font-medium text-gray-300 group-hover:text-white">{cat.name}</span>
        </a>
      ))}
    </div>
  )
}
