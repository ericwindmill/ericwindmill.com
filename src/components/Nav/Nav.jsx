import React, { Component } from "react";
import Link from 'gatsby-link'
import "./Nav.scss";

class MainNavigation extends Component {
  render () {
    return (
      <nav className='MainNavigation'>
        <Link className='toStream' to='/'>Stream</Link>
        <Link className='toContact' to='/'>Contact</Link>
        <Link className='toCourses' to='/'>Courses</Link>
      </nav>
    )
  }
}

export default MainNavigation