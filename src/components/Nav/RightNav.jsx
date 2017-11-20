import React, { Component } from "react"
import Link from 'gatsby-link'
import HomeTabs from '../Tabs/HomeTabs'
import UserLinks from '../UserLinks/UserLinks'
import config from '../../../data/SiteConfig'

class WideSideNavigation extends Component {
  whichNav() {
    if (this.props.path === '/') {
      return (
        <div>
          <nav className='MainNavigation'>
            <Link className='to-Stream' to='/stream'>Stream</Link>
            <Link className='to-Courses' to='/courses'>Courses</Link>
            <Link className='to-About' to='/about'>About</Link>
            <Link className='to-Contact' to='/contact'>Contact</Link>
          </nav>
          <HomeTabs postEdges={this.props.postEdges} />
        </div>
      )
    } else {
      return (
        <div className='WideNavigation'>
          <nav>
            <Link className='to-About' to='/'>Home</Link>
            <Link className='to-Stream' to='/stream'>Stream</Link>
            <Link className='to-Courses' to='/courses'>Courses</Link>
            <Link className='to-Courses' to='/about'>About</Link>
            <Link to='/opt-in'>Mailing List</Link>
            <Link className='to-Contact' to='/contact'>Contact</Link>
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