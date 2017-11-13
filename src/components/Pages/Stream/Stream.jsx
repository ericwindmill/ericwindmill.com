import React, { Component } from "react";
import Link from 'gatsby-link'
import PostListing from "../../PostListing/PostListing";

class Stream extends Component {

  getPostListing() {
    const postList = [];
    this.props.posts.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        month: postEdge.node.frontmatter.month,
        year: postEdge.node.frontmatter.year,
        type: postEdge.node.frontmatter.type,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        category: postEdge.node.frontmatter.category,
      })
    })
    return postList
  }

  render() {
    const posts =  this.getPostListing();
    return (
      <div className="Stream">
        <section className='Hero'>
          <h1>Stream</h1>
          <h2>Articles, Tutorials, Projects and Client Work</h2>
        </section>
          <div className='StreamPostListing'><PostListing postEdges={posts} /></div>
      </div>
    );
  }
}

export default Stream;
