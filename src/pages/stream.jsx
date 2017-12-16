import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Stream from '../components/Pages/Stream/Stream'
import SEO from "../components/SEO/SEO";

class StreamPage extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="Stream--Container">
        <Helmet title={`Courses | ${config.siteTitle}`} />
        <SEO postEdges={postEdges} />
        <Stream posts={postEdges} />
      </div>
    );
  }
}

export default StreamPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query StreamQuery {
        allMarkdownRemark(
          limit: 25
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