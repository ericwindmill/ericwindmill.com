import * as React from "react";

import Page from "../components/Page";
import Container from "../components/Container";
import styled from "styled-components";
import { colors } from "../styles/variables";

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
    font-size: 1.4rem;
  }
  h4:hover, h5:hover {
    color: ${colors.linkInk};
  }
  p {
    color: ${colors.ink};
  }
  a:hover {
    text-decoration: none;
  }
   h5 {
    padding: 0;
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.5rem;
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
              <h4>AppTree Software, Software Engineer, 2 years</h4>
            </a>
            <p>
              At AppTree, we're creating tools that make software development easier for enterprise companies. The
              products that I've helped build are mission-critical tools used by hundreds of large coorporations,
              municipalities and universities.
            </p>
            <p>
              I've helped <b>design and build the web and mobile
             clients</b> for our core platform, which empowers enterprise companies to build
              cross-platform (web and mobile) apps fast. Our client are mostly written in
              <b>Dart, Flutter, AngularDart and Golang.</b>
            </p>
            <p>
              I'm <b>building a new Emergency Notification
                     App</b> for large university campuses and
              municipalities. It's a two-way, real-time communication tool that allows first-responders and
              citizens to organize and communicate effectively and efficiently. I've built the web-application MVP in <b> Dart and
             AngularDart,</b> as well as <b>writing Dart wrappers for popular
                                            JavaScript libraries</b> like Leaflet and FreeDraw.
            </p>
            <p>
              My new favorite product to work on is our Integrations platform. We're building a build-tool, workflow
              style <b>integration platform in C# and .NET</b>.
            </p>
            <p>
              I also built{" "}
              <a href="https://apptree.cloud">the company website</a> using
              GatsbyJS and React.
            </p>
          </StyledListElement>
          <StyledListElement>
            <h4>DACA Time - Software Developer</h4>
            <p>
              DACA Time is a service that simplifies the process of applying for
              DACA status. It's a Django/React web app, in which I helped on the
              React front-end. Unfortunately because of the current political
              climate, this company doesn't exist.
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
              <h5>JavaScript Async Functions - CSS Tricks</h5>
            </a>
          </StyledListElement>
          <StyledListElement>
            <a href="https://css-tricks.com/flutter-googles-take-on-cross-platform/">
              <h5>Flutter: Google's Take on Cross Platform - CSS Tricks</h5>
            </a>
          </StyledListElement>
        </StyledList>

        <h3>Projects</h3>
        <StyledList>
          {projects.map(project => (
            <StyledListElement>
              <a href={project.node.frontmatter.externalUrl}>
                <h4>{project.node.frontmatter.title}</h4>
              </a>
              <p>{project.node.frontmatter.description}</p>
            </StyledListElement>
          ))}
        </StyledList>

        <h3>Open Source</h3>
        <StyledListWithoutDescriptions id="os-list">
          <StyledListElement>
            <a href="https://gatsbyjs.org">
              <h5>GatsbyJS</h5>
            </a>
          </StyledListElement>
          <StyledListElement>
            <a href="https://www.gatsbyjs.org/docs/gatsby-starters/">
              <h5>gatsby_starter_docs and gatsby_starter_wordpress</h5>
            </a>
          </StyledListElement>
          <StyledListElement>
            <a href="https://pub.dartlang.org/packages/map_view">
              <h5>Flutter map_view</h5>
            </a>
          </StyledListElement>
          <StyledListElement>
            <a href="https://pub.dartlang.org/packages/flutter_calendar">
              <h5>flutter_calendar</h5>
            </a>
          </StyledListElement>
          <StyledListElement>
            <a href="https://pub.dartlang.org/packages/date_utils">
              <h5>Dart date_utils</h5>
            </a>
          </StyledListElement>
        </StyledListWithoutDescriptions>
      </Container>
    </Page>
  );
};

export default PortfolioPage;
