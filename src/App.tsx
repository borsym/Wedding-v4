import { useState } from 'react';
import LandingPage from './components/LandingPage';
import landingBackground from './assets/landing-background.png';
import { cardsData } from './data/data.js';
import Card from './components/Card';

import Services from './components/Services';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import ContactUs from './components/ContactUs';
import VideoGalery from './components/VideoGalery';
import MapOfLocation from './components/MapOfLocation';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <header></header>
      {/*  dark:border-gray-600 */}
      <Navbar />
      {/* <main> */}
      {/* bg-gradient-to-b from-[#FFE9CF] to-[#f5f1ec] */}
      <LandingPage />
      <div className="flex flex-row justify-evenly align-baseline flex-wrap relative bg-white pb-10">
        {cardsData.map(
          ({ title, text, image, href, xCordForAnimation }, idx) => (
            <Card
              title={title}
              text={text}
              background={image}
              href={href}
              key={idx}
              idx={idx}
              xCordForAnimation={xCordForAnimation}
            />
          )
        )}
      </div>
      <Services />
      <AboutMe />
      <VideoGalery />
      <ContactUs />
      <MapOfLocation />
      {/* </main> */}
      <footer className="p-4 bg-white sm:p-6">
        <Footer />
      </footer>
    </>
  );
}

export default App;
