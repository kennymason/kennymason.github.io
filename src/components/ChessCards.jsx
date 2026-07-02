// ChessCards.jsx
// Custom Chess-styled cards with easter egg

import { useState, useEffect, useRef } from 'react';
import './ChessCards.css'

export default function ChessCards({ jokerCaught, onCatchJoker }){
  const imagesPath = "/chess-cards/";
  const defaultImages = [
    "jack",
    "queen",
    "king",
    "ace"
  ];
  const jokerImage = "joker";
  const [currentImages, setCurrentImages] = useState(defaultImages);
  // Use a ref so reads inside the interval always see the latest value without
  // making it a dependency (which would tear down and restart the interval on
  // every cycle, causing stale closures and biased randomization).
  const currentReplacedRef = useRef(-1);
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

        // Always start from a clean slate of default images
        const newImages = [...defaultImages];

        // Once caught, joker never appears again; otherwise pick any position
        if (!jokerCaught) {
          const index = Math.floor(Math.random() * defaultImages.length);
          newImages[index] = jokerImage;
          currentReplacedRef.current = index;
        } else {
          currentReplacedRef.current = -1;
        }

        setCurrentImages(newImages);
      }, 3600);

      setTimeout(() => setGlitchEffect(false), 4000);

    }, 8000);

    return () => clearInterval(interval);
  }, [jokerCaught]);

  const catchJoker = (i) => {
    alert(`Catch me if you can!`);
    // Immediately restore the caught card to its default so the joker disappears
    setCurrentImages((prev) => {
      const newImages = [...prev];
      newImages[i] = defaultImages[i];
      return newImages;
    });
    currentReplacedRef.current = -1;
    onCatchJoker();
  };

  return(
    <div className="cards-container">

      {/* Card Images */}
      <div className={`bg-images-container ${glitchEffect ? 'glitching' : ''}`}>
        { currentImages.map((card, i) => (
          <img
            key={i}
            src={ codeToggle ? `${imagesPath}${card}-code.png` : `${imagesPath}${card}.png` }
            alt={card}
            className={`${card} bg-img`}
            onClick={() => { if (card === "joker") catchJoker(i); } }
          />
        )) }
      </div>

    </div>
  );
}
