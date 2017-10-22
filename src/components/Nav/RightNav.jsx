import React, { Component } from "react"
import Link from 'gatsby-link'
import HomeTabs from '../Tabs/HomeTabs'
import UserLinks from '../UserLinks/UserLinks'
import config from '../../../data/SiteConfig'

class WideSideNavigation extends Component {
  handleHover (e) {
    e.preventDefault()
    const tabName = e.target.classList[0].split('-')[1]
    const tabClassLookup = `.HomeTabs--${tabName}`
    let tab = document.querySelector(tabClassLookup)
    tab.classList.add('reveal-tab')
  }

  whichNav() {
    if (this.props.path === '/') {
      return (
        <div>
          <nav className='MainNavigation'>
            <Link onClick={this.handleHover} className='to-Stream' to='/'>Stream</Link>
            <Link onClick={this.handleHover} className='to-Contact' to='/'>Contact</Link>
            <Link onClick={this.handleHover} className='to-Courses' to='/'>Courses</Link>
            <Link onClick={this.handleHover} className='to-About' to='/'>About</Link>
          </nav>
          <HomeTabs postEdges={this.props.postEdges} />
        </div>
      )
    } else {
      return (
        <div className='WideNavigation'>
          <nav>
            <Link onClick={this.handleHover} className='to-Stream' to='/'>Stream</Link>
            <Link onClick={this.handleHover} className='to-Contact' to='/'>Contact</Link>
            <Link onClick={this.handleHover} className='to-Courses' to='/'>Courses</Link>
            <Link onClick={this.handleHover} className='to-About' to='/'>About</Link>
          </nav>
          <footer>
            <h2>Elsewhere</h2>
            <div className='Hero--SocialLinks'><UserLinks config={config} /></div>
            <p>I'm currently available for small projects.</p>
          </footer>
        </div>
      )
    }
  }

  render () {
    return this.whichNav();
  }
}

export default WideSideNavigation