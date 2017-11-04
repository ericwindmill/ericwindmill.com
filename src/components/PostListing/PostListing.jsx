import React from "react";
import Link from "gatsby-link";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
        postList.push({
          path: postEdge.node.fields.slug,
          tags: postEdge.node.frontmatter.tags,
          cover: postEdge.node.frontmatter.cover,
          title: postEdge.node.frontmatter.title,
          month: postEdge.node.frontmatter.month,
          year: postEdge.node.frontmatter.year,
          excerpt: postEdge.node.excerpt,
          timeToRead: postEdge.node.timeToRead,
        });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <ul className="PostListing">
        {/* Your post list here. */
        postList.map(post =>
            <Link to={post.path} key={post.title}>
              <li>
                <div className='StreamItem--PostMeta'>
                  <p>{post.month} {post.year}</p>
                  <p>Eric Windmill</p>
                </div>
                <div className='StreamItem--PostContent'>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                </div>
              </li>
            </Link>
        )}
      </ul>
    );
  }
}

export default PostListing;
