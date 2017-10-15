import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/Pages/About/About";
import config from "../../data/SiteConfig";

class CoursesPage extends Component {
  render() {
    return (
      <div className="courses-container">
        <Helmet title={`Courses | ${config.siteTitle}`} />
        <About />
      </div>
    );
  }
}

export default CoursesPage;