import React, { Component } from "react";
import Link from 'gatsby-link'

class WideSideNavigation extends Component {

  render () {
    return (
      <div>
        <nav className='WideSideNavigation--Links'>
          <Link onClick={this.handleHover} className='to-Stream' to='/'>Stream</Link>
          <Link onClick={this.handleHover} className='to-Contact' to='/'>Contact</Link>
          <Link onClick={this.handleHover} className='to-Courses' to='/'>Courses</Link>
          <Link onClick={this.handleHover} className='to-About' to='/'>About</Link>
        </nav>
      </div>
    )
  }
}

export default WideSideNavigation