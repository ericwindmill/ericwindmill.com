import React from "react";
import styled from "styled-components";
import Link from 'gatsby-link';
import HomeGridBox from "../components/HomeGridBox";
import OptInForm from "../components/OptInForm";

export default class HomePage extends React.Component {
  render() {
    return (
      <HomePageContainer>
        <h1>HOME</h1>
      </HomePageContainer>
    );
  }
}

const HomePageContainer = styled.div``;

export const pageQuery = graphql`
  query MainPosts {
    allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "Post"}}}
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            year
            month
            type
            category
          }
        }
      }
    }
  }
`;
