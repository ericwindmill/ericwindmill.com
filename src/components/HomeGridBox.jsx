import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

export default class HomeGridBox extends React.Component {


  render() {
    const {children, double} = this.props;

    if (this.props.double) {
      return (
        <DoubleHomeGridBoxContainer>
          <h4>{this.props.title}</h4>
          <Divider/>
          {children}
        </DoubleHomeGridBoxContainer>
      );
    }

    return (
      <HomeGridBoxContainer>
        <h4>{this.props.title}</h4>
        <Divider/>
        {children}
      </HomeGridBoxContainer>
    );
  }
}

const HomeGridBoxContainer = styled.div`
    margin: 0 50px 50px;
    width: 325px;
    
    h1,h2,h3,h4 { 
      margin: 0; 
      font-weight: normal;
      line-height: 1;
    }
    h2 {
      font-size: 4rem;
      font-weight: normal;
      margin: 10px 0;
    }
    h3 {
      font-size: 2.5rem;
      margin: 10px 0;
    }
    h4 {
      font-size: 2rem;
      margin: 10px 0;
    }
    
    
    @media screen and (max-width: 600px) {
          margin: 0 10px 50px;
          width: 100%;
    }
`

const Divider = styled.div`
  border-top:1px solid black;
  width: 100px;
  margin-top:10px;
  margin-bottom: 5px;
`

const DoubleHomeGridBoxContainer = styled.div`
    h1,h2,h3,h4 { 
      margin: 0;       
      font-weight: normal;
    }
    min-height: 300px;
    grid-column: span 2;
`