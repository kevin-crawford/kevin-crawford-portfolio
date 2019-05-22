import styled from "styled-components";

const TimelineStyles = styled.section`
  padding-top: 2em;
  padding-bottom: 2em;
  clear: both;
  width: 100%;
  display: block;
`;

const TimelineCentered = styled.div`
  position: relative;
  margin-bottom: 30px;
  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 4px;
    background: #f2f3f7;
    top: 20px;
    bottom: 20px;
    margin-left: 29px;
  }
`;

const TimelineEntry = styled.article`
  position: relative;
  margin-top: 5px;
  margin-left: 30px;
  margin-bottom: 10px;
  clear: both;
`;

const TimelineInner = styled.div`
  position: relative;
  margin-left: -20px;
`;

const TimelineInfo = styled.div`
  position: relative;
  background: #f2f3f7;
  padding: 1.5em;
  margin-left: 60px;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
  h4 {
    margin: 0;
  }
`;

const TimelineIcon = styled.div`
  display: block;
  width: 40px;
  height: 40px;
  background: ${props => props.background};
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
  text-align: center;
  -moz-box-shadow: 0 0 0 5px #f2f3f7;
  -webkit-box-shadow: 0 0 0 5px #f2f3f7;
  box-shadow: 0 0 0 5px #f2f3f7;
  line-height: 40px;
  float: left;
`;

export {
  TimelineCentered,
  TimelineEntry,
  TimelineIcon,
  TimelineInfo,
  TimelineInner,
  TimelineStyles
};
