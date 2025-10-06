// Projects.jsx
// Rotating row display for project cards

import { useState, Fragment } from 'react';
import './Projects.css';
import Modal from './Modal.jsx';

export default function Projects({ projects, category = "all" }){
  const [selectedProject, setSelectedProject] = useState(null);

  // Toggles modal display on project card click
  const handleProjectSelect = (id) => {
    setSelectedProject((prev) => (prev === id ? null : id));
  };

  // Checks if the selected project is in a given row
  const selectedProjectInRow = (projs, cols, row) => {
    return projs.some((p, i) => (row === Math.floor(i / cols) && p.id === selectedProject));
  }

  // Filters displayed projects based on selected category
  const filteredProjects = projects.filter((project) => 
    category === "all" || category === project.category
  );

  // number of grid columns to display (also set in css)
  // 2 if on mobile, 3 otherwise
  let columns = 3;
  if (window.matchMedia("(max-width: 768px)").matches) {
    columns = 2;
  }

  return (
    <div className="projects-container">
      <div className='projects-wrapper'>
        {filteredProjects.map((project, index) => {
          const rowIndex = Math.floor(index / columns);
          const isLastInRow = ((index + 1) % columns === 0) || (index + 1 === filteredProjects.length);
          
          return (
            <Fragment key={project.id}>
              <div
                className="card-container"
                onClick={() => handleProjectSelect(project.id)}
              >
                <div className="card-content">
                  <div className='card-type'>{ project.type }</div>
                  <img className="card-image" src={ project.logo }/>
                </div>
                <h3 className="card-title">{ project.title }</h3>
              </div>

              { isLastInRow && selectedProjectInRow(filteredProjects, columns, rowIndex) &&
                <div className='modal-wrapper'>
                  <Modal project={filteredProjects.find((p) => p.id === selectedProject)}/>
                </div>
              }
            </Fragment>
        )})}
      </div>
    </div>
  );
}
