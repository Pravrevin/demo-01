import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CalendarDays, Clock3, MapPin, MonitorPlay, Ticket, ChevronRight } from 'lucide-react'
import { getMovieById } from '../data/movies'

const THEATRE = {
  name: 'PVR Icon Luxe',
  location: 'City Centre Mall, Screen 3',
  format: '4K Laser · Dolby Atmos',
}

const SEAT_ZONES = [
  {
    id: 'premium',
    label: 'Premium',
    price: 320,
    rows: ['A', 'B'],
    seatsPerRow: 12,
    aislesAfter: [4, 8],
    blocked: ['A3', 'A10', 'B6'],
  },
  {
    id: 'executive',
    label: 'Executive',
    price: 260,
    rows: ['C', 'D', 'E'],
    seatsPerRow: 14,
    aislesAfter: [5, 9],
    blocked: ['C2', 'C11', 'D7', 'E4', 'E12'],
  },
  {
    id: 'classic',
    label: 'Classic',
    price: 190,
    rows: ['F', 'G', 'H'],
    seatsPerRow: 14,
    aislesAfter: [5, 9],
    blocked: ['F1', 'F8', 'G6', 'H10'],
  },
]

const BOOKING_FEE = 49

function getSeatMeta(seatId) {
  for (const zone of SEAT_ZONES) {
    const row = seatId.slice(0, 1)
    if (zone.rows.includes(row)) {
      return { zone: zone.label, price: zone.price, zoneId: zone.id }
    }
  }

  return { zone: 'Seat', price: 0, zoneId: 'unknown' }
}

function isBlockedSeat(seatId) {
  return SEAT_ZONES.some((zone) => zone.blocked.includes(seatId))
}

export default function BookingPage() {
  const { movieId } = useParams()
  const movie = getMovieById(movieId)
  const [selectedDate, setSelectedDate] = useState(movie?.showDates?.[0] || 'Today')
  const [selectedTime, setSelectedTime] = useState(movie?.showtimes?.[0] || '10:30 AM')
  const [selectedSeats, setSelectedSeats] = useState([])

  const selectedSeatDetails = useMemo(
    () => selectedSeats.map((seatId) => ({ id: seatId, ...getSeatMeta(seatId) })),
    [selectedSeats],
  )

  const subtotal = useMemo(
    () => selectedSeatDetails.reduce((sum, seat) => sum + seat.price, 0),
    [selectedSeatDetails],
  )

  const totalPrice = useMemo(
    () => (selectedSeatDetails.length ? subtotal + BOOKING_FEE : 0),
    [selectedSeatDetails.length, subtotal],
  )

  if (!movie) {
    return (
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <p className="text-xl text-gray-300">Movie not found.</p>
        <Link to="/" className="inline-block mt-4 text-indigo-400 hover:text-indigo-300">
          Back to Home
        </Link>
      </div>
    )
  }

  function toggleSeat(seatId) {
    if (isBlockedSeat(seatId)) return
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((id) => id !== seatId) : [...prev, seatId],
    )
  }

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-10 pb-28 lg:pb-10">
      <Link to={`/movie/${movie.id}`} className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition">
        {'<-'} Back to details
      </Link>

      <section className="mt-5 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
        <div className="grid lg:grid-cols-[220px_1fr] gap-0">
          <div className="hidden lg:block h-full bg-black/20">
            <img src={movie.image || movie.banner} alt={movie.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-6 md:p-8 space-y-5">
            <div>
              <p className="text-sm text-indigo-300 font-medium">Ticket Booking</p>
              <h1 className="text-3xl md:text-4xl font-bold mt-1">{movie.title}</h1>
              <p className="text-gray-300 mt-2 text-sm md:text-base">
                {movie.genre} • {movie.language} • {movie.duration} • {movie.certification}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="rounded-xl border border-white/10 bg-black/20 p-4 flex items-start gap-3">
                <MapPin size={16} className="text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">{THEATRE.name}</p>
                  <p className="text-gray-400 mt-1">{THEATRE.location}</p>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4 flex items-start gap-3">
                <MonitorPlay size={16} className="text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Format</p>
                  <p className="text-gray-400 mt-1">{THEATRE.format}</p>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4 flex items-start gap-3">
                <Ticket size={16} className="text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Seats selected</p>
                  <p className="text-gray-400 mt-1">
                    {selectedSeats.length ? `${selectedSeats.length} selected` : 'Choose your seats'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_340px] gap-8 mt-8 items-start">
        <div className="space-y-6">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 mb-4">
              <CalendarDays size={18} className="text-indigo-400" />
              <h2 className="text-xl font-semibold">Choose date</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {movie.showDates.map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`px-4 py-3 rounded-xl border text-sm font-medium transition ${
                    selectedDate === date
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-900/30'
                      : 'bg-black/10 border-white/10 text-gray-300 hover:border-indigo-400 hover:text-white'
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock3 size={18} className="text-indigo-400" />
              <h2 className="text-xl font-semibold">Choose showtime</h2>
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
              {movie.showtimes.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`rounded-xl border p-4 text-left transition ${
                    selectedTime === time
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-900/30'
                      : 'bg-black/10 border-white/10 text-gray-300 hover:border-indigo-400 hover:text-white'
                  }`}
                >
                  <p className="font-semibold">{time}</p>
                  <p className={`text-xs mt-1 ${selectedTime === time ? 'text-indigo-100' : 'text-gray-500'}`}>
                    {THEATRE.name}
                  </p>
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
              <div>
                <h2 className="text-xl font-semibold">Select seats</h2>
                <p className="text-sm text-gray-400 mt-1">Choose your preferred view from the theatre layout below.</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-gray-300">
                <span className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1.5 border border-white/10">
                  <span className="w-3 h-3 rounded-sm border border-white/30 bg-transparent" /> Available
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1.5 border border-white/10">
                  <span className="w-3 h-3 rounded-sm bg-indigo-600" /> Selected
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1.5 border border-white/10">
                  <span className="w-3 h-3 rounded-sm bg-gray-700" /> Occupied
                </span>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-black/20 px-3 md:px-6 py-6 md:py-8 overflow-x-auto">
              <div className="min-w-[720px] space-y-8">
                <div className="space-y-3">
                  <div className="mx-auto h-3 w-[72%] rounded-full bg-gradient-to-r from-transparent via-indigo-300/80 to-transparent" />
                  <div className="mx-auto w-[82%] rounded-[999px] border border-indigo-300/20 bg-indigo-300/10 py-3 text-center text-xs uppercase tracking-[0.35em] text-indigo-100">
                    All eyes this way — screen
                  </div>
                </div>

                {SEAT_ZONES.map((zone) => (
                  <div key={zone.id} className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold">{zone.label}</p>
                        <p className="text-xs text-gray-500">Rs. {zone.price} per seat</p>
                      </div>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>

                    <div className="space-y-3">
                      {zone.rows.map((row) => (
                        <div key={row} className="grid grid-cols-[32px_1fr_32px] items-center gap-3">
                          <span className="text-sm text-gray-500 font-medium text-center">{row}</span>
                          <div className="flex justify-center gap-1.5">
                            {Array.from({ length: zone.seatsPerRow }, (_, index) => {
                              const col = index + 1
                              const seatId = `${row}${col}`
                              const isBlocked = zone.blocked.includes(seatId)
                              const isSelected = selectedSeats.includes(seatId)
                              const addAisle = zone.aislesAfter.includes(col)

                              return (
                                <div key={seatId} className={`flex ${addAisle ? 'mr-3 md:mr-5' : ''}`}>
                                  <button
                                    onClick={() => toggleSeat(seatId)}
                                    disabled={isBlocked}
                                    aria-label={`Seat ${seatId}`}
                                    className={`w-8 h-8 md:w-9 md:h-9 rounded-t-lg rounded-b-md text-[10px] font-medium border transition ${
                                      isBlocked
                                        ? 'bg-gray-800 border-gray-700 text-gray-600 cursor-not-allowed'
                                        : isSelected
                                          ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-900/30'
                                          : 'bg-transparent border-white/20 text-gray-300 hover:border-indigo-400 hover:text-white hover:bg-white/5'
                                    }`}
                                  >
                                    {col}
                                  </button>
                                </div>
                              )
                            })}
                          </div>
                          <span className="text-sm text-gray-500 font-medium text-center">{row}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 h-fit sticky top-20 space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Booking Summary</h3>
            <p className="text-sm text-gray-400 mt-1">Review your selection before payment.</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4 space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <span className="text-gray-400">Movie</span>
              <span className="text-right font-medium">{movie.title}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-gray-400">Date</span>
              <span className="text-right font-medium">{selectedDate}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-gray-400">Time</span>
              <span className="text-right font-medium">{selectedTime}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-gray-400">Venue</span>
              <span className="text-right font-medium">{THEATRE.name}</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Selected seats</p>
              <p className="text-xs text-gray-500">{selectedSeats.length} chosen</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-4 min-h-[120px]">
              {selectedSeatDetails.length ? (
                <div className="flex flex-wrap gap-2">
                  {selectedSeatDetails.map((seat) => (
                    <span
                      key={seat.id}
                      className="inline-flex items-center gap-2 rounded-full bg-indigo-600/15 border border-indigo-500/30 text-indigo-100 px-3 py-1.5 text-xs"
                    >
                      {seat.id}
                      <span className="text-indigo-200/80">• {seat.zone}</span>
                    </span>
                  ))}
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-sm text-gray-500 text-center">
                  Select seats from the layout to see them here.
                </div>
              )}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4 space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <span className="text-gray-400">Seat subtotal</span>
              <span className="font-medium">Rs. {subtotal}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-gray-400">Convenience fee</span>
              <span className="font-medium">Rs. {selectedSeatDetails.length ? BOOKING_FEE : 0}</span>
            </div>
            <div className="pt-3 border-t border-white/10 flex justify-between gap-4 text-base">
              <span className="font-semibold">Amount payable</span>
              <span className="font-bold text-xl">Rs. {totalPrice}</span>
            </div>
          </div>

          <button
            disabled={!selectedSeats.length}
            className="w-full py-3.5 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed transition"
          >
            Continue to payment
          </button>

          <p className="text-xs text-gray-500 leading-5">
            Tickets are subject to theatre terms, seat availability, and convenience charges at checkout.
          </p>
        </aside>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#09090E]/90 backdrop-blur-xl px-4 py-3 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs text-gray-500">Payable</p>
          <p className="text-lg font-semibold">Rs. {totalPrice}</p>
        </div>
        <button
          disabled={!selectedSeats.length}
          className="px-5 py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold disabled:bg-gray-700 disabled:text-gray-400 inline-flex items-center"
        >
          Continue <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  )
}

