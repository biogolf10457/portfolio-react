import React from "react";
import "./ProjectCard.css";
import Button from "../Button/Button";

const ProjectCard = ({ project }) => {
  const title = project.title;
  const description = project.description;
  const codeURL = project.codeURL;
  const demoURL = project.demoURL;
  const cardStyle = {
    backgroundImage: `url("${process.env.PUBLIC_URL}/images/projectsPicture/${project.picture}")`,
  };
  const stacksLogo = project.stacks;
  const year = project.year;

  return (
    <div className="projectCard" style={cardStyle}>
      <div className="projectCardTitle">{title}</div>
      <div className="projectFooter">
        <div className="projectCardDescription">
          <div className="projectStacks">
            {stacksLogo.map((logo) => (
              <img
                key={logo}
                src={`${process.env.PUBLIC_URL}/images/skillsLogo/${logo}`}
                alt={logo}
                height="32px"
                className="stacksLogo"
              />
            ))}
            <div className="projectYear">- {year}</div>
          </div>
          <p>{description}</p>
        </div>
        <div className="projectButtonGroup">
          {codeURL && <Button srcURL={codeURL} text="code" />}
          {demoURL && <Button srcURL={demoURL} text="demo" />}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
