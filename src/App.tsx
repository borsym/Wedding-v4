import { useState } from 'react';
import LandingPage from './components/LandingPage';
import landingBackground from './assets/landing-background.png';
import { cardsData } from './data/data.js';
import Card from './components/Card';

import Services from './components/Services';
function App() {
  return (
    <>
      <LandingPage />
      {/* nem jo a box shadow amiatt mert rounded a cucc!! sarkoknal latszik*/}
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
    </>
  );
}

export default App;
