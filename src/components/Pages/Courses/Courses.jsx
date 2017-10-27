import React, { Component } from 'react'
import Link from 'gatsby-link'

class CoursesPage extends Component {
  render() {
    return(
      <main>
        <section className='Hero'>
          <h1>Developer Tools</h1>
          <h2>Resources, Courses and Tools for developers</h2>
        </section>
        <ul className="CoursesStream">
          <li className='CourseItem item-1'>
            <a href='http://layoutbyexample.com'>
              <div className='CourseItem--Title'>
                <img className='CourseItem-Image' alt='layout by example cover' src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1502561798/portfolio_site/IMG_1464.jpg' />
                <h2>CSS Layout By Example</h2>
                <p>As developers, our goals for good CSS should never be 'good enough'. Stand out--Learn everything you need to know to make beautiful layouts in 2017 - in about an hour.</p>
              </div>
            </a>
            <p>This course will start out covering the very basics of CSS Layout - box models, te display property, sizing - because a storng foundation is key. You'll finish with the best modern tools, Flexbox and Grid. With a strong foundation, flexbox, and grid under your belt, you can build any layout you want.</p>
            <ul>Pick up the following skills by coding along:
              <li>Layout Basics</li>
              <li>Position</li>
              <li>Float</li>
              <li>Flexbox</li>
              <li>Grid</li>
            </ul>
          </li>
        </ul>
        <section>
          <h1>Email List for updates about future courses</h1>
        </section>
      </main>
    )
  }
}

export default CoursesPage