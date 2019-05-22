import React from "react";
import { SkillsItem, SkillsWrapper, SkillsIcon } from "../styles/SkillsStyles";

import {
  Row,
  ColMd6,
  ColMd4,
  Heading,
  HeadingMeta
} from "../styles/layout-components";

const Skills = () => (
  <SkillsWrapper id="skills-section">
    <Row>
      <ColMd6>
        <HeadingMeta>What do I do?</HeadingMeta>
        <Heading>Skills</Heading>
      </ColMd6>
    </Row>
    <Row className="row">
      <ColMd4 className="col-md-4">
        <SkillsIcon background={"#b4b4ff"}>
          <i className="fas fa-microphone" />
        </SkillsIcon>
        <SkillsItem border={"2px solid #b4b4ff"}>
          <h3>Communication</h3>
          <p>
            Confident in sharing my ideas in meetings, with teams and customers.
            Its important to be assertive but not aggressive and strategize how
            to skillfully push the best ideas forward.
          </p>
        </SkillsItem>
      </ColMd4>
      <ColMd4>
        <SkillsIcon background={"#ef6884"}>
          <i className="fas fa-brain" />
        </SkillsIcon>
        <SkillsItem border={"2px solid #ef6884"}>
          <h3>Critical Thinking</h3>
          <p>
            Employ a methodical approach that involves asking questions,
            uncovering false assumptions, and evaluating various approaches to
            the problem at hand before deciding on the best path forward.
          </p>
        </SkillsItem>
      </ColMd4>
      <ColMd4>
        <SkillsIcon background={"#45dc74"}>
          <i className="fas fa-exclamation" />
        </SkillsIcon>
        <SkillsItem border={"2px solid #45dc74"}>
          <h3>Problem Solving</h3>
          <p>
            Problems are more often than not the most effective teacher. Once
            you know what exactly the problem is, find out the root cause which
            will create clarity towards the best solution.
          </p>
        </SkillsItem>
      </ColMd4>
    </Row>
    <Row>
      <ColMd4>
        <SkillsIcon background={"#f9bf3f"}>
          <i className="fas fa-code-branch" />
        </SkillsIcon>
        <SkillsItem border={"2px solid blue"}>
          <h3>Version Control</h3>
          <p>
            Version control software was successfully implemented into all my
            previous projects using GIT. Development processes undergo numerous
            life cycles. Ability to navigate such controls can greatly increase
            productivity and collaboration.
          </p>
        </SkillsItem>
      </ColMd4>
      <ColMd4>
        <SkillsIcon background={"#4c90b8"}>
          <i className="fas fa-vial" />
        </SkillsIcon>
        <SkillsItem border={"2px solid #4c90b8"}>
          <h3>Unit Testing</h3>
          <p>
            Unit testings primary benefit is that it makes the coding process
            more agile. When you add more and more features to a software, you
            sometimes need to change old design and code. But changing already
            tested code is both risky and costly.
          </p>
        </SkillsItem>
      </ColMd4>
      <ColMd4>
        <SkillsIcon background={"#bdbcbb"}>
          <i className="fas fa-code-branch" />
        </SkillsIcon>
        <SkillsItem border={"2px solid #bdbcbb"}>
          <h3>Command Line</h3>
          <p>
            Command Line Interfaces (CLI) improve efficiency through its simple
            design and minimal system resource use. Ability to navigate such
            systems lead to better control and faster development speeds.
          </p>
        </SkillsItem>
      </ColMd4>
    </Row>
  </SkillsWrapper>
);

export default Skills;
