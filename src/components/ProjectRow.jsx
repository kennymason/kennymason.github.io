// ProjectRow.jsx
// Rotating row display for ProjectCards

import ProjectCard from './ProjectCard';
import './ProjectRow.scss';

export default function ProjectRow({ title, projects, onSelect }){
  return(
    <div className="row-container">
      <h2 className="row-title">{title}</h2>
      <div className="scroll-row">
        {projects.map((p) => (
          <ProjectCard id={p.id} project={p} onClick={onSelect}/>
        ))}
      </div>
    </div>
  );
}
