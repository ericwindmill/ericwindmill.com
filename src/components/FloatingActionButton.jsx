import React from "react";
import styled from "styled-components";

export default class FloatingActionButton extends React.Component {

  render() {
    const {children} = this.props;

    return (
      <FAButtonContainer>
        {children}
      </FAButtonContainer>
    );
  }
}

const FAButtonContainer = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  background: white;
  overflow: hidden;
  padding: 30px;
  clip-path: circle(30px);
  -webkit-tap-highlight-color: transparent;
  
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(142,142,145,0.2);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }

  
  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 1;
    }
    20% {
      transform: scale(25, 25);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(40, 40);
    }
  }

  &:focus:not(:active)::after {
    animation: ripple 2s ease-out;
  }
`