import React, { Component } from "react";
import Helmet from "react-helmet";
import Courses from "../components/Pages/Courses/Courses";
import config from "../../data/SiteConfig";

class CoursesPage extends Component {
  render() {
    return (
      <div className="Courses--Container">
        <Helmet title={`Courses | ${config.siteTitle}`} />
        <Courses />
      </div>
    );
  }
}

export default CoursesPage;