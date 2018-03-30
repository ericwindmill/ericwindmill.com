import React from "react";
import Helmet from "react-helmet";
import styled from 'styled-components';
import config from "../../data/SiteConfig";
import HomePostListing from "../components/HomePostListing";
import PageHeader from "../components/PageHeader";

export default class TagTemplate extends React.Component {
  render() {
    const tag = this.props.pathContext.tag;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <TagPageContainer>
        <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`}/>
        <PageHeader>
          <h1>Posts in {tag}</h1>
        </PageHeader>
        <TagPageBody>
          <HomePostListing postEdges={postEdges}/>
        </TagPageBody>
      </TagPageContainer>
    );
  }
}

const TagPageContainer = styled.div`
      max-width: 1100px;
    margin: 10px;
`

const TagPageBody = styled.main`
  margin: 0 50px;
  
  @media screen and (max-width: 600px) {
    margin: 0 10px;
  }
`

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
            month
            year
          }
        }
      }
    }
  }
`;
