// Projects.jsx
// Rotating row display for project cards

import { useRef, useEffect, useState } from 'react';
import './Projects.css';

export default function Projects({ projects, category = "", cardWidth=350, gap=16, onSelect }){

  return (
    <div className="projects-container">
      <div className='projects-wrapper'>
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
  );
}
