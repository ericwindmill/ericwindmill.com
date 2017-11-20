import React, { Component } from "react";
import Link from 'gatsby-link'
import PostListing from "../../PostListing/PostListing";
import OptInForm from '../../Forms/OptInForm/HomeOptIn'

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
      <main className="Stream">
        <section className='Hero'>
          <h1>Stream</h1>
          <h2>Articles, Tutorials, Projects and Client Work</h2>
        </section>
        <section className='OptIn Stream--OptIn'>
          <h3>Monday Morning Updates</h3>
          <p>Sign up to be updated when new courses are available, as well as receive the best design and development news from the web weekly.</p>
          <OptInForm />
        </section>
        <section className='Stream--Body'>
          <div className='StreamPostListing'><PostListing postEdges={posts} /></div>
        </section>
      </main>
    );
  }
}

export default Stream;
