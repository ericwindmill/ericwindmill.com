import React from "react";
import Link from "gatsby-link";

class PostListing extends React.Component {
  componentDidMount() {
    const posts = document.querySelectorAll(".HomePostListing--Post");
    posts.forEach(post => {
      post.addEventListener("mouseover", () => {
        const icon = post.querySelector(".PostIcon");
        icon.innerHTML = "&nbsp; 👓  &nbsp;";
      });
      post.addEventListener("mouseout", () => {
        const icon = post.querySelector(".PostIcon");
        icon.innerHTML = "&nbsp; →  &nbsp;";
      });
    });
  }

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
    return postList;
  }

  render() {
    const postList = this.getPostList();
    console.log(postList);
    return (
      <div className="HomePostListing">
        {postList.map(post => (
          <div key={post.title} className="HomePostListing--Post">
            <span className="HomePostListing--DateMeta">
              <p>{post.month}</p>
              <p>{post.year}</p>
            </span>
            <p className="PostIcon">&nbsp; → &nbsp;</p>
            <Link to={post.path}>
              <p>{post.title}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default PostListing;
