// Modal.jsx
// Pop-up modal for ProjectCards

import { useState, useEffect } from 'react';
import './Modal.css';

function Lightbox({ images, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex);

  const prev = (e) => { e.stopPropagation(); setIndex((index - 1 + images.length) % images.length); };
  const next = (e) => { e.stopPropagation(); setIndex((index + 1) % images.length); };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') setIndex(i => (i - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') setIndex(i => (i + 1) % images.length);
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [images.length, onClose]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>&#x2715;</button>
      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
        <img src={images[index]} className="lightbox-image" alt="" />
        {images.length > 1 && (
          <>
            <button className="carousel-btn lightbox-btn-prev" onClick={prev}>&#8249;</button>
            <button className="carousel-btn lightbox-btn-next" onClick={next}>&#8250;</button>
            <div className="carousel-dots lightbox-dots">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`carousel-dot${i === index ? ' active' : ''}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Carousel({ images, onImageClick }) {
  const [index, setIndex] = useState(0);

  const prev = (e) => { e.stopPropagation(); setIndex((index - 1 + images.length) % images.length); };
  const next = (e) => { e.stopPropagation(); setIndex((index + 1) % images.length); };

  return (
    <div className="carousel">
      <img
        src={images[index]}
        className="modal-image carousel-image carousel-image-clickable"
        alt=""
        onClick={() => onImageClick(index)}
      />
      {images.length > 1 && (
        <>
          <button className="carousel-btn carousel-btn-prev" onClick={prev}>&#8249;</button>
          <button className="carousel-btn carousel-btn-next" onClick={next}>&#8250;</button>
          <div className="carousel-dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`carousel-dot${i === index ? ' active' : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Modal({ project, jokerStage, onCatchJoker = () => {} }){
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Stage 3: the joker takes the place of FENSight's GitHub button
  const jokerHere = jokerStage === 3 && project.title === "FENSight";
  const catchModalJoker = () => {
    alert("Argh! Not bad... but I know one place you'll never find me! *Not without a flashlight, anyway*");
    onCatchJoker();
  };

  return(
    <div className="modal-container">
      {lightboxIndex !== null && (
        <Lightbox
          images={project.images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
      <div className='modal-header'>
        <div className='modal-titles'>
          <div className="modal-title">{project.title}</div>
          <div className="modal-subtitle">{project.description}</div>
        </div>
        <div className="modal-links">
          {jokerHere
            ? <img src="/chess-cards/joker-piece-head.png" className="modal-joker" alt="" onClick={catchModalJoker}/>
            : <a className="modal-button fa fa-github-square" href={project.links.github}></a>
          }
        </div>
      </div>
      <div className="modal-content">
        <div className='modal-content-left'>
          <div className="modal-summary">{project.summary}</div>
          <div className="modal-images-mobile">
            <Carousel images={project.images} onImageClick={setLightboxIndex} />
          </div>
          <div className="modal-tags">
            {project.tags.map((tag, i) => (
              <div key={i} className='modal-tag'>{tag}</div>
            ))}
          </div>
          <a className="modal-button mobile-btn fa fa-github-square" href={project.links.github}></a>
        </div>
        <div className='modal-content-right'>
          <div className="modal-images">
            <Carousel images={project.images} onImageClick={setLightboxIndex} />
          </div>
        </div>
      </div>
    </div>
  );
}
