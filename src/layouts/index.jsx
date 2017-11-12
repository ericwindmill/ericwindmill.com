import React from "react";
import Helmet from "react-helmet";
import 'prismjs/themes/prism-solarizedlight.css';
import config from "../../data/SiteConfig"
import { PostDataHelpers } from '../scripts/helper_methods'
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
    const { children, data, location } = this.props
    const util = new PostDataHelpers()
    const formattedPosts = util.formatDatesForMultiplePost(data.allWordpressPost.edges)
    return (
      <div className='IndexTemplate--Container'>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <div className='IndexTemplate--Page'>
          {children()}
          <WideSideNavigation
            path={location.pathname}
            postEdges={formattedPosts}
          />
        </div>
      </div>
    );
  }
}

 /* eslint no-undef: "off" */
export const pageQuery = graphql`
 query indexQuery {
  allWordpressPost(
  limit: 10
  ) {
    edges {
      node {
        id
        slug
        title
        content
        excerpt
        date
        modified
        author {
          name
        }
        template
        categories {
          name
        }
        tags{
          name
        }
        acf {
					project
        }
      }
    }
  }
}`;