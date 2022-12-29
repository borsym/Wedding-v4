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
function App() {
  return (
    <>
      <LandingPage />

      <div className="flex flex-row justify-evenly align-baseline flex-wrap relative bg-[#EDE4D8] pb-10">
        {cardsData.map(({ title, text, image, href }, idx) => (
          <Card
            title={title}
            text={text}
            background={image}
            href={href}
            key={idx}
          />
        ))}
      </div>
      <div className="flex flex-col items-center flex-wrap">
        <Services />
      </div>
      <AboutMe />
      {/* <VideoGalery /> */}

      <div>
        {/* bal oldalt conact info olyan ami figmaban van egymas alatt legyenek a dolgok, a masik odlalt meg terkep lesz */}

        {/* ez nem responisve */}

        <ContactUs />
        <div className="mapWrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2676.1597690613958!2d21.83903277621004!3d47.87523387121568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474762c2c56829b1%3A0xf0c0d035f1798f39!2sNagyk%C3%A1ll%C3%B3%2C%20J%C3%B3zsef%20Attila%20utca%2024%2C%204320%20Hungary!5e0!3m2!1sen!2sus!4v1672095960557!5m2!1sen!2sus"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <Footer />
    </>

    // kell egy kep nezegeto meg
    // kell egy contect usos resz ami feljebb keszul
  );
}

export default App;
