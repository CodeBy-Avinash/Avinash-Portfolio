// src/components/ProjectDetail.jsx
import { useParams } from "react-router-dom";
import { PROJECTS } from "../constants"; // Import PROJECTS array

const ProjectDetail = () => {
  const { title } = useParams();
  
  // Find the project using the title parameter
  const project = PROJECTS.find((proj) => proj.title.replace(/\s+/g, '-').toLowerCase() === title);
  
  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <img src={project.image} alt={project.title} className="mb-4" />
      <p className="mb-4">{project.description}</p>
      <h2 className="text-2xl">Technologies Used</h2>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index} className="text-neutral-400">{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetail;
