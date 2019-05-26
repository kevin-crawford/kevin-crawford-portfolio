import React from "react";
import hackforlaImg from "../images/hackforla.jpg";
import javascriptLaImg from "../images/javascriptLA.png";

import {
  VolunteerStyles,
  VolunteerItem,
  VolunteerInfo
} from "../styles/VolunteerStyles";

import {
  Row,
  ColMd12,
  ColMd6,
  Heading,
  HeadingMeta
} from "../styles/layout-components";

const Volunteer = () => (
  <VolunteerStyles id="volunteer">
    <Row>
      <ColMd6>
        <HeadingMeta>Keeping Busy</HeadingMeta>
        <Heading>Volunteer Work</Heading>
      </ColMd6>
    </Row>
    <Row>
      <ColMd12>
        <VolunteerItem>
          <h3>Hack For LA; Heart Project</h3>
          <VolunteerInfo>
            <p>
              Hack for LA has been working with the program's staff to design
              and build a better processing system, helping to streamline
              in-person client intake, data processing and the filing of
              motions.
            </p>
            <img
              src={hackforlaImg}
              imgWidth={"75"}
              imgHeight={"75px"}
              alt="Hack for LA logo"
            />
          </VolunteerInfo>
        </VolunteerItem>
      </ColMd12>
    </Row>
    <Row>
      <ColMd12>
        <VolunteerItem>
          <h3>JavascriptLA; Community Outreach</h3>
          <VolunteerInfo>
            <img src={javascriptLaImg} alt="Hack for LA logo" />
          </VolunteerInfo>
        </VolunteerItem>
      </ColMd12>
    </Row>
  </VolunteerStyles>
);

export default Volunteer;
