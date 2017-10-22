import React, {Component} from  'react'
import Link from 'gatsby-link'


class StreamTab extends Component {

  getRecentPosts(postEdges) {
    const postList = [];
    for (let i = 0; i < 3; i++) {
      postList.push({
        title: postEdges[i].node.frontmatter.title,
        date: postEdges[i].node.frontmatter.date,
      })
    }
    return postList
  }

  render() {
    const postEdges = this.props.postEdges
    let postList = this.getRecentPosts(postEdges)

    postList = postList.map(post => {
      return (
        <li>
          <div className='StreamTab--Post'>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
          </div>
        </li>
      )
    })
    console.log(postList)
    return(
      <div>
        <ul>
          {postList}
        </ul>
        <Link to='/'>All Blog Posts →</Link>
      </div>
    )
  }
}

export default StreamTab

