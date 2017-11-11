import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

export default class CategoryTemplate extends React.Component {
  render() {
    const category = this.props.pathContext.category;
    // const postEdges = this.props.data.wordpr;
    return (
      <div className="category-container">
        <Helmet
          title={`Posts in category "${category}" | ${config.siteTitle}`}
        />
        <section className='Hero'>
          <h1>{category} Posts</h1>
        </section>
        <PostListing postEdges={postEdges} />
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
    query CategoryPage($category: String) {
      allWordpressPost {
        edges{
          node{
            excerpt
            title
            date
            tags{
              name
              count
            }
          }
        }
      }
    }
`