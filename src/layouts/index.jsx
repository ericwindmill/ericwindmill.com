import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import MdMenu from 'react-icons/lib/md/menu'
import config from "../../data/SiteConfig";
import "../main.scss";
import Sidebar from "../components/SidebarNav";

import FloatingActionButton from "../components/FloatingActionButton";
import UserLinks from "../components/UserLinks";

export default class MainLayout extends React.Component {
  constructor() {
    super();
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
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
    const overlay = document.querySelector('#overlay');
    if (menu.style.left === '0px') {
      menu.style.left = '-500px';
      overlay.style.background = 'transparent';
      overlay.style.zIndex = '-1';
    } else {
      menu.style.left = '0px';
      overlay.style.background = 'rgba(0,0,0,.2)';
      overlay.style.zIndex = '1';
    }
  }

  hideMenu() {
    const menu = document.querySelector('#sidebar');
    const overlay = document.querySelector('#overlay');
    menu.style.left = '-500px';
    overlay.style.background = 'transparent';
    overlay.style.zIndex = '-1';
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
          <div id="overlay" onClick={this.hideMenu}></div>
          <div id="sidebar">
            <Sidebar hideMenuCallback={this.hideMenu}/>
          </div>
          <div id="fab" onClick={this.showMenu}>
            <FloatingActionButton>
              <MdMenu style={{width: "25px", height: "25px"}}/>
            </FloatingActionButton>
          </div>
          <div id="main-content">{children()}</div>
          <div className="mobile-links">
            <Divider/>
            <UserLinks className={'mobile-links'}/>
          </div>
        </IndexContentContainer>
      </IndexTemplateContainer>
    );
  }
}
const Divider = styled.div`
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  margin: 50px 0;
`

const IndexTemplateContainer = styled.main``;

const IndexContentContainer = styled.section`
  position: relative;
  display: flex;
  height: 100vh;
  @media screen and (max-width: 900px) {
    display: initial;
  }
  
  #fab {
    display: none
    }
  @media screen and (max-width: 900px) {
    #fab {
      display: block;
      position: relative;
      z-index: 3;
    }
  }
  
  #sidebar {
    position: initial;
  }

  @media screen and (max-width: 900px) {
    #sidebar {
      position: absolute;
      left: -500px;
      transition: all 1s ease;
      background: white;
      z-index: 2;
    }
  }
  
  #main-content {
    position: relative;
    z-index: 0;
    overflow: scroll;
    padding-top: 100px;
    width: 100%;
  }
  
  @media screen and (max-width: 900px) {
    display: initial;
    #overlay {
      position: fixed;
      height: 100vh;
      width: 100vw;
      background: transparent;
      z-index: -1;
      transition: all 1s ease;
    }
  }
  
  > .mobile-links {
    display: none;
  }
  
  @media screen and (max-width: 900px) {
    .mobile-links {
      display: block;
    }
   }
  `;
