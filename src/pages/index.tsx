import * as React from "react"
import styled from "styled-components"

import Page from "../components/layout/Page"
import {dimensions} from "../styles/variables"
import FadeIn from "../components/text/fade_in"
import MainBody from "../components/index_page_ui/main_body"

const IndexPageContainer = styled.div``

const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(70vh - ${dimensions.siteMargin}px * 2);
    text-align: center;
`

export default class IndexPage extends React.Component {
  render() {
    return (
      <Page>
        <IndexPageContainer>
          <StyledHeader>
            <h1>
              <FadeIn
                text={"Hi! Nice to meet you."}
              />
            </h1>
            <h2 className='name'>
              <FadeIn
                text={"I'm Eric. I help people build applications."}
              />
            </h2>
          </StyledHeader>
          <MainBody />
        </IndexPageContainer>
      </Page>
    )
  }
}


