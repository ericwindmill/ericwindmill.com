import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import NuggetListing from "../components/NuggetListing";
import SEO from "../components/SEO";

export default class NuggetsPageContainer extends React.Component {
  render() {
    const nuggets = this.props.data.allMarkdownRemark.edges;
    return (
      <NuggetsPageContainerContainer>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={nuggets} />
        <h1>Nuggets</h1>
        <p>
          Nuggets is a collection of easy, bite-sized tutorials and developer
          tools in the web development world. They're designed to help newer
          developers learn new technologies. Ideally you could get value out of
          these in just a couple hours on a Saturday afternoon.
        </p>
        <p>
          Check out the full page at{" "}
          <a href="https://nuggets.cloud">nuggets.cloud. →</a>
        </p>
        <NuggetListing postEdges={nuggets} />
      </NuggetsPageContainerContainer>
    );
  }
}

const NuggetsPageContainerContainer = styled.div`
  max-width: 825px;
  min-width: 760px;
`;

export const pageQuery = graphql`
  query NuggetsQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "nugget" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            order
            title
            image
            description
            externalUrl
            type
          }
        }
      }
    }
  }
`;