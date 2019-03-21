import * as React from 'react'
import styled from 'styled-components'

const StyledLayoutRoot = styled.div`
`

interface LayoutRootProps {
  className?: string,
  children: React.ReactChild,
}

class LayoutRoot extends React.Component<LayoutRootProps> {

  public render() {
    return (
      <StyledLayoutRoot
        id='background-container'
        className={this.props.className}
      >
        {this.props.children}
      </StyledLayoutRoot>
    )
  }
}

export default LayoutRoot
