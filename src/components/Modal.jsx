// Modal.jsx
// Pop-up modal for ProjectCards

import './Modal.css';

export default function Modal({ project }){
  return(
    <div className="modal-container">
      <div className='modal-header'>
        <div className='modal-titles'>
          <div className="modal-title">{project.title}</div>
          <div className="modal-subtitle">{project.description}</div>
        </div>
        <div className="modal-links">
          <a className="modal-button fa fa-github-square" href={project.links.github}></a>
        </div>
      </div>
      <div className="modal-content">
        <div className='modal-content-left'>
          <div className="modal-summary">{project.summary}</div>
          <div className="modal-tags">
            {project.tags.map((tag, i) => (
              <div key={i} className='modal-tag'>{tag}</div>
            ))}
          </div>
        </div>
        <div className='modal-content-right'>
          <div className="modal-images">
            <img src={project.images[0]} className='modal-image'/>
          </div>
        </div>
      </div>
    </div>
  );
}
