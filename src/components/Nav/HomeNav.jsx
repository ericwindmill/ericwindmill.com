import React, { Component } from "react";
import Link from 'gatsby-link'
import "./Nav.scss";
import HomeTabs from '../Tabs/HomeTabs'

class MainNavigation extends Component {
  constructor (props) {
    super(props)

    this.handleHover = this.handleHover.bind(this)
  }
  handleHover (e) {
    e.preventDefault()
    const tabName = e.target.classList[0].split('-')[1]
    const tabClassLookup = `.HomeTabs--${tabName}`
    let tab = document.querySelector(tabClassLookup)
    tab.classList.add('reveal-tab')
  }



  render () {
    return (
      <div>
        <nav className='MainNavigation'>
          {/*<p onClick={this.handleHover}>Stream</p>*/}
          <Link onClick={this.handleHover} className='to-Stream' to='/'>Stream</Link>
          <Link className='to-Contact' to='/'>Contact</Link>
          <Link onClick={this.handleHover} className='to-Courses' to='/'>Courses</Link>
          <Link className='toAbout' to='/'>About</Link>
        </nav>
        <HomeTabs />
      </div>
    )
  }
}

export default MainNavigation