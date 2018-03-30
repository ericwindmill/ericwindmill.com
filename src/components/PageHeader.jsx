import React from "react";
import styled from "styled-components";

export default class PageHeader extends React.Component {

  render() {
    const {children} = this.props;
    return (
      <PageHeaderContainer>
        {children}
      </PageHeaderContainer>
    );
  }
}

const PageHeaderContainer = styled.div`
  margin-bottom: 100px;
  padding: 0 50px;
  max-width: 900px;
    h1 {
      font-size: 6rem;
      margin-bottom: 0px;
    }
    h1 b {
      font-size: 70%;
    }
    
    @media screen and (max-width: 600px) {
      margin-bottom: 100px;
      padding: 0 10px;
    }
`;