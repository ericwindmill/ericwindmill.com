import * as React from 'react'
import styled from 'styled-components'

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
