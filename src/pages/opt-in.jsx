import React, { Component } from "react";
import Helmet from "react-helmet";
import OptIn from "../components/Pages/OptIn/OptInPage";
import config from "../../data/SiteConfig";

class OptInPage extends Component {
  render() {
    return (
      <div className="OptIn--Container">
        <Helmet title={`Courses | ${config.siteTitle}`} />
        <OptIn />
      </div>
    );
  }
}

export default OptInPage;