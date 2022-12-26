import { useState } from 'react';
import LandingPage from './components/LandingPage';
import landingBackground from './assets/landing-background.png';
import cardsData from './data/cards.js';
import Card from './components/Card';

function App() {
  return (
    <>
      <LandingPage />
      {/* nem jo a box shadow amiatt mert rounded a cucc!! sarkoknal latszik*/}
      <div className="flex flex-row justify-evenly align-baseline flex-wrap relative">
        {cardsData.map(({ title, text, image }, idx) => (
          <Card title={title} text={text} background={image} key={idx} />
        ))}
      </div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
    </>
  );
}

export default App;
