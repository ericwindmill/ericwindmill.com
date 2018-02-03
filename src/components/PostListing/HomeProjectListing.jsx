import React from 'react'
import Link from 'gatsby-link'

class ProjectListing extends React.Component {
  getPostList() {
    const postList = []
    this.props.postEdges.forEach(postEdge => {
      if (postEdge.node.frontmatter.type === 'Project') {
        postList.push({
          path: postEdge.node.fields.slug,
          tags: postEdge.node.frontmatter.tags,
          cover: postEdge.node.frontmatter.cover,
          title: postEdge.node.frontmatter.title,
          date: postEdge.node.frontmatter.date,
          year: postEdge.node.frontmatter.year,
          month: postEdge.node.frontmatter.month,
          excerpt: postEdge.node.excerpt,
          timeToRead: postEdge.node.timeToRead
        })
      }
    })
    return postList
  }

  render() {
    const postList = this.getPostList()
    return (
      <div className="HomePostListing">
        <h2>Portfolio</h2>
        <p style={{ marginBottom: '30px' }}>
          These projects include highlights from my professional career, as well
          as open-source contributions and personal projects.
        </p>
        {/* Your post list here. */
        postList.map(post => (
          <div key={post.title} className="HomePostListing--Post">
            <span className="HomePostListing--DateMeta">
              <p>{post.month}</p>
              <p>{post.year}</p>
            </span>
            <p className="PostIcon">&nbsp; → &nbsp;</p>
            <p>{post.title}</p>
          </div>
        ))}
        <Link to={'courses'}>View Portfolio.</Link>
      </div>
    )
  }
}

export default ProjectListing
