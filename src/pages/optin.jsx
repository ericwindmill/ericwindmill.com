import React from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import OptInForm from "../components/OptInForm";

export default class OptInPage extends React.Component {
  render() {
    return (
      <OptInPageContainer>
        <PageHeader>
          <h1>Mailing List</h1>
        </PageHeader>
        <ContentContainer>
          <h3>Start your week off fun with Monday Morning Updates.</h3>
          <p>I like to create courses, which I call nuggets. I also like to write about design and development.</p>
          <p>And sometimes, I come across things that I like to share with designers and developers.</p>
          <p>By signing up, you're telling me its okay to email you on Monday Mornings with a short message to start
            your week off light. album recommendations, and weird
            things from around the web.</p>
          <p>
            I'll also include updates on all of courses. They'll always be
            free.
          </p>
          <OptInForm/>
        </ContentContainer>
      </OptInPageContainer>
    );
  }
}

const OptInPageContainer = styled.div`
    max-width: 1100px;
    margin: 10px;
`

const ContentContainer = styled.div`
  margin: 0 50px;
  
  @media screen and (max-width: 900px) {
    margin: 0 10px;
  }
`