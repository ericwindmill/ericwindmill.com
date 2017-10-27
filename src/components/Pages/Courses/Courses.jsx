import React, { Component } from 'react'

class CoursesPage extends Component {
  render() {
    return(
      <main>
        <section className='Hero'>
          <h1>Developer Tools</h1>
          <h2>Resources, Courses and Tools for developers</h2>
        </section>
        <ul>
          <li>
            <h1>Layout By Example</h1>
          </li>
          <li>
            <h1>On the Grid</h1>
          </li>
          <li>
            <h1>Flutter By Example</h1>
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