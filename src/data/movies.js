export const MOVIES = [
  {
    id: 'blockbuster-action',
    title: 'Blockbuster Action',
    genre: 'Action',
    language: 'English, Hindi',
    duration: '2h 22m',
    certification: 'UA13+',
    rating: 8.5,
    votes: '12.4K votes',
    image: '/images/movie1.jpg',
    banner: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1400&h=700&fit=crop',
    description:
      'A retired covert operator is forced back into the field when a global weapons syndicate targets his family. With impossible odds and a ticking clock, he must assemble an unlikely team to stop a city-wide catastrophe.',
    cast: [
      { name: 'Aarav Mehra', role: 'Rohan / Lead', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop' },
      { name: 'Sara Khanna', role: 'Maya / Analyst', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=160&h=160&fit=crop' },
      { name: 'Vihaan Roy', role: 'Khan / Tactical', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&h=160&fit=crop' },
      { name: 'Ira Sen', role: 'Elena / Antagonist', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&h=160&fit=crop' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=360&fit=crop',
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=360&fit=crop',
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=360&fit=crop',
      'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&h=360&fit=crop',
    ],
    reviews: [
      { user: 'Ritika S.', score: 9, comment: 'Massive action set pieces and a tight second half. Theatre watch!', time: '2h ago' },
      { user: 'Neel P.', score: 8, comment: 'Great background score and visuals. Slightly predictable ending.', time: '6h ago' },
      { user: 'Aman V.', score: 9, comment: 'Lead performances are superb. Totally worth premium format.', time: '1d ago' },
    ],
    showDates: ['Today', 'Tomorrow', 'Sun, 16 Mar', 'Mon, 17 Mar'],
    showtimes: ['10:30 AM', '1:45 PM', '5:10 PM', '8:40 PM'],
    seatPrice: 220,
  },
  {
    id: 'midnight-drama',
    title: 'Midnight Drama',
    genre: 'Drama',
    language: 'Hindi',
    duration: '2h 05m',
    certification: 'UA16+',
    rating: 8.2,
    votes: '8.1K votes',
    image: '/images/movie2.jpg',
    banner: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=1400&h=700&fit=crop',
    description:
      'On one rain-soaked night, four strangers cross paths at a suburban railway station and uncover secrets that tie their lives together in unexpected ways.',
    cast: [
      { name: 'Kabir Bhasin', role: 'Arjun', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=160&h=160&fit=crop' },
      { name: 'Misha Rao', role: 'Naina', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=160&h=160&fit=crop' },
      { name: 'Pranay Gupta', role: 'Inspector Dev', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=600&h=360&fit=crop',
      'https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=600&h=360&fit=crop',
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=600&h=360&fit=crop',
    ],
    reviews: [
      { user: 'Ananya K.', score: 8, comment: 'Emotional and grounded storytelling with excellent acting.', time: '4h ago' },
      { user: 'Rohit M.', score: 9, comment: 'Unexpectedly powerful climax. One of the best dramas this year.', time: '1d ago' },
    ],
    showDates: ['Today', 'Tomorrow', 'Sun, 16 Mar'],
    showtimes: ['11:20 AM', '3:00 PM', '7:25 PM'],
    seatPrice: 180,
  },
]

export function getMovieById(movieId) {
  return MOVIES.find((movie) => movie.id === movieId)
}

export function getRecommendedMovies(genre) {
  if (!genre) return MOVIES

  const matchingGenre = MOVIES.filter((movie) => movie.genre === genre)
  return matchingGenre.length ? matchingGenre : MOVIES
}

