import './App.css'
import Navbar from './component/Navbar/Navbar'
import HeroSection from "./component/HeroSection/HeroSection";
import UpcomingExams from './component/UpcomingExams/UpcomingExams';
import CardsSection from './component/CardsSlider/CardsSlider';
import StatsSection from './component/StatsSection/StatsSection';
import FaqAccordion from './component/FaqAccordion/FaqAccordion';
import SubscribeSection from './component/SubscribeSection/SubscribeSection';
import Footer from './component/Footer/Footer';

function App() {

  return (
    <>
      < Navbar />
      < HeroSection />
      < UpcomingExams />
      < CardsSection />
      < StatsSection />
      < FaqAccordion />
      < SubscribeSection />
      < Footer />
    </>
  )
}

export default App