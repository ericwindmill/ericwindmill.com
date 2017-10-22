import React, { Component } from "react";

class Stream extends Component {

  getPostListing() {
    const postList = [];
    this.props.posts.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        month: postEdge.node.frontmatter.date,
        year: postEdge.node.frontmatter.year,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      })
    })

    const postItems = postList.map(post => {
      if (post.type !== 'project') {
        return(
          <li>
            <h2>{post.title}</h2>
            <time>{post.month} {post.year}</time>
            <p>{post.excerpt}</p>
          </li>
        )
      }
    })

    return postItems
  }

  render() {
    return (
      <div className="Stream">
        <section className='Stream--Hero'>
          <h1>Stream</h1>
          <h2>Articles, Projects and Client Work</h2>
        </section>
        <ul>
          {this.getPostListing()}
        </ul>
      </div>
    );
  }
}

export default Stream;
