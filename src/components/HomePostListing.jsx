import React from "react";
import styled from 'styled-components';
import Link from "gatsby-link";

export default class PostListing extends React.Component {
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

  getPostListing() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
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
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostListing()
    return (
      <HomePostListingContainer>
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
      </HomePostListingContainer>
    );
  }
}

const HomePostListingContainer = styled.div`
  display: flex;
	flex-direction: column;
	margin-bottom: 0;
		p {
		display: inline-block;
		margin-bottom: 0;
	}
	
	.HomePostListing--Post {
		display: grid;
		grid-template-columns: 100px 50px 1fr;
		padding-bottom: 25px;

		.HomePostListing--DateMeta {
			display: flex;
			flex-direction: column;
			p {
				font-family: "Fira Code", monospace;
				font-size: 1.5em;
			}
		}
		.HomePostListing--Category {
			font-family: "Fira Code", monospace;
			font-size: 1.5em;
		}
	}
`
