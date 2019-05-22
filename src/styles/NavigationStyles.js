import styled from "styled-components";

const NavStyles = styled.aside`
  padding-top: 2em;
  padding-bottom: 40px;
  float: left;
  z-index: 1001;
  height: 100%;
  width: 250px;
  background: #585859;
  position: fixed;
  @media (max-width: 750px) {
    display: none;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid white;
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
  margin: 35px 0px;
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
    &:hover {
      color: #d2d2d2;
    }
  }
`;

const SocialLinks = styled.div`
  text-align: center;
  i.fab {
    color: #d2d2d2;
    padding: 0 5px;
    &:hover {
      color: white;
    }
  }
`;

export { ProfileImage, SocialLinks, NavLinks, Profile, NavStyles };
