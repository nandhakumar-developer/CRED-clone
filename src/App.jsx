import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UnderHeroReveal from './components/UnderHeroReveal';
import MobileRoundedVideo from './components/MobileRoundedVideo';
import HeroBanner from './components/HeroBanner';

import DoMoreSection from './components/DoMoreSection';
import UpgradeLifeCarousel from './components/UpgradeLifeCarousel';
import BallsFallingSection from './components/BallsFallingSection';
import SecuritySection from './components/SecuritySection';
import RatingsSection from './components/RatingsSection';
import NotEveryoneGetsIt from './components/NotEveryoneGetsIt';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black text-white font-sans min-h-screen overflow-x-hidden selection:bg-white selection:text-black">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Under Hero Text */}
      <UnderHeroReveal />

      {/* Scroll Triggered Mobile Video */}
      <MobileRoundedVideo />

      {/* Bold banner below video */}
      <HeroBanner />

      {/* Rotating Card Loop Split Section */}
      <DoMoreSection />

      {/* Horizontal Premium Products Slider */}
      <UpgradeLifeCarousel />

      {/* Falling Silver Balls Looping Video Background Section */}
      <BallsFallingSection />

      {/* Shield/Privacy Copy Centered Section */}
      <SecuritySection />

      {/* 4.8 Rating Badges & Cards */}
      <RatingsSection />

      {/* Glowing Door Slit membership qualifiers */}
      <NotEveryoneGetsIt />

      {/* Footer */}
      <Footer />
    </div>
  );
}
