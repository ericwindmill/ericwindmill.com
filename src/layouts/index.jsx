import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "../main.scss";
import WideSideNavigation from '../components/Nav/RightNav'

export default class MainLayout extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "tags/") {
      title = "Tags";
    } else if (currentPath === "categories/") {
      title = "Categories";
    } else if (currentPath === "about/") {
      title = "About";
    } else if (currentPath.includes("posts")) {
      title = "Article";
    } else if (currentPath.includes("tags/")) {
      const tag = currentPath
        .replace("tags/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.includes("categories/")) {
      const category = currentPath
        .replace("categories/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `${capitalize(category)}`;
    }
    return title;
  }
  render() {
    const { children, data, location } = this.props;
    return (
      <div className='IndexTemplate--Container'>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <div className='IndexTemplate--Page ss-container'>
          {children()}
          <WideSideNavigation
            path={location.pathname}
            postEdges={data.allMarkdownRemark.edges}
          />
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query PostsQuery {
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
                category
              }
            }
          }
        }
  }
`