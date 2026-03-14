import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import MovieDetailPage from './components/MovieDetailPage'
import BookingPage from './components/BookingPage'

function App() {
  return (
    <div className="font-sans text-white overflow-hidden relative min-h-screen" style={{ backgroundColor: '#09090E' }}>
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="glow-sphere w-64 h-64 bg-purple-600 top-[-10%] left-[-5%] opacity-30" />

      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movie/:movieId" element={<MovieDetailPage />} />
        <Route path="/movie/:movieId/booking" element={<BookingPage />} />
      </Routes>
    </div>
  )
}

export default App
