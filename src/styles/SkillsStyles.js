import styled from "styled-components";

const SkillsWrapper = styled.section`
  padding-top: 2em;
  padding-bottom: 2em;
  clear: both;
  width: 100%;
  display: block;
`;

const SkillsItem = styled.div`
  margin: 10px auto;
  max-width: 250px;
  text-align: center;
  min-height: 278px;
  border-bottom: ${props => props.border};
  box-shadow: 0 13px 13px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  p {
    vertical-align: middle;
  }
  h3 {
    padding-top: 25px;
  }
  @media (max-width: 992px) {
    max-width: 85%
    min-height: 0;
    text-align: justify;
    margin: 0 auto;
    padding: 0px 10px;
  }
`;

const SkillsIcon = styled.div`
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
  position: absolute;
  left: 42%;
  @media (max-width: 992px) {
    left: 5%;
    top: -5%;
  }
`;

export { SkillsItem, SkillsWrapper, SkillsIcon };
