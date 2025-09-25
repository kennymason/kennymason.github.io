// Experience.jsx
// Work History, Roles, and Technical Experience

import { useRef, useEffect, useState } from 'react';
import './Experience.css';

export default function Experience({ roles, cardWidth=350, gap=16, onSelect }){
  const trackRef = useRef(null);
  const [cardsPerPage, setCardsPerPage] = useState(1);
  const [translateX, setTranslateX] = useState(0);

  const totalCards = projects.length;
  const cardFullWidth = cardWidth + gap;
  const fullPageWidth = cardsPerPage * cardFullWidth;
  const totalWidth = totalCards * cardFullWidth;

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (trackRef.current) {
        const containerWidth = trackRef.current.offsetWidth;
        setCardsPerPage(Math.floor(containerWidth / (cardWidth + gap)));
      }
    };

    updateCardsPerPage(); // run once on mount
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, [cardWidth, gap]);

  const shift = (direction) => {
    if (!trackRef.current) return;

    let newOffset;

    if (direction === "left") {
      newOffset = Math.max(translateX - fullPageWidth, 0);
    } else {
      const remainingCards = totalCards - Math.round(translateX / cardFullWidth) - cardsPerPage;
      const numScrollCards = remainingCards >= cardsPerPage ? cardsPerPage : remainingCards;

      newOffset = translateX + numScrollCards * cardFullWidth;
    }

    setTranslateX(newOffset);
  };

  return (
    <div className="row-container">
      <div className="scroll-window" ref={trackRef}>
        <div
          className="scroll-track"
          style={{
            transform: `translateX(-${translateX}px)`,
            transition: "transform 0.5s ease",
            gap: `${gap}px`,
          }}
        >
          {projects.map((project, index) => (
            (category === "all" || category === project.category) &&
              <div
                id={project.id}
                key={index}
                className="card-container"
                onClick={onSelect}
                style={{ minWidth: `${cardWidth}px`, maxWidth: `${cardWidth}px` }}
              >
                <div className='card-type'>{ project.type }</div>
                <img className="card-image" src={ project.image }/>
                <h3 className="card-title">{ project.title }</h3>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}
