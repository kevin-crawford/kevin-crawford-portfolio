import styled from "styled-components";
import CoffeeShop from "../images/coffee-shop.jpg";

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  position: absolute;
  a {
    display: flex;
    text-transform: uppercase;
    position: relative;
    align-items: center;
    font-weight: 900;
    font-size: 1em;
    cursor: pointer;
    text-decoration: none;
    color: white;
    padding: 1rem 3rem;
  }
`;

const SplashStyles = styled.section`
  padding: 4em;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url(${CoffeeShop});
  height: 45vh;
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
