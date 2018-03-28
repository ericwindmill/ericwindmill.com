import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import MdMenu from 'react-icons/lib/md/menu'
import config from "../../data/SiteConfig";
import "../main.scss";
import Sidebar from "../components/SidebarNav";

import FloatingActionButton from "../components/FloatingActionButton";

export default class MainLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuShown: false,
    }
    this.showMenu = this.showMenu.bind(this);
  }

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

  showMenu() {
    const menu = document.querySelector('#sidebar');
    const content = document.querySelector('#main-content');
    const button = document.querySelector('#fab');
    if (this.state.isMenuShown) {
      menu.style.left = '-500px';
      content.style.left = '0px';
      button.style.left = '0px';
      this.setState((_) => {
        return {isMenuShown: false}
      })
    } else {
      menu.style.left = '0px';
      content.style.left = '330px';
      button.style.left = '330px';
      this.setState((_) => {
        return {isMenuShown: true}
      })
    }
  }

  render() {
    const {children} = this.props;
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
          <div id="fab" onClick={this.showMenu}>
            <FloatingActionButton>
              <MdMenu style={{width: "25px", height: "25px"}}/>
            </FloatingActionButton>
          </div>
          <div id="main-content">{children()}</div>
        </IndexContentContainer>
      </IndexTemplateContainer>
    );
  }
}

const IndexTemplateContainer = styled.main``;

const IndexContentContainer = styled.section`
  position: relative;
  
  #fab {
    position: relative;
    left: 0;
    transition: all 1s ease;
  }
  
  #sidebar {
    position: absolute;
    left: -500px;
    transition: all 1s ease;
  }
  
  #main-content {
    position: absolute;
    left: 0px;
    transition: all 1s ease;
  }

  `;
