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
            <p>...</p>
          </StyledListElement>
          <StyledListElement>
            <a href="https://dacatime.org">
              <h4>Contract Developer</h4>
            </a>
            <p>...</p>
          </StyledListElement>
          <StyledListElement>
            <a href="https://dacatime.org">
              <h4>DacaTime</h4>
            </a>
            <p>...</p>
          </StyledListElement>
        </StyledList>

        <h3>Published Book</h3>
        <StyledList>
          <StyledListElement>
            <a href="https://manning.com">
              <h4>Flutter In Action</h4>
            </a>
            <p>...</p>
          </StyledListElement>
        </StyledList>

        <h3>Published Articles</h3>
        <StyledList>
          <StyledListElement>
            <a href="https://css-tricks.com/using-es2017-async-functions/">
              <h4>JavaScript Async Functions - CSS Tricks</h4>
            </a>
            <p>...</p>
          </StyledListElement>
        </StyledList>
        <h3>Projects</h3>
        <StyledList>
          {projects.map(project => (
            <StyledListElement>
              <Link to={project.node.fields.slug}>
                <h4>{project.node.frontmatter.title}</h4>
              </Link>
              <p>{project.node.frontmatter.description}</p>
            </StyledListElement>
          ))}
        </StyledList>

        <h3>Open Source</h3>
        <StyledList>
          <StyledListElement>
            <a href="https://manning.com">
              <h4>Flutter In Action</h4>
            </a>
            <p>...</p>
          </StyledListElement>
          <StyledListElement>
            <a href="https://manning.com">
              <h4>Flutter In Action</h4>
            </a>
            <p>...</p>
          </StyledListElement>
          <StyledListElement>
            <a href="https://manning.com">
              <h4>Flutter In Action</h4>
            </a>
            <p>...</p>
          </StyledListElement>
          <StyledListElement>
            <a href="https://manning.com">
              <h4>Flutter In Action</h4>
            </a>
            <p>...</p>
          </StyledListElement>
        </StyledList>
      </Container>
    </Page>
  );
};

export default PortfolioPage;
