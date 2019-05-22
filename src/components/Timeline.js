import React from "react";
import {
  Row,
  ColMd12,
  ColMd6,
  Heading,
  HeadingMeta
} from "../styles/layout-components";

import {
  TimelineCentered,
  TimelineEntry,
  TimelineIcon,
  TimelineInfo,
  TimelineInner,
  TimelineStyles
} from "../styles/TimelineStyles";

const Timeline = () => (
  <TimelineStyles id="timeline">
    <Row>
      <ColMd6>
        <HeadingMeta>Highlights</HeadingMeta>
        <Heading>Timeline</Heading>
      </ColMd6>
    </Row>
    <Row>
      <ColMd12>
        <TimelineCentered>
          <TimelineEntry>
            <TimelineInner className="timeline-entry-inner">
              <TimelineIcon background={"#a84cb8"}>
                <i className="fas fa-terminal" />
              </TimelineIcon>
              <TimelineInfo className="timeline-entry-info">
                <h4>
                  Thinkful Bootcamp <span> 2018</span>
                </h4>
                <span>Full Stack Flex Engineering</span>
                <p>
                  Learned industry best practices and practical software
                  development standards with a focus on HTML5, CSS3, JavaScript,
                  jQuery, Node.js, React, Redux, and algorithms & data
                  structures. Created and deployed mobile-first applications
                  while learning new languages and frameworks by collaborating
                  several hours every week with a senior web developer.
                </p>
              </TimelineInfo>
            </TimelineInner>
          </TimelineEntry>
          <TimelineEntry>
            <TimelineInner>
              <TimelineIcon background={"#f9bf3f"}>
                <i className="fas fa-book-open" />
              </TimelineIcon>
              <TimelineInfo className="timeline-entry-info">
                <h4>
                  Substitute Teacher <span> 2017 - Present </span>
                </h4>
                <span>Upland Unified School District</span>
              </TimelineInfo>
            </TimelineInner>
          </TimelineEntry>
          <TimelineEntry>
            <TimelineInner>
              <TimelineIcon background={"#2c98f0"}>
                <i className="fas fa-graduation-cap" />
              </TimelineIcon>
              <TimelineInfo className="timeline-entry-info">
                <h4>
                  Cal State San Bernardino <span> 2010 - 2015 </span>
                </h4>
                <span>Health Science (Health Care Management)</span>
              </TimelineInfo>
            </TimelineInner>
          </TimelineEntry>
        </TimelineCentered>
      </ColMd12>
    </Row>
  </TimelineStyles>
);

export default Timeline;
