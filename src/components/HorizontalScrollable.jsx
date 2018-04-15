import React from "react";
import styled from "styled-components";

export default class HorizontalScrollable extends React.Component {

  render() {
    const {children} = this.props

    return (
      <HorizontalScrollableContainer>
        {children}
      </HorizontalScrollableContainer>
    );
  }
}

const HorizontalScrollableContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
`