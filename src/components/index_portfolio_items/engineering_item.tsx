import * as React from 'react';
import styled from 'styled-components';
import GradientTitle from "../GradientTitle";
import PerspectiveCard from "../PerspectiveCard";
import Card from "../Card";

interface EngineeringItemProps {}

const EngineeringItemContainer = styled.div`
  display: grid;
`;

class EngineeringItem extends React.Component<EngineeringItemProps> {
  public render(): React.ReactNode {
    return (
      <EngineeringItemContainer>
        <GradientTitle>Software Engineer</GradientTitle>
        <PerspectiveCard>
          <div style={{width: 400, height: 600, background: "aliceblue" }}></div>
        </PerspectiveCard>
        <PerspectiveCard>
          <div style={{width: 300, height: 300, background: "mistyrose" }}></div>
        </PerspectiveCard>
        <Card>
          <div style={{width: 350, height: 350, background: "white" }}>
            <p>yoooooo</p>
            <p>yoooooo</p>
            <p>yoooooo</p>
          </div>
        </Card>

      </EngineeringItemContainer>
    );
  }
}

export default EngineeringItem;
