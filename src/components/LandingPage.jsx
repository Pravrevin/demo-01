import HeroBanner from './HeroBanner'
import TrendingEvents from './TrendingEvents'
import BrowseByCategory from './BrowseByCategory'
import FeaturedComedians from './FeaturedComedians'
import FeaturedArtists from './FeaturedArtists'
import UpcomingEvents from './UpcomingEvents'
import EventsByCity from './EventsByCity'
import HowItWorks from './HowItWorks'
import Testimonials from './Testimonials'
import BecomeAnArtist from './BecomeAnArtist'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <div className="relative z-10">
      <HeroBanner />
      <TrendingEvents />
      <BrowseByCategory />
      <FeaturedComedians />
      <FeaturedArtists />
      <UpcomingEvents />
      <EventsByCity />
      <HowItWorks />
      <Testimonials />
      <BecomeAnArtist />
      <Footer />
    </div>
  )
}
