import React, { Component } from 'react'
import Link from 'gatsby-link'

class HomeTabs extends Component {
  handleClose(e) {
    e.preventDefault()
    const tabName = e.target.classList[0].split('--')[1]
    const tab = document.querySelector(`.HomeTabs--${tabName}`)
    tab.classList.remove('reveal-tab')
  }
  render() {
    return (
      <div className='HomeTabs'>
        <section className="HomeTabs--Stream">
          <h1>Stream Tab</h1>
          <p onClick={this.handleClose} className="close-tab--Stream">❌</p>
        </section>
        <section className="HomeTabs--Courses">
          <h1>Courses Tab</h1>
          <p onClick={this.handleClose} className="close-tab--Courses">❌</p>
        </section>
        <section>
          <h1>Contact Tab</h1>
        </section>
        <section>
          <h1>About Tab</h1>
        </section>
      </div>
    )
  }
}

export default HomeTabs