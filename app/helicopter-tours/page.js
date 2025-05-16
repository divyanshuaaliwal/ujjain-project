// import Header from '../container/Header/Header';
// import Hero from '../container/Hero/Hero';
import TourOverview from '../container/TourOverview';
import Gallery from '../container/Gallery';
import TourDetails from '../container/TourDetails';
// import Itinerary from '../container/Itinerary/Itinerary';
// import Booking from '../container/Booking/Booking';
// import Footer from '../container/Footer/Footer';

export default function Home() {
  return (
    <main>
      {/* <Header /> */}
      {/* <Hero /> */}
      {/* <div className="container"> */}
        <TourOverview />
        <Gallery />
        <TourDetails />
        {/* <Itinerary /> */}
        {/* <Booking /> */}
      {/* </div> */}
      {/* <Footer /> */}
    </main>
  );
}