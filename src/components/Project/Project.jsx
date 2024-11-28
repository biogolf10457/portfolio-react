import React from "react";
import "./Project.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { getProjects } from "../../data/projects";

const Project = () => {
  let projects = getProjects();

  return (
    <div className="projectContainer" id="Project">
      <h1 className="projectTitle">Project</h1>
      <div className="projectGroup">
        <div className="projectGroupName">Web Development</div>
        <div className="projectCardContainer">
          {projects.webDevelopment.map((projectItem) => (
            <ProjectCard project={projectItem} key={projectItem.id} />
          ))}
        </div>
      </div>
      <div className="projectGroup">
        <div className="projectGroupName">Game Development</div>
        <div className="projectCardContainer">
          {projects.gameDevelopment.map((projectItem) => (
            <ProjectCard project={projectItem} key={projectItem.id} />
          ))}
        </div>
      </div>
      <div className="projectGroup">
        <div className="projectGroupName">3D Modeling & Animation</div>
        <div className="projectCardContainer">
          {projects.animation3D.map((projectItem) => (
            <ProjectCard project={projectItem} key={projectItem.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
