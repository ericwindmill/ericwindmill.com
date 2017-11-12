import React, {Component} from  'react'
import Link from 'gatsby-link'


class StreamTab extends Component {

  getRecentPosts(postEdges) {
    const postList = [];
    for (let i = 0; i < 3; i++) {
      if (postEdges[i] === undefined) {break};
      postList.push({
        path: postEdges[i].node.slug,
        tags: postEdges[i].node.tags,
        title: postEdges[i].node.title,
        date: postEdges[i].node.date,
        excerpt: postEdges[i].node.excerpt,
        year: postEdges[i].node.year,
        month: postEdges[i].node.month
      })
    }
    return postList;
  }

  getTags(post) {
    if (post.tags) {
      return post.tags[0].name
    }
  }

  render() {
    const postEdges = this.props.postEdges
    let postList = this.getRecentPosts(postEdges)

    postList = postList.map((post) => {
      return (
        <Link key={post.title} to={post.path} >
          <li>
            <div className='StreamTab--Post'>
              <div className='StreamTab--PostMeta'>
                <time>{post.month} {post.year}</time>
                <p>{this.getTags(post)}</p>
              </div>
              <h2>{post.title}</h2>
            </div>
          </li>
        </Link>
      )
    })
    return(
      <div>
        <ul>
          {postList}
        </ul>
        <Link className='link-out' to='/stream'>All Blog Posts →</Link>
      </div>
    )
  }
}

export default StreamTab

