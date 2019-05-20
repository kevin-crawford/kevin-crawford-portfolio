import styled from "styled-components";
import CoffeeShop from "../images/coffee-shop.jpg";

const NavStyles = styled.aside`
  padding-top: 2em;
  padding-bottom: 40px;
  float: left;
  z-index: 1001;
  height: 100%;
  width: 300px;
  background: #585859;
  position: fixed;
`;

const SplashStyles = styled.section`
  padding: 4em;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url(${CoffeeShop});
  height: 90vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ProjectStyles = styled.section`
  height: 90vh;
  padding: 4em;
  background: lightgrey;
`;

const Project = styled.div`
  background: white;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export { Title, SplashStyles, NavStyles, ProjectStyles, Project };
