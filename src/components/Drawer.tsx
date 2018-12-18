import * as React from 'react';
import styled from 'styled-components';
import MaterialButton from "./MaterialButton";
import {colors, dimensions} from '../styles/variables';
// import {colors} from "../styles/variables";
//linear-gradient(90deg, ${colors.brand} 0%, ${colors.brandGradientPurple} 33%, ${colors.brandGradientRed} 66%, ${colors.brandGradientOrange} 100%)
interface DrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
  children: React.ReactChild;
}

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${colors.brandAccentGreen};
  transition: all .3s linear;
  z-index: 999;
  
  &.open {
    left: 0;
  }
  
  &.closed {
    left: ${window.innerWidth + 200}px;
  }
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${dimensions.gridUnit * 4}px;
`

class Drawer extends React.Component<DrawerProps> {

  private closeMenu = () => {
    this.props.toggleDrawer();
  }

  public render() {
    return (
      <DrawerContainer className={this.props.isOpen ? 'open' : 'closed'}>
        <DrawerHeader>
          <MaterialButton darkTheme={true} label={'close'} trigger={this.closeMenu}/>
        </DrawerHeader>
        {this.props.children}
      </DrawerContainer>
    );
  }
}

export default Drawer;
