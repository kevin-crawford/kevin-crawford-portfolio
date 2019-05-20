import React from "react";
import { ProjectStyles, Project } from "../styles/styled-components";

const Projects = () => (
  <ProjectStyles id="projects">
    <div className="row">
      <h1>Projects</h1>
    </div>

    {/* PROJECT 1 */}
    <div className="row">
      <Project className="project">
        <h3>Automate</h3>
        <span>Website</span>
        <div className="project-details">
          <h3>Codebase</h3>
          <p>lorem ipsum lorem ipsum lorem ipsum </p>
        </div>
      </Project>
    </div>

    {/* PROJECT 2 */}
    <div className="row">
      <Project className="project">
        <h3>Social Rift</h3>
        <span>Website</span>
        <div className="project-details">
          <h3>Codebase</h3>
          <p>lorem ipsum lorem ipsum lorem ipsum </p>
        </div>
      </Project>
    </div>

    {/* PROJECT 3 */}
    <div className="row">
      <Project className="project">
        <h3>Crosspass Podcast</h3>
        <span>Website</span>
        <div className="project-details">
          <h3>Codebase</h3>
          <p>lorem ipsum lorem ipsum lorem ipsum </p>
        </div>
      </Project>
    </div>
  </ProjectStyles>
);

export default Projects;
