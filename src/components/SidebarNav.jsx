import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import FaHeart from 'react-icons/lib/fa/heart';

export default class Sidebar extends React.Component {
  constructor() {
    super();

    this.hideMenu = this.hideMenu.bind(this);
  }


  hideMenu() {
    const menu = document.querySelector('#sidebar');
    const overlay = document.querySelector('#overlay');
    menu.style.left = '-500px';
    overlay.style.background = 'transparent';
    overlay.style.zIndex = '-1';
  }


  render() {
    return (
      <SidebarContainer>
        <Link to={"/"} onClick={this.hideMenu}>
          <h4>Eric Windmill</h4>
        </Link>
        <ul>
          <li>
            <Link
              exact
              activeClassName={"active"}
              className={"primary"}
              to={"/"}
              onClick={this.hideMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClassName={"active"}
              className={"primary"}
              to={"/stream"}
              onClick={this.hideMenu}
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              activeClassName={"active"}
              className={"primary"}
              to={"/nuggets"}
              onClick={this.hideMenu}
            >
              Nuggets
            </Link>
          </li>
          <li>
            <a
              target="_blank"
              className={"secondary"}
              href="https://flutterbyexample.com"
            >
              Flutter By Example
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://dartforwebdevelopers.com"
              className={"secondary"}
            >
              Dart for JS Developers
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://layoutbyexample.com"
              className={"secondary"}
            >
              CSS Layout By Example
            </a>
          </li>
          <li>
            <a
              className={"secondary"}
              target="_blank"
              href="https://github.com/ericwindmill/on-the-grid"
            >
              On the Grid
            </a>
          </li>
          <li>
            <Link
              activeClassName={"active"}
              className={"primary"}
              to={"/resume"}
              onClick={this.hideMenu}
            >
              Resumé
            </Link>
          </li>
          <li>
            <p className={"primary fake-link"}>Et Cetera</p>
          </li>
          <li>
            <a
              href="https://askadev.org/"
              target="_blank"
              className={"secondary ask-a-dev"}
            >
              <img src="http://res.cloudinary.com/ericwindmill/image/upload/v1522373777/portfolio_site/Curly.png"
                   style={{margin: '0 10px 0 0'}}
                   height='20px'
                   alt=""/>
              Ask-A-Dev
            </a>
          </li>
          <li>
            <Link
              activeClassName={"active"}
              className={"secondary"}
              to={"/my-library"}
              onClick={this.hideMenu}
            >
              My Library
            </Link>
          </li>
          <li>
            <Link
              activeClassName={"active"}
              className={"secondary"}
              to={"/favorites"}
              onClick={this.hideMenu}
            >
              <FaHeart style={{color: 'mistyrose', margin: '0 10px 0 0'}}/>Favorites
            </Link>
          </li>
        </ul>
      </SidebarContainer>
    );
  }
}

const SidebarContainer = styled.div`
  height: 100vh;
  padding: 150px 50px;

  li {
    display: flex;
    flex-flow: column;
    justify-content: center;
    height: 40px;

    a,
    .fake-link {
      width: 220px;
      margin: 0.3rem 0;
      border-radius: 5px;
      padding: 0 10px;
      transition: all 300ms ease-out;

      :hover {
        color: black;
      }
    }

    --link-blue: rgba(41, 99, 255, 1);
    --link-blue-o-1: rgba(41, 99, 255, 0.1);
    --link-blue-o-2: rgba(41, 99, 255, 0.2);
    --link-blue-o-3: rgba(41, 99, 255, 0.3);
    .primary {
      :hover {
        background: var(--link-blue-o-3);
      }
    }

    .secondary {
      margin: 0 0 0 1rem;
      padding-left: 1rem;
      height: 30px;
      color: rgba(0, 0, 0, 0.5);
      font-size: 1.5rem;
      :hover {
        background: var(--link-blue-o-1);
      }
    }
    
    .ask-a-dev {
      display: flex;
      align-items: center;
    }

    .active {
      background: rgba(41, 99, 255, 1);
      color: white;
      box-shadow: 0 2px 2px 0 var(--link-blue-o-2),
        0 3px 1px 2px var(--link-blue-o-1), -2px 1px 1px 0 var(--link-blue-o-1);
      :hover {
        background: rgba(41, 99, 255, 1);
        color: white;
      }
    }
  }

  .fake-link {
    :hover {
      background: transparent !important;
    }
  }
  
`;
