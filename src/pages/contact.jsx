import React, { Component } from "react"
import Helmet from "react-helmet"
import Contact from "../components/Pages/Contact/Contact"
import config from "../../data/SiteConfig"

class ContactPage extends Component {
  render() {
    return (
      <div className="Contact--Container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <Contact />
      </div>
    );
  }
}

export default ContactPage;
