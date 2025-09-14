// ProjectRow.jsx
// Rotating row display for ProjectCards

import ProjectCard from './ProjectCard';

export default function ProjectRow({ title, projects, onSelect }){
  return(
    <div className="">
      <h2 className="">{title}</h2>
      <div className="">
        {projects.map((p) => (
          <ProjectCard id={p.id} project={p} onClick={onSelect}/>
        ))}
      </div>
    </div>
  );
}
