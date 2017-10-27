import React, {Component} from  'react'
import Link from 'gatsby-link'


class StreamTab extends Component {

  getRecentPosts(postEdges) {
    console.log(this.props);
    const postList = [];
    for (let i = 0; i < 3; i++) {
      postList.push({
        slug: postEdges[i].node.fields.slug,
        title: postEdges[i].node.frontmatter.title,
        date: postEdges[i].node.frontmatter.date,
        month: postEdges[i].node.frontmatter.month,
        year: postEdges[i].node.frontmatter.year,
        tags: postEdges[i].node.frontmatter.tags
      })
    }
    return postList
  }

  getTags(post) {
    if (post.tags) {
      return post.tags[0]
    }
  }

  render() {
    const postEdges = this.props.postEdges
    let postList = this.getRecentPosts(postEdges)

    postList = postList.map((post) => {
      return (
        <Link key={post.title} to={post.slug} >
          <li>
            <div className='StreamTab--Post'>
              <div className='StreamTab--PostMeta'>
                <time>{post.month}{post.year}</time>
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
        <Link to='/stream'>All Blog Posts →</Link>
      </div>
    )
  }
}

export default StreamTab

