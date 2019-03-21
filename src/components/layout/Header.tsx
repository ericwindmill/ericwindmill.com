import * as React from "react"
import styled from "styled-components"
import MaterialButton from "../MaterialButton"
import GatsbyLink from "gatsby-link"
import {dimensions} from "../../styles/variables"

const StyledHeader = styled.header`
  padding: ${dimensions.gridUnit * 3}px;
  height: calc(100vh - 16px);
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`

const Links = styled.div`
  
  font-size: 1.5rem;
  
  .name-divider {
    height: 10vh;
  }
  
  
`

const Icons = styled.div`

.dark-mode-button {
  padding: 0 20px;
  cursor: pointer;
}

.material-icons {
    font-family: 'Material Icons';
    font-size: 30px;
    color: gainsboro;
}

  .hidden-dark-mode-icon {
    visibility: hidden;
  }
`

interface HeaderProps {
  title?: string;
  toggleMenu: () => void;
}

const initialState = {
  isDarkMode: false
}

type HeaderState = Readonly<typeof initialState>

class Header extends React.Component<HeaderProps, HeaderState> {
  public state: HeaderState = initialState

  private onClick = () => {
    this.props.toggleMenu()
  }

  private toggleDarkMode = () => {
    this.setState({isDarkMode: !this.state.isDarkMode})
  }

  public render(): React.ReactNode {
    return (
      <StyledHeader>
        <Links>
          <GatsbyLink to={"/"}>
            <MaterialButton
              darkTheme={false}
              label={"Eric Windmill"}
              trigger={this.onClick}
            ></MaterialButton>
          </GatsbyLink>
          <div className='name-divider'></div>
          <GatsbyLink to={"/about"}>
            <MaterialButton
              darkTheme={false}
              label={"About"}
              trigger={this.onClick}
            ></MaterialButton>
          </GatsbyLink>
          <GatsbyLink to={"/articles"}>
            <MaterialButton
              darkTheme={false}
              label={"Articles"}
              trigger={this.onClick}
            ></MaterialButton>
          </GatsbyLink>
          <GatsbyLink to={"/posts/my-library"}>
            <MaterialButton
              darkTheme={false}
              label={"Library"}
              trigger={this.onClick}
            ></MaterialButton>
          </GatsbyLink>
        </Links>
        <Icons>
          <div
            className='dark-mode-button'
            onClick={this.toggleDarkMode}
          >
            <span className={this.state.isDarkMode ? "material-icons hidden-dark-mode-icon" : "material-icons"}>brightness_5</span>
            <span className={this.state.isDarkMode ? "material-icons" : "material-icons hidden-dark-mode-icon"}>brightness_2</span>
          </div>
        </Icons>
      </StyledHeader>
    )
  }

}

export default Header
