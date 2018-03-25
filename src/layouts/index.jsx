import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import config from "../../data/SiteConfig";
import "../main.scss";
import Sidebar from "../components/SidebarNav";

export default class MainLayout extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "tags/") {
      title = "Tags";
    } else if (currentPath === "categories/") {
      title = "Categories";
    } else if (currentPath === "about/") {
      title = "About";
    } else if (currentPath.includes("posts")) {
      title = "Article";
    } else if (currentPath.includes("tags/")) {
      const tag = currentPath
        .replace("tags/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.includes("categories/")) {
      const category = currentPath
        .replace("categories/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `${capitalize(category)}`;
    }
    return title;
  }

  render() {
    const {children, data, location} = this.props;
    return (
      <IndexTemplateContainer>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription}/>
        </Helmet>
        <IndexContentContainer>
          <div id='sidebar'>
            <Sidebar/>
          </div>
          <div id='main-content'>
            {children()}
          </div>
        </IndexContentContainer>
      </IndexTemplateContainer>
    );
  }
}

const IndexTemplateContainer = styled.main``;

const IndexContentContainer = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
  
  #main-content {
    padding: 100px 100px 100px 5px;
    overflow: scroll;
    width: 100%;
  }
  
  #sidebar {
    padding: 100px 50px;
  }
`
