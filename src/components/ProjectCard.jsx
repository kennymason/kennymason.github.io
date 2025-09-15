// ProjectCard.jsx
// Card display for individual projects

import './ProjectCard.scss';

export default function ProjectCard({ project }){
  return(
    <div className="card-container">
      <img className="card-image" src={ project.image }/>
      <div className="">
        <h3 className="card-title">{ project.title }</h3>
      </div>
    </div>
  );
}
