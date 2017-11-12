import React, { Component } from "react";
import Link from 'gatsby-link'
// import config from "../../../../data/SiteConfig";
import PostListing from "../../PostListing/PostListing";

class Stream extends Component {

  getPostListing() {
    const postList = [];
    this.props.posts.forEach(postEdge => {
      postList.push({
        path: postEdge.node.slug,
        tags: postEdge.node.tags,
        title: postEdge.node.title,
        date: postEdge.node.date,
        year: postEdge.node.year,
        month: postEdge.node.month,
        excerpt: postEdge.node.excerpt,
      })
    })


    const postItems = postList.map(post => {
      let tagList
      if (post.tags) {
        tagList = post.tags.map(tag => <p className="tag">{tag.name}</p>)
      }
      if (post.type !== "Project") {
        return(
          <Link to={post.path} key={post.title}>
            <li>
              <div className='StreamItem--PostMeta'>
                <p>{post.month} {post.year}</p>
              </div>
              <div>→</div>
              <div className='StreamItem--PostContent'>
                <p>{post.title}</p>
              </div>
            </li>
          </Link>
        )
      } else {
      return(
        <Link to={post.path} key={post.title}>
          <li className='Stream--ProjectLi'>
            <div className='StreamItem--PostMeta'>
            </div>
            <div className='StreamItem--PostContent'>
              <h2>{post.title}</h2>
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
          <h2>Articles, Tutorials, Projects and Client Work</h2>
        </section>
        <ul>
          {/*{this.getPostListing()}*/}
          <div className='StreamPostListing'><PostListing postEdges={this.props.posts} /></div>
        </ul>
      </div>
    );
  }
}

export default Stream;
