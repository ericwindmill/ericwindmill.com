import React, {Component} from "react";
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
    const posts = this.getPostListing();
    return (
      <main className="Stream">
        <section className='Hero'>
          <h1>Articles</h1>
        </section>
        <section className='Stream--Body'>
          <div className='StreamPostListing'><PostListing postEdges={posts}/></div>
        </section>
      </main>
    );
  }
}

export default Stream;
