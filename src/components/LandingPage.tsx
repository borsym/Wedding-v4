import React from 'react';
import LandingBackground from '../assets/landing-background.png';
import LandingBackgroundPlaceholder from '../assets/landing-background-blur.png';
import Navbar from './Navbar';
import HeroSection from './HeroSection';

function LandingPage() {
  return (
    <div className="relativ">
      <div className="bg-landing-page h-screen w-full bg-cover bg-center brightness-90">
        <Navbar /> {/* Ez itt nagyon rossz helyen van!*/}
        <HeroSection />
      </div>
    </div>
  );
}

export default LandingPage;
