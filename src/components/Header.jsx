// Header.jsx
// Site Header and info

import { useState, useEffect } from 'react';
import './Header.scss'

export default function Header(){
  const imagesPath = "../../files/images/chess-cards/";
  const defaultImages = [
    "jack",
    "queen",
    "king",
    "ace"
  ];
  const jokerImage = "joker";
  const [currentImages, setCurrentImages] = useState(defaultImages);
  const [currentReplaced, setCurrentReplaced] = useState(-1);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [codeToggle, setCodeToggle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger glitch effect
      setGlitchEffect(true);

      // Swap card images for code-cards
      setTimeout(() => {
        setCodeToggle(true);
      }, 600);

      // Disable glitch animation
      setTimeout(() => setGlitchEffect(false), 1000);

      setTimeout(() => setGlitchEffect(true), 3000);

      // Timeout to align card switch with glitch animation
      setTimeout(() => {
        // Swap back to normal card images
        setCodeToggle(false);

        // Set new images
        setCurrentImages((prev) => {
          // Create a shallow copy of the default image filenames
          let newImages = [...defaultImages];

          // Restore previously replaced image
          if (currentReplaced !== -1) {
            newImages[currentReplaced] = defaultImages[currentReplaced];
          }

          // Randomize card selection
          const index = Math.floor(Math.random() * 5);

          // Replace selected card (if not the joker)
          if (index == 4) {
            setCurrentReplaced(-1);
          } else {
            newImages[index] = jokerImage;
            setCurrentReplaced(index);
          }

          return newImages;
        });
      }, 3600);

      setTimeout(() => setGlitchEffect(false), 4000);

    }, 8000);

    return () => clearInterval(interval);
  }, [currentReplaced]);

  return(
    <div className="header-container">

      {/* <!-- External links & contact buttons --> */}
      <div className="contact">
        <a className="fa fa-square-envelope" href="mailto:kennymmase@gmail.com"></a>
        <a className="fa fa-github-square" href="https://github.com/kennymason"></a>
        <a className="fa fa-linkedin-square" href="https://www.linkedin.com/in/masonkenneth/"></a>
      </div>

      {/* Heading */}
      <h1 className="header-name glitch-heading">Kenny Mason</h1>

      {/* Background Images */}
      <div className={`bg-images-container ${glitchEffect ? 'glitching' : ''}`}>
        { currentImages.map((card, i) => (
          <img
            key={i}
            src={ codeToggle ? `${imagesPath}${card}-code.png` : `${imagesPath}${card}.png` }
            alt={card}
            className={`${card} bg-img`}
            onClick={() => { if (card === "joker") alert(`Clicked ${card}`) } }
          />
        )) }
      </div>

    </div>
  );
}
