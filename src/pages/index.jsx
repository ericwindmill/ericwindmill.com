import React from "react";
import Helmet from "react-helmet";
import Home from '../components/Pages/Home/Home'
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import MainNavigation from '../components/Nav/Nav'

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <MainNavigation />
        <Home postEdges={postEdges} />
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
          }
        }
      }
    }
  }
`;
