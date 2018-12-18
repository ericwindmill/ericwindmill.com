import * as React from 'react'
import styled from 'styled-components'
import {colors} from "../styles/variables";

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 500vh;
  background: ${colors.brandLight} linear-gradient(#203A5F 1%, ${colors.brandLight}, 40%, white 100%);
`

interface LayoutRootProps {
  className?: string,
  children: React.ReactChild,
}

class LayoutRoot extends React.Component<LayoutRootProps> {

  public render() {
    return (
      <StyledLayoutRoot
        id="background-container"
        className={this.props.className}>
        {this.props.children}
      </StyledLayoutRoot>
    );
  }
}

export default LayoutRoot
