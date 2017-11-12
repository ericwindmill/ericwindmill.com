import React from "react";
import Helmet from "react-helmet";
import Home from '../components/Pages/Home/Home'
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import {PostDataHelpers} from "../scripts/helper_methods";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allWordpressPost.edges
    const util = new PostDataHelpers()
    const formattedPosts = util.formatDatesForMultiplePost(this.props.data.allWordpressPost.edges)
    return (
      <div className="Home--Container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <Home postEdges={formattedPosts} config={config} />
      </div>
    );
  }
}

export default Index;

    /* eslint no-undef: "off" */
    export const pageQuery = graphql`
query indexPageQuery {
    allWordpressPost(
        sort: {fields: [date], order: DESC}
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
}
`