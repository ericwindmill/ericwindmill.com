import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

export default class Sidebar extends React.Component {
  render() {
    return (
      <SidebarContainer>
        <h4>Eric Windmill</h4>
        <ul>
          <li className={"primary active"}>
            <Link to={"/"}>Home</Link>
          </li>

          <li className={"primary"}>
            <Link to={"/stream"}>Articles</Link>
          </li>

          <li className={"primary"}>
            <Link to={"/"}>Nuggets</Link>
          </li>
          <li className={"secondary"}>
            <Link to={"/"}>Flutter By Example</Link>
          </li>
          <li className={"secondary"}>
            <Link to={"/"}>Dart for JS Developers</Link>
          </li>
          <li className={"secondary"}>
            <Link to={"/"}>CSS Layout By Example</Link>
          </li>
          <li className={"secondary"}>
            <Link to={"/"}>On the Grid</Link>
          </li>

          <li className={"primary"}>
            <Link to={"/"}>Resumé</Link>
          </li>

          <li className={"primary"}>
            <Link to={"/"}>Et Cetera</Link>
          </li>
          <li className={"secondary"}>
            <Link to={"/"}>Ask-A-Dev</Link>
          </li>
          <li className={"secondary"}>
            <Link to={"/"}>My Library</Link>
          </li>
          <li className={"secondary"}>
            <Link to={"/"}>Bookmarks</Link>
          </li>
        </ul>
      </SidebarContainer>
    );
  }
}

const SidebarContainer = styled.div`
  height: 85vh;

  li {
    height: 40px;
    width: 220px;
    margin: 1rem 0;
    border-radius: 5px;
    padding: 0 10px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    transition: all 300ms ease-out;

    :hover {
      a {
        color: black;
      }
    }
  }

  .active {
    background: rgba(214, 89, 114, 0.3);

    :hover {
      background: rgba(214, 89, 114, 0.4);
      a {
        color: black;
      }
    }
  }

  .primary {
    :hover {
      background: rgba(214, 89, 114, 0.1);
    }
  }

  .secondary {
    margin: 0 0 0 1rem;
    padding-left: 1rem;
    height: 30px;
    a {
      color: rgba(0,0,0,.5);
      font-size: 1.5rem;
    }
    :hover {
    background: rgba(214, 89, 114, 0.1);
    }
  }
`;
