import React from "react";
import styled from "styled-components";

export default class ResumePageContainer extends React.Component {

  render() {
    return (
      <ResumePageContainerContainer>
        <h1>Resumè</h1>
        <h2>OpenSource Contributions</h2>
        <h2>AppTree</h2>
        <h2>Projects</h2>
      </ResumePageContainerContainer>
    );
  }
}

const ResumePageContainerContainer = styled.div`

`