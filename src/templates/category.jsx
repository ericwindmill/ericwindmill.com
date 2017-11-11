import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

class CategoryTemplate extends React.Component {
  render() {
    const category = this.props.pathContext.category;
    const postEdges = this.props.data.allWordPressPost.edges;
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

export default CategoryTemplate