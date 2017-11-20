import React from "react";
import Helmet from "react-helmet";
import Home from '../components/Pages/Home/Home'
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="Home--Container ss-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <Home postEdges={postEdges} config={config} />
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
        allMarkdownRemark(
          limit: 10
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
              }
            }
          }
        }
  }
`;