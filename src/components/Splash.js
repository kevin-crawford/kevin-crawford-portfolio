import React from "react";
import styled from "styled-components";
import CoffeeShop from "../images/coffee-shop.jpg";

const SplashStyles = styled.section`
  padding: 1em;
  min-height: 500px;
  height: 789px;
  clear: both;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 60px;
  line-height: 1.3;
  font-weight: 700;
`;

const TitleWrapper = styled.div`
  display: table-cell;
  vertical-align: middle;
  min-height: 700px;
  height: 789px;
  padding: 2.5em;
  position: relative;
`;

const Button = styled.a`
  font-size: 2em;

  padding: 0.25em 1em;
  border-radius: 3px;
  background: mediumseagreen;
  border: 2px solid mediumseagreen;
  text-decoration: none;
  color: white;
  span {
    padding-right: 10px;
  }
`;

const Splash = () => (
  <SplashStyles id="home">
    <TitleWrapper>
      <Title>Hi! I'm Kevin</Title>
      <Button
        href="https://drive.google.com/file/d/1qRDIBBBfu2jNCYHzqWLq6kD9dfsfZShS/view?usp=sharing"
        alt="Kevin Crawfords Resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>View CV</span>
        <i className="fas fa-file-download" />
      </Button>
    </TitleWrapper>
  </SplashStyles>
);

export default Splash;
