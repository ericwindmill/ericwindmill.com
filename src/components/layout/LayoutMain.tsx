import * as React from "react"
import styled from "styled-components"

const StyledLayoutMain = styled.main`
`

interface LayoutMainProps {
  className?: string;
}

const LayoutMain: React.SFC<LayoutMainProps> = ({children, className}) => (
  <StyledLayoutMain className={className}>
    {children}
  </StyledLayoutMain>
)

export default LayoutMain
