import * as React from "react";
import styled from "styled-components";

import Page from "../components/Page";
import Container from "../components/Container";
import {dimensions, colors, elevation} from "../styles/variables";
import HeroTransitionText from "../components/HeroTransitionText";
import CanvasAnimation from "../components/CanvasAnimation";
import EngineeringItem from "../components/index_portfolio_items/engineering_item";
import GalaxyEdge from "../components/GalaxyFeatureSVG";

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
      font-size: 3.5vw;
    }
`;



const StyledMainContent = styled.section`
  position: relative;
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Page>
        <Container>
          <StyledHeader>
            <CanvasAnimation/>
            <h1 className="name">
              <HeroTransitionText className={"slide-top-a"} text={"Eric"} />
              <HeroTransitionText className={"slide-top-b"} text={"Windmill"} />
            </h1>
            <h2>
              <HeroTransitionText className={"slide-top-c"} text={"Portfolio"} />
            </h2>
            <GalaxyEdge/>
          </StyledHeader>
          <StyledMainContent>
            <EngineeringItem/>
          </StyledMainContent>
        </Container>
      </Page>
    );
  }
}
