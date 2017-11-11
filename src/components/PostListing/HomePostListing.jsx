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
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.slug,
        tags: postEdge.node.tags,
        title: postEdge.node.title,
        date: postEdge.node.date,
        excerpt: postEdge.node.excerpt,
      })
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
                    <p>{post.date}</p>
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
