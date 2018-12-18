import * as React from 'react';
import styled from 'styled-components';

interface MaterialButtonProps {
  darkTheme?: boolean;
  label: string;
  trigger: () => void;
}

const MaterialButtonContainer = styled.button`
  /* Ripple effect */
  & {
    background-position: center;
    transition: background 0.8s;
  }
  &:hover {
      border-radius: 3px;
      background: rgba(0,0,0,.05) radial-gradient(circle, transparent 1%, rgba(0,0,0,.05) 1%) center/15000%;
  }
  &:active {
    background-color: transparent;
    background-size: 100%;
    transition: background 0s;
  }
  
  &.dark-theme {
    color: white;
    &:hover {
      border-radius: 3px;
      background: rgba(255,255,255,.05) radial-gradient(circle, transparent 1%, rgba(255,255,255,.05) 1%) center/15000%;
    }
  }

  /* Button style */
  border-radius: 3px;
  padding: 12px 18px;
`;

class MaterialButton extends React.Component<MaterialButtonProps> {
  static defaultProps = {
    darkTheme: false,
  }

  private handleTriggered = () => {
    this.props.trigger();
  }


  public render(): React.ReactNode {
    return (
      <MaterialButtonContainer
        className={`ripple ${this.props.darkTheme ? 'dark-theme' : ''}`}
        onClick={this.handleTriggered}>{this.props.label}
      </MaterialButtonContainer>
    );
  }
}

export default MaterialButton;
