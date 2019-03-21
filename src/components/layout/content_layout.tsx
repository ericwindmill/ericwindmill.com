import * as React from 'react'
import styled from 'styled-components'

interface ContentLayoutProps {
  children?: React.ReactChildren
}

const ContentLayoutContainer = styled.div`
  display: flex;
  
  .col1 {
    flex: 2 1;
    margin-right: 100px;
  }
  
  .col2 {
    flex: 1 2;
  }
`

class ContentLayout extends React.Component<ContentLayoutProps> {
  public render(): React.ReactNode {
    return (
      <ContentLayoutContainer className={"class"}>
        {this.props.children}
      </ContentLayoutContainer>
    )
  }
}

export default ContentLayout
