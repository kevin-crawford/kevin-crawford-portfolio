import React from "react";
import styled from "styled-components";

const AboutStyles = styled.section`
  padding: 2em;
`;

const About = () => (
  <AboutStyles id="about">
    <h2>About Me</h2>
    <div className="about-container">
      <p>
        Hello, my name is Kevin and recent graduate of the Full Stack Flex Web
        Development Career Path bootcamp at Thinkful. Coding has given me a
        creative outlet and a way to express myself, solve real world problems,
        and collaborate with others. I chose to be a web developer not only
        facilitate bringing my ideas to life, but to also help others reimagine
        what a better world looks like. When I am not coding, you will often
        find me in local coffee shops, thrift shopping, attending concerts and
        as of recent, a content creator on Twitch.tv
      </p>
    </div>
  </AboutStyles>
);

export default About;
