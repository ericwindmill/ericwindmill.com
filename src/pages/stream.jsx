import React, {Component} from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Stream from "../components/Pages/Stream/Stream";
import SEO from "../components/SEO";

class StreamPage extends Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="Stream--Container">
        <Helmet title={`Articles | ${config.siteTitle}`}/>
        <SEO postEdges={posts}/>
        <Stream posts={posts}/>
      </div>
    );
  }
}

export default StreamPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query StreamQuery {
    allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "Post"}}}
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
