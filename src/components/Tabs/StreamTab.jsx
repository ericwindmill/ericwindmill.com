import React, {Component} from  'react'
import Link from 'gatsby-link'


class StreamTab extends Component {

  render() {
    return(
      <div>
        <h1>Recent Posts</h1>
        <ul>
          <li>
            <div className='StreamTab--PostItem'>
              <h1> Post 1!</h1>
            </div>
          </li>
          <li>Post 1</li>
          <li>Post 1</li>
        </ul>
        <Link to='/'>All Blog Posts</Link>
      </div>
    )
  }
}

export default StreamTab