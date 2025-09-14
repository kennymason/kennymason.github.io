// ProjectCard.jsx
// Card display for individual projects

export default function ProjectCard({ project }){
  return(
    <div className="">
      <img className="" src={ project.image }/>
      <div className="">
        <h3 className="">{ project.title }</h3>
      </div>
    </div>
  );
}
