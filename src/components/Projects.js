import React from "react";
import { ProjectStyles, Project } from "../styles/ProjectStyles";
import {
  Row,
  ColMd12,
  ColMd6,
  Heading,
  HeadingMeta
} from "../styles/layout-components";

const Projects = () => (
  <ProjectStyles id="projects">
    <Row>
      <ColMd6>
        <HeadingMeta>Recent Work</HeadingMeta>
        <Heading>Projects</Heading>
      </ColMd6>
    </Row>

    <Row>
      <ColMd12>
        <Project>
          <h3>Automate</h3>
          <span>Website</span>
          <div className="project-details">
            <h3>Codebase</h3>
            <p>lorem ipsum lorem ipsum lorem ipsum </p>
          </div>
        </Project>
      </ColMd12>
    </Row>

    {/* PROJECT 2 */}
    <Row className="row">
      <ColMd12>
        <Project className="project">
          <h3>Social Rift</h3>
          <span>Website</span>
          <div className="project-details">
            <h3>Codebase</h3>
            <p>lorem ipsum lorem ipsum lorem ipsum </p>
          </div>
        </Project>
      </ColMd12>
    </Row>

    {/* PROJECT 3 */}
    <Row className="row">
      <ColMd12>
        <Project className="project">
          <h3>Crosspass Podcast</h3>
          <span>Website</span>
          <div className="project-details">
            <h3>Codebase</h3>
            <p>lorem ipsum lorem ipsum lorem ipsum </p>
          </div>
        </Project>
      </ColMd12>
    </Row>
  </ProjectStyles>
);

export default Projects;
