import React, {Component} from  'react'
import Link from 'gatsby-link'
import cssLogo from '../../assets/css3_unofficial_shaped.png'

class CoursesTab extends Component {
  render() {
    return(
      <div>
        <h2>Newest Course:</h2>
      <ul>
        <a href='#'>
          <li className='CourseItem item-1 CoursesTab--Layout'>
            <img className='CourseItem-Image' alt='layout by example cover' src={cssLogo} />
            <h3>CSS Layout By Example</h3>
            <p>As developers, our goals for good CSS should never be 'good enough'. Stand out--Learn everything you need to know to make beautiful layouts in 2017 - in about an hour.</p>
          </li>
        </a>
      </ul>
        <Link className='link-out' to='/courses'>All Courses and Developer Tools →</Link>
      </div>
    )
  }
}

export default CoursesTab