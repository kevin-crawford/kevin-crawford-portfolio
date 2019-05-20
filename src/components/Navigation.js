import React from "react";
import KevinPic from "../images/kevin.jpg";
import styled from "styled-components";
import { NavStyles } from "../styles/styled-components";

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

const Profile = styled.div`
  text-align: center;
  color: white;
  i.fab,
  p {
    display: inline-block;
    padding: 0 8px;
  }
  h1 {
    color: #ffda07;
  }
`;

const NavLinks = styled.div`
  margin: 50px 0px;
  a {
    display: block;
    text-transform: uppercase;
    text-align: center;
    font-weight: 900;
    font-size: 1em;
    cursor: pointer;
    text-decoration: none;
    color: white;
    padding: 1rem 3rem;
  }
`;

const SocialLinks = styled.div`
  text-align: center;
  i.fab {
    color: white;
    padding: 0 10px;
    &:hover {
      color: blue;
    }
  }
`;

const Navigation = () => (
  <NavStyles className="navigation">
    <Profile className="profile-info">
      <ProfileImage src={KevinPic} alt="Kevin Crawfords Profile Pic" />
      <h1>Kevin Crawford</h1>
      <div>
        <i class="fas fa-envelope-square" />
        <p>kcdouglas92@gmail.com</p>
      </div>
      <div>
        <i class="fas fa-phone-square" />
        <p>909-244-4206</p>
      </div>
    </Profile>
    <NavLinks className="navigation-links">
      <a href="#contact" className="active" data-nav-section="home">
        Home
      </a>
      <a href="#contact" data-nav-section="about">
        About
      </a>
      <a href="#projects" data-nav-section="projects">
        Projects
      </a>
      <a href="#volunteer" data-nav-section="volunteer">
        Volunteer Work
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
