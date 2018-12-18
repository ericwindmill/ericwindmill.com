import * as React from "react";
import styled from "styled-components";

import Page from "../components/Page";
import Container from "../components/Container";
import {dimensions, colors, elevation} from "../styles/variables";
import HeroTransitionText from "../components/HeroTransitionText";
import PerspectiveCard from "../components/PerspectiveCard";
import CanvasAnimation from "../components/CanvasAnimation";

const StyledHeader = styled.div`
    padding: ${dimensions.gridUnit * 5}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${colors.brand};
    height: calc(100vh - ${dimensions.siteMargin}px * 2);
    
    h1, h2 {
      margin: 0;
      font-size: 7vw;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: #EEE;
      text-shadow: ${elevation.text};
    }
    
    h2 {
      font-size: 5vw;
    }
`;

const StyledMainContent = styled.section``;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Page>
        <Container>
          <StyledHeader>
            <h1 className="name">
              <HeroTransitionText className={"slide-top-a"} text={"Eric"} />
              <HeroTransitionText className={"slide-top-b"} text={"Windmill"} />
            </h1>
            <h2>
              <HeroTransitionText className={"slide-top-c"} text={"Portfolio"} />
            </h2>
          </StyledHeader>
          <StyledMainContent>
            <PerspectiveCard>
              <img width='300px' height='120px' src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2009/11/26/03/petoftheweek.jpeg" alt=""/>
            </PerspectiveCard>
            <CanvasAnimation/>
          </StyledMainContent>
        </Container>
      </Page>
    );
  }
}
