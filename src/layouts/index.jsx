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
          <div id="sidebar">
            <Sidebar/>
          </div>
          <div id="main-content">{children()}</div>
        </IndexContentContainer>
        <MobileIndexContainer>
          <p>⚡Under Construction️⚡️</p>
        </MobileIndexContainer>
      </IndexTemplateContainer>
    );
  }
}

const IndexTemplateContainer = styled.main``;

const IndexContentContainer = styled.section`
  @media screen and (min-width: 800px) {
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
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const MobileIndexContainer = styled.section`
  @media screen and (max-width: 801px) {
    display: flex;
        flex-flow: column;
    height: 100vh;
    width: 100vw;
    background: rgb(0,70,191);
    align-items: center;
    justify-content: center;
    > * {
      font-family:"Andale Mono", monospace;
      font-weight: normal;
      color: white;
    }
  }

  @media screen and (min-width: 601px) {
    display: none;
  }
`
