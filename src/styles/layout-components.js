import styled from "styled-components";

const HeadingMeta = styled.span`
  margin-bottom: 15px;
  display: block;
  font-size: 10px;
  text-transform: uppercase;
  color: #999999;
  font-weight: 500;
  letter-spacing: 5px;
`;

const Heading = styled.h2`
  font-size: 18px;
  margin-bottom: 2em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 1.8;
  position: relative;
`;
const Row = styled.div`
  margin-left: -15px;
  margin-right: -15px;
  @media (min-width: 992px) {
    display: flex;
  }
`;

const ColMd12 = styled.div`
  position: relative;
  min-height: 1px;
  padding-left: 25px;
  padding-right: 25px;
`;

const ColMd6 = styled.div`
  position: relative;
  min-height: 1px;
  padding-left: 25px;
  padding-right: 25px;
  @media (min-width: 992px) {
    margin-left: 25%;
    right: 20%;
    width: 50%;
  }
`;

const ColMd4 = styled.div`
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 992px) {
    width: 33.33333%;
  }
`;

export { Row, ColMd12, ColMd6, ColMd4, Heading, HeadingMeta };
