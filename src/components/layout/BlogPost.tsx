import * as React from 'react'
import styled from 'styled-components'

import Header from './Header'
import {dimensions} from "../../styles/variables"

// source of truth for all LAYOUT
// individual pages should not be setting their own size!
const StyledPage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: ${dimensions.gridUnit}px;
  display: flex;
 
  .sidebar {
    flex: 0 0 250px;
  }
  
  .content {
    overflow: scroll;
  }
  
  @keyframes fade-in {
	0% { opacity: 0; }
	20% { opacity: 0; }
	60% { opacity: 1; }
	100% { opacity: 1; }
}

 .fade-in {
    animation: fade-in .6s cubic-bezier(0.645, 0.045, 0.355, 1);
   }
`

interface PageProps {
  className?: string
  children?: React.ReactChild;
}

const initialState = {
  menuIsOpen: false
}

type PageState = Readonly<typeof initialState>

class BlogPost extends React.Component<PageProps, PageState> {
  readonly state: PageState = initialState

  private toggleMenu = () => {
    this.setState({menuIsOpen: !this.state.menuIsOpen})
  }

  public render(): React.ReactNode {
    return <StyledPage
      className={this.props.className}
    >
      <div className='sidebar'>
        <Header toggleMenu={this.toggleMenu} />
      </div>
      <div className='content fade-in'>
        {this.props.children}
      </div>
    </StyledPage>
  }
}


export default BlogPost


