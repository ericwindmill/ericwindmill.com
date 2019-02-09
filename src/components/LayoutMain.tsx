import * as React from "react";
import styled from "styled-components";
import {elevation} from "../styles/variables";
import GalaxyEdge from "./GalaxyFeatureSVG";

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 75px;
  border-radius: 25px;
  background: white;
  box-shadow: ${elevation.three};
`;

interface LayoutMainProps {
  className?: string;
}

const LayoutMain: React.SFC<LayoutMainProps> = ({ children, className }) => (
  <StyledLayoutMain className={className}>
      {children}
    </StyledLayoutMain>
);

export default LayoutMain;
