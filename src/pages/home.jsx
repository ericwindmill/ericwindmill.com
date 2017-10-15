import React, { Component } from "react"
import Helmet from "react-helmet"
import Nav from '../components/Nav/Nav'
import Home from '../components/Pages/Home/Home'
import config from "../../data/SiteConfig"

class HomePage extends Component {
  render() {
    return (
      <div className="courses-container">
        <Helmet title={`Eric Windmill | ${config.siteTitle}`} />
        <Nav />
        <Home />
      </div>
    );
  }
}

export default HomePage;