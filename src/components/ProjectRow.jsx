// ProjectRow.jsx
// Rotating row display for ProjectCards

import { useRef, useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import './ProjectRow.scss';

export default function ProjectRow({ projects, type = "", cardWidth=350, gap=16, onSelect }){
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
      {/* <h2 className="row-title">{title}</h2> */}
      <div className="row-wrapper">
        { translateX !== 0 &&
          <button className="scroll-btn left" onClick={() => shift("left")}>
            &#8249;
          </button>
        }

        <div className="scroll-window" ref={trackRef}>
          <div
            className="scroll-track"
            style={{
              transform: `translateX(-${translateX}px)`,
              transition: "transform 0.5s ease",
              gap: `${gap}px`,
            }}
          >
            {projects.map((p, index) => (
              (type === "All" || type === p.type) &&
                <ProjectCard
                  id={p.id}
                  key={index}
                  project={p}
                  onClick={onSelect}
                  style={{ minWidth: `${cardWidth}px`, maxWidth: `${cardWidth}px` }}
                />
            ))}
          </div>
        </div>

        { translateX + trackRef.current?.offsetWidth <= totalWidth &&
          <button className="scroll-btn right" onClick={() => shift("right")}>
            &#8250;
          </button>
        }

      </div>
    </div>
  );
}
