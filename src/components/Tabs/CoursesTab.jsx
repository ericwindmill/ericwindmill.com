import React, {Component} from  'react'

class CoursesTab extends Component {
  render() {
    return(
      <ul>
        <a href='#'>
          <li className='CourseItem item-1 CoursesTab--Layout'>
            <img className='CourseItem-Image' alt='layout by example cover' src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1502561798/portfolio_site/IMG_1464.jpg' />
            <h2>CSS Layout By Example</h2>
            <p>Everything you need to know to make beautiful layouts in 2017 - in about an hour.</p>
          </li>
        </a>
        <a href='#'>
          <li className='CourseItem item-2 CoursesTab--Flutter'>
            <img className='CourseItem-Image' src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1502561798/portfolio_site/IMG_1464.jpg' />
            <h2>Flutter by Example</h2>
            <p>Build blazing-fast mobile apps using Google's new framework. Write once, deploy to iOS and Android.</p>
          </li>
        </a>
      </ul>
    )
  }
}

export default CoursesTab