import * as React from 'react';
import styled from 'styled-components';
import {elevation} from "../styles/variables";

interface CardProps {
  children?: React.ReactChild
}

const CardContainer = styled.div`
    box-shadow: ${elevation.two};
    width: fit-content;
`;

class Card extends React.Component<CardProps> {
  public render(): React.ReactNode {
    return (
      <CardContainer>
        {this.props.children}
      </CardContainer>
    );
  }
}

export default Card;
