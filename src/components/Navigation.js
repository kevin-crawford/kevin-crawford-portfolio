import React from "react";
import KevinPic from "../images/kevin.jpg";
import {
  ProfileImage,
  SocialLinks,
  NavLinks,
  Profile,
  NavStyles
} from "../styles/NavigationStyles";

const Navigation = () => (
  <NavStyles className="navigation">
    <Profile className="profile-info">
      <ProfileImage src={KevinPic} alt="Kevin Crawfords Profile Pic" />
      <h1>Kevin Crawford</h1>
      <div>
        <i className="fas fa-envelope-square" />
        <p>kcdouglas92@gmail.com</p>
      </div>
      <div>
        <i className="fas fa-phone-square" />
        <p>909-244-4206</p>
      </div>
    </Profile>
    <NavLinks className="navigation-links">
      <a href="#home" className="active" data-nav-section="home">
        Home
      </a>
      <a href="#about" data-nav-section="about">
        About
      </a>
      <a href="#projects" data-nav-section="projects">
        Projects
      </a>
      <a href="#timeline" data-nav-section="volunteer">
        Timeline
      </a>
      <a href="#volunteer" data-nav-section="volunteer">
        Volunteer
      </a>
    </NavLinks>
    <SocialLinks className="social-links">
      <a
        href="https://www.linkedin.com/in/kd-crawford/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-linkedin fa-2x" />
      </a>
      <a
        href="https://github.com/kevin-crawford"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-github-square fa-2x" />
      </a>
      <a
        href="https://twitter.com/kdxcii_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-twitter-square fa-2x" />
      </a>
    </SocialLinks>
  </NavStyles>
);

export default Navigation;
