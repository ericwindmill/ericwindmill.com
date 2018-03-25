import React, {Component} from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO";
import HomePostListing from "../components/HomePostListing";

export default class StreamPage extends Component {



  render() {
    const postsEdges = this.props.data.allMarkdownRemark.edges
    return (
      <StreamContainer>
        <Helmet title={`Articles | ${config.siteTitle}`}/>
        <SEO postEdges={postsEdges}/>
        <h1>Articles</h1>
        <StreamBody>
          <HomePostListing postEdges={postsEdges}/>
        </StreamBody>
      </StreamContainer>
    );
  }
}

const StreamContainer = styled.div`
  max-width: 825px;
  min-width: 760px;
`;

const StreamBody = styled.div``

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query StreamQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "Post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
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
