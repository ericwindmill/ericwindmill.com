/* eslint-disable no-param-reassign */
import React, { Component } from 'react'
import Link from 'gatsby-link'
import UserLinks from '../UserLinks/UserLinks'
import config from '../../../data/SiteConfig'

class WideSideNavigation extends Component {
  constructor(props) {
    super(props)

    this.handlePageChange = this.handlePageChange.bind(this)
  }

  // check to see what page you're on to start
  componentDidMount() {
    // const nav = document.querySelector("nav")
    if (this.props.path !== '/') {
      const homeLink = document.querySelector('.to-Home')
      const streamLink = document.querySelector('.to-Stream')
      const courseLink = document.querySelector('.to-Courses')
      const aboutLink = document.querySelector('.to-About')
      const optInLink = document.querySelector('.to-OptIn')
      const contactLink = document.querySelector('.to-Contact')
      const footer = document.querySelector('footer')
      const nav = document.querySelector('nav')
      const permas = document.querySelectorAll('.permalink')

      // adjust width
      nav.style.width = '300px'

      // rotate links
      permas.forEach(link => {
        link.style.transform = 'rotate(0deg)'
      })

      // position links
      homeLink.style.top = '220px'
      homeLink.style.left = '50px'

      streamLink.style.top = '260px'
      streamLink.style.left = '50px'

      courseLink.style.top = '300px'
      courseLink.style.left = '50px'

      aboutLink.style.top = '340px'
      aboutLink.style.left = '50px'

      optInLink.style.top = '380px'
      optInLink.style.left = '50px'

      contactLink.style.top = '420px'
      contactLink.style.left = '50px'

      footer.style.bottom = '0px'
    }
  }

  // 1. Create all the Links / Container Divs
  // The ones that should be hidden on home page begin with 'home-hidden' class
  navFoundation() {
    return (
      <nav className="navigation">
        <Link
          onClick={this.handlePageChange}
          className="to-Home navEl home-revealed toggle-link"
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={this.handlePageChange}
          className="to-Stream navEl home-revealed permalink"
          to="/stream"
        >
          Stream
        </Link>
        <Link
          onClick={this.handlePageChange}
          className="to-Courses navEl home-revealed permalink"
          to="/courses"
        >
          Portfolio
        </Link>
        <Link
          onClick={this.handlePageChange}
          className="to-About navEl home-revealed permalink"
          to="/about"
        >
          About
        </Link>
        <Link
          onClick={this.handlePageChange}
          className="to-OptIn navEl home-hidden toggle-link"
          to="/opt-in"
        >
          Mailing List
        </Link>
        <Link
          onClick={this.handlePageChange}
          className="to-Contact navEl home-hidden permalink"
          to="/contact"
        >
          Contact
        </Link>
        <footer className="home-hidden navEl toggle-link">
          <h2>Elsewhere</h2>
          <div className="Hero--SocialLinks">
            <UserLinks config={config} />
          </div>
          <p>I'm currently available for small projects.</p>
        </footer>
      </nav>
    )
  }

  handlePageChange(e) {
    const homeLink = document.querySelector('.to-Home')
    const streamLink = document.querySelector('.to-Stream')
    const courseLink = document.querySelector('.to-Courses')
    const aboutLink = document.querySelector('.to-About')
    const optInLink = document.querySelector('.to-OptIn')
    const contactLink = document.querySelector('.to-Contact')
    const footer = document.querySelector('footer')
    const nav = document.querySelector('nav')
    const permas = document.querySelectorAll('.permalink')

    if (!e.target.classList.contains('to-Home')) {
      // adjust width
      nav.style.width = '300px'

      // rotate links
      permas.forEach(link => {
        link.style.transform = 'rotate(0deg)'
      })

      // position links
      homeLink.style.top = '220px'
      homeLink.style.left = '50px'

      streamLink.style.top = '260px'
      streamLink.style.left = '50px'

      courseLink.style.top = '300px'
      courseLink.style.left = '50px'

      aboutLink.style.top = '340px'
      aboutLink.style.left = '50px'

      optInLink.style.top = '380px'
      optInLink.style.left = '50px'

      contactLink.style.top = '420px'
      contactLink.style.left = '50px'

      footer.style.bottom = '0px'
    } else {
      // adjust width
      nav.style.width = '55px'

      // rotate links
      permas.forEach(link => {
        link.style.transform = 'rotate(90deg)'
      })

      // position links
      homeLink.style.top = '225px'
      homeLink.style.left = '1000px'

      streamLink.style.top = '20%'
      streamLink.style.left = '0px'

      courseLink.style.top = '40%'
      courseLink.style.left = '0px'

      aboutLink.style.top = '60%'
      aboutLink.style.left = '0px'

      optInLink.style.top = '325px'
      optInLink.style.left = '1500px'

      contactLink.style.top = '80%'
      contactLink.style.left = '0px'

      footer.style.bottom = '-400px'
    }
  }

  render() {
    return this.navFoundation()
  }
}

export default WideSideNavigation
