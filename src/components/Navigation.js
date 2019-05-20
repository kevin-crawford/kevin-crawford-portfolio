import React from "react";

import { NavStyles } from "../styles/styled-components";

const Navigation = () => (
  <div>
    <NavStyles className="navigation">
      <a href="#projects">Projects</a>
      <a href="#volunteer">Volunteer Work</a>
      <a href="#contact">Contact</a>
    </NavStyles>
  </div>
);

export default Navigation;
