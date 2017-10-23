import React, { Component } from "react";
import Link from 'gatsby-link'

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
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      })
    })


    const postItems = postList.map(post => {
      let tagList
      if (post.tags) {
        tagList = post.tags.map(tag => <p className="tag">{tag}</p>)
      }

      if (post.type !== 'project') {
        return(
          <Link to={post.path} key={post.title}>
            <li>
              <div className='StreamItem--PostMeta'>
                <p>{post.month} {post.year}</p>
                <p>Eric Windmill</p>
              </div>
              <div className='StreamItem--PostContent'>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <span>{tagList}</span>
              </div>
            </li>
          </Link>
        )
      }
    })

    return postItems
  }

  render() {
    return (
      <div className="Stream">
        <section className='Hero'>
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
