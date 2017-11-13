import React from "react";
import Link from "gatsby-link";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
        postList.push({
          path: postEdge.path,
          tags: postEdge.tags,
          cover: postEdge.cover,
          title: postEdge.title,
          type: postEdge.type,
          month: postEdge.month,
          year: postEdge.year,
          excerpt: postEdge.excerpt,
          timeToRead: postEdge.timeToRead,
          category: postEdge.category
        });
    });

    const postItems = new Array();
    postList.forEach(post => {
      if (post.type !== "Project") {
        postItems.push(
          <Link to={post.path} key={post.title}>
            <li>
              <div className='StreamItem--PostMeta'>
                <p>{post.month} {post.year}</p>
                <p>{post.category}</p>
              </div>
              <div className='StreamItem--PostContent'>
                <h2>{post.title}</h2>
              </div>
            </li>
          </Link>
        )
      } else {
        postItems.push(
          <Link to={post.path} key={post.title}>
            <li>
              <div className='StreamItem--PostMeta'>
                <p>{post.month} {post.year}</p>
                <p>{post.category}</p>
              </div>
              <div className='StreamItem--PostContent'>
                <h2>{post.title}</h2>
              </div>
            </li>
          </Link>
        )
      }
    })
    return postItems;
  }
  render() {
    const posts = this.getPostList();
    return (
      <ul className="PostListing">
        {
          posts.map(post => (
            <li>{post}</li>
          ))
        }
      </ul>
    );
  }
}

export default PostListing;
