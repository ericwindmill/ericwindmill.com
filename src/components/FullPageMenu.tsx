import * as React from 'react';
import styled from 'styled-components';
import {elevation} from '../styles/variables';

interface FullPageMenuProps {}

const FullPageMenuContainer = styled.div`
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: space-evenly;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    flex-flow: column;
    height: 80%;
`;

const MenuLink = styled.h1`
  color: white;
  text-shadow: ${elevation.one};
  font-size: 7vw;
  text-transform: uppercase;
  cursor: pointer;
  transition: all .3s ease;
  
  &:hover {
    text-shadow: ${elevation.oneHover};
  }
`;

class FullPageMenu extends React.Component<FullPageMenuProps> {
  public render() {
    return (
      <FullPageMenuContainer>
        <MenuLink>Home</MenuLink>
        <MenuLink>Library</MenuLink>
        <MenuLink>Work</MenuLink>
        <MenuLink>Contact</MenuLink>
      </FullPageMenuContainer>
    );
  }
}

export default FullPageMenu;
