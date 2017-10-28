import React from 'react'
import Link from 'gatsby-link'

class PostListing extends React.Component {
  componentDidMount () {
    const posts = document.querySelectorAll('.HomePostListing--Post')
    posts.forEach(post => {
      post.addEventListener('mouseover', () => {
        const icon = post.querySelector('.PostIcon')
        icon.innerHTML = '&nbsp; 👓  &nbsp;'
      })
      post.addEventListener('mouseout', () => {
        const icon = post.querySelector('.PostIcon')
        icon.innerHTML = '&nbsp; →  &nbsp;'
      })
    })
  }

  getPostList () {
    const postList = []
    this.props.postEdges.forEach(postEdge => {
      if (postEdge.node.frontmatter.type !== 'project') {
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
        })}
    })
    return postList
  }


  render () {
    const postList = this.getPostList()
    return (
      <div className="HomePostListing">
        <h2>Articles</h2>
        {/* Your post list here. */
          postList.map(post =>
            (<div
              key={post.title}
              className='HomePostListing--Post'>
                <span className='HomePostListing--DateMeta'>
                    <p>{post.month}</p>
                    <p>{post.year}</p>
                </span>
              <p className='PostIcon'>&nbsp; →  &nbsp;</p>
              <Link to={post.path}>
                <p>{post.title}</p>
              </Link>
            </div>)
          )}
      </div>
    )
  }
}

export default PostListing
