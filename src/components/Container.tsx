import * as React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  width: auto;
`;

interface ContainerProps {
  className?: string;
}

const Container: React.SFC<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
);

export default Container;
