import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

export default class Sidebar extends React.Component {
  render() {
    return (
      <SidebarContainer>
        <Link to={"/"}>
          <h4>Eric Windmill</h4>
        </Link>
        <ul>
          <li>
            <Link
              exact
              activeClassName={"active"}
              className={"primary"}
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClassName={"active"}
              className={"primary"}
              to={"/stream"}
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              activeClassName={"active"}
              className={"primary"}
              to={"/nuggets"}
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
            <p className={"primary fake-link"}>Et Cetera</p>
          </li>
          <li>
            <a
              href="https://askadev.org/"
              target="_blank"
              className={"secondary"}
            >
              Ask-A-Dev
            </a>
          </li>
          <li>
            <Link
              activeClassName={"active"}
              className={"secondary"}
              to={"/my-library"}
            >
              My Library
            </Link>
          </li>
        </ul>
      </SidebarContainer>
    );
  }
}

const SidebarContainer = styled.div`
  height: 85vh;

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
