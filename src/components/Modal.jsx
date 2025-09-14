// Modal.jsx
// Pop-up modal for ProjectCards

export default function Modal({ project }){
  return(
    <div className="">
      <h2 className="">{project.title}</h2>
      <div className="">
        <div className="">{project.description}</div>
        <div className="">
          <div className="">{project.summary}</div>
          <div className="">{project.link}</div>
          <p className="">{project.tags}</p>
        </div>
        <image src={project.image} className="" alt={project.title}/>
      </div>
    </div>
  );
}
