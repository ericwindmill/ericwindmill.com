import React from "react";
import Link from "gatsby-link";

class PostListing extends React.Component {

  getPostList () {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.slug,
        tags: postEdge.node.tags,
        title: postEdge.node.title,
        date: postEdge.node.date,
        excerpt: postEdge.node.excerpt,
        month: postEdge.node.month,
        year: postEdge.node.year,
        category: postEdge.node.categories[0].name
      })
    })
    return postList
  }
  render() {
    console.log(this.props.postEdges)
    const postList = this.getPostList();
    return (
      <ul className="PostListing">
        {
        postList.map(post =>
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
        )}
      </ul>
    );
  }
}

export default PostListing;
