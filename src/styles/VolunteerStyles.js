import React from "react";
import styled from "styled-components";

const VolunteerStyles = styled.div`
  padding-top: 2em;
  padding-bottom: 2em;
  clear: both;
  width: 100%;
  display: block;
`;

const VolunteerItem = styled.div`
  width: 90%;
  margin: 10px auto;
  text-align: center;
  border-left: 1px solid black;
`;

const VolunteerInfo = styled.div`
  display: flex;
  img {
		width: ${props => props.imgWidth}
		height: ${props => props.imgHeight}
  }
`;

export { VolunteerStyles, VolunteerItem, VolunteerInfo };
