import * as React from 'react';
import styled from 'styled-components';
import {ReactChild} from "react";
import {colors} from "../styles/variables";

interface GradientTitleProps {
  children: ReactChild
  fontSize?: number
  gradient?: string
}

const GradientTitleContainer = styled.span`
    h1 {  
      letter-spacing: -3px;
      line-height: 72px;
      font-size: 100px;
      display: inline;
      background-image: -webkit-linear-gradient(left, #f15b74, #ff6021);
      background-image: -moz-linear-gradient(left, #f15b74, #ff6021);
      background-image: -ms-linear-gradient(left, #f15b74, #ff6021);
      background-image: -o-linear-gradient(left, #f15b74, #ff6021);
      background-image: linear-gradient(to bottom, #f15b74, #ff6021);
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
      text-fill-color: transparent;
    }
`;

class GradientTitle extends React.Component<GradientTitleProps> {
  static defaultProps = {
    fontSize: '72px',
    gradient: `linear-gradient(90deg, ${colors.brandGradientPurple}, ${colors.brandGradientRed}`,
  }

  public render(): React.ReactNode {
    return (
      <GradientTitleContainer>
        <h1  style={{fontSize: this.props.fontSize, backgroundImage: this.props.gradient}}>{this.props.children}</h1>

      </GradientTitleContainer>
    );
  }
}

export default GradientTitle;
