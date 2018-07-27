import * as React from "react";

import Page from "../components/Page";
import Container from "../components/Container";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, fonts } from "../styles/variables";

interface PortfolioPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: {
          name: string;
          url: string;
        };
      };
    };
    allMarkdownRemark: {
      html: string;
      frontmatter: {
        order: number;
        type: string;
        description: string;
        externalUrl: string;
      };
    };
  };
}

// language=GraphQL
export const postQuery = graphql`
  query ProjectQuery {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "nugget" } } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            order
            type
            description
            externalUrl
          }
        }
      }
    }
  }
`;

const StyledList = styled.ul`
  padding: 0;
`;

const StyledListWithoutDescriptions = styled.ul`
  padding: 0;
  h4 {
    padding-bottom: 0;
    line-height: 1;
    margin: 0;
  }
`;

const StyledListElement = styled.li`
  list-style: none;
  h4 {
    margin-bottom: 0;
    line-height: 1.5rem;
  }
  h4:hover {
    color: ${colors.linkInk};
  }
  p {
    color: ${colors.ink};
  }
  a:hover {
    text-decoration: none;
  }
`;

const PortfolioPage = ({ data }: PortfolioPageProps) => {
  const projects = data.allMarkdownRemark.edges;

  return (
    <Page>
      <Container>
        <h3>Work</h3>
        <StyledList>
          <StyledListElement>
            <a href="https://apptree.cloud">
              <h4>AppTree Software</h4>
            </a>
            <p>
              On the web team, I help design and build the web and mobile
              clients for a platform that empowers enterprise companies to build
              cross-platform (web and mobile) apps fast. Our clients team uses
              Dart, Flutter, AngularDart and PolymerDart.
            </p>
            <p>
              I'm also on a team that's building a new Emergency Notification
              App for large companies like University campuses and
              municipalities. I've built the web-application MVP in Dart and
              AngularDart, as well as writing Dart wrappers for popular
              JavaScript libraries like Leaflet and FreeDraw.
            </p>
            <p>
              I also built{" "}
              <a href="https://apptree.cloud">the company website</a> using
              GatsbyJS and React.
            </p>
          </StyledListElement>
        </StyledList>

        <h3>Published Book</h3>
        <StyledList>
          <StyledListElement>
            <a href="https://manning.com">
              <h4>Flutter In Action</h4>
            </a>
            <p>
              Flutter In Action is a book coming soon from Manning Publishing.
              Flutter is a new cross-platform technology from Google, written in
              Dart. In this book, I explore when Flutter is the right tool, and
              walk through building multiple applications.
            </p>
          </StyledListElement>
        </StyledList>

        <h3>Published Articles</h3>
        <StyledList>
          <StyledListElement>
            <a href="https://css-tricks.com/using-es2017-async-functions/">
              <h4>JavaScript Async Functions - CSS Tricks</h4>
            </a>
          </StyledListElement>
        </StyledList>

        <h3>Projects</h3>
        <StyledList>
          {projects.map(project => (
            <StyledListElement>
              <Link to={project.node.frontmatter.externalUrl}>
                <h4>{project.node.frontmatter.title}</h4>
              </Link>
              <p>{project.node.frontmatter.description}</p>
            </StyledListElement>
          ))}
        </StyledList>

        <h3>Open Source</h3>
        <StyledListWithoutDescriptions id="os-list">
          <StyledListElement>
            <a href="https://gatsbyjs.org">
              <h4>GatsbyJS</h4>
            </a>
          </StyledListElement>
          <StyledListElement>
            <a href="http://www.dacatime.com/">
              <h4>DACA Time</h4>
            </a>
          </StyledListElement>
          <StyledListElement>
            <a href="https://www.gatsbyjs.org/docs/gatsby-starters/">
              <h4>gatsby_starter_docs and gatsby_starter_wordpress</h4>
            </a>
          </StyledListElement>
          <StyledListElement>
            <a href="https://pub.dartlang.org/packages/map_view">
              <h4>Flutter map_view</h4>
            </a>
          </StyledListElement>
          <StyledListElement>
            <a href="https://pub.dartlang.org/packages/flutter_calendar">
              <h4>flutter_calendar</h4>
            </a>
          </StyledListElement>
          <StyledListElement>
            <a href="https://pub.dartlang.org/packages/date_utils">
              <h4>Dart date_utils</h4>
            </a>
          </StyledListElement>
        </StyledListWithoutDescriptions>
      </Container>
    </Page>
  );
};

export default PortfolioPage;
