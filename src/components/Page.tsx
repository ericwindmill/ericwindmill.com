import * as React from 'react'
import styled from 'styled-components'

import Header from './Header';
import Drawer from "./Drawer";
import FullPageMenu from "./FullPageMenu";

const StyledPage = styled.div`
  display: block;
  flex: 1;
  position: relative;
  margin-bottom: 3rem;
`

interface PageProps {
  className?: string
  children?: React.ReactChild;
}

const initialState = {
  menuIsOpen: false
}

type PageState = Readonly<typeof initialState>

class Page extends React.Component<PageProps, PageState> {
  readonly state: PageState = initialState;

  private toggleMenu = () => {
    this.setState({menuIsOpen: !this.state.menuIsOpen});
  }

  public render(): React.ReactNode {
    return   <StyledPage
      className={this.props.className}>
      <Header toggleMenu={this.toggleMenu}/>
      <Drawer isOpen={this.state.menuIsOpen} toggleDrawer={this.toggleMenu}>
        <FullPageMenu/>
      </Drawer>
      {this.props.children}
    </StyledPage>
  }
}


export default Page
