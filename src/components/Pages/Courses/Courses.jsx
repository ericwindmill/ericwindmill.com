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
              <div className='CourseItem--Description'>
                <p>This course will start out covering the very basics of CSS Layout - box models, te display property, sizing - because a strong foundation is key. You'll finish by mastering the best modern tools: Flexbox and Grid. With a strong foundation, flexbox, and grid under your belt, you can build any layout you want.</p>
                <p>Pick up the following skills in about an hour:</p>
                <ul>
                  <li>Layout Basics</li>
                  <li>Position</li>
                  <li>Float</li>
                  <li>Flexbox</li>
                  <li>Grid</li>
                </ul>
              </div>
            </a>
          </li>
          <li className='CourseItem item-2'>
            <a href='#'>
              <div className='CourseItem--Title'>
                <img className='CourseItem-Image' alt='layout by example cover' src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1502561798/portfolio_site/IMG_1464.jpg' />
                <h2>On the Grid</h2>
                <p>A CSS Grid Sandbox. Test the properties in in real time. Master CSS Grid in an interactive environment.</p>
              </div>
            <div className='CourseItem--Description'>
              <p>CSS Grid is a powerful layout tool baked into CSS. Use this site to master Grid. Skip the constant tweaking and refreshing in your current Grid project. Test your properties out in the sand box and then click 'get the code' to copy and paste it into your own project. As of March 2017, CSS grid is supported by all major browsers.</p>
            </div>
            </a>
          </li>
          <li className='CourseItem item-3'>
            <a href='#'>
              <div className='CourseItem--Title'>
                <img className='CourseItem-Image' alt='layout by example cover' src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1502561798/portfolio_site/IMG_1464.jpg' />
                <h2>Flutter By Example</h2>
                <p>Flutter is the newest (and best) 'write once, deploy anywhere' mobile framework, brought to you by Google. Flutter boasts the hottest hot reload I've ever seen, blazing speed, complete developer control and an incredible take on layout.</p>
              </div>
              <div className='CourseItem--Description'>
                <p>This is the future, people. Build your next mobile app in no time using Google's newest tool. Without any setup, you can build and app and deploy to iOS and Android at once.</p>
                <p>Flutter is the best mobile framework around right now for a few reasons: </p>
                <ul>
                  <li>Hot Reload</li>
                  <li>Dart</li>
                  <li>Backed by Google</li>
                  <li>Complete developer control to customize</li>
                  <li>Complete developer control to customize</li>
                  <li>Complete developer control to customize</li>
                </ul>
              </div>
            </a>
          </li>
        </ul>
        {/*<section>*/}
          {/*<h1>Email List for updates about future courses</h1>*/}
        {/*</section>*/}
      </main>
    )
  }
}

export default CoursesPage