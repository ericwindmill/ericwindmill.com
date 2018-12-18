import * as React from "react";
import styled from "styled-components";

import Page from "../components/Page";
import Container from "../components/Container";
import { dimensions } from "../styles/variables";
import HeroTransitionText from "../components/HeroTransitionText";

const StyledHeader = styled.div`
    margin: ${dimensions.gridUnit * 2}px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    
    h1, h2 {
      margin: 0;
      font-size: 9vw;
      letter-spacing: 4px;
      text-transform: uppercase;
    }
    
    h2 {
      font-size: 7vw;
    }
`;

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
        </Container>
      </Page>
    );
  }
}
