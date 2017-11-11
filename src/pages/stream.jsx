import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Stream from '../components/Pages/Stream/Stream'
import SEO from "../components/SEO/SEO";

class StreamPage extends Component {
  render() {
    // const postEdges = this.props.data.allWordpressPost.edges;
    return (
      <div className="Stream--Container">
        <Helmet title={`Courses | ${config.siteTitle}`} />
        {/*<SEO postEdges={postEdges} />*/}
        {/*<Stream posts={postEdges} />*/}
      </div>
    );
  }
}

export default StreamPage;

/* eslint no-undef: "off" */
// export const pageQuery = graphql`
//  query streamQuery {
//   allWordpressPost(
//     sort: {fields: [date], order: DESC}
//   ) {
//     edges {
//       node {
//         id
//         slug
//         title
//         content
//         excerpt
//         date
//         modified
//         author {
//           name
//         }
//         template
//         categories {
//           name
//         }
//         tags{
//           name
//         }
//         acf {
// 					project
//         }
//       }
//     }
//   }
// }
// `;