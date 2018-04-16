import React from "react";
import styled from "styled-components";
import {Helmet} from "react-helmet";
import config from "../../data/SiteConfig";
import NuggetListing from "../components/NuggetListing";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import OptInForm from "../components/OptInForm";

export default class NuggetsPageContainer extends React.Component {
  render() {
    const nuggets = this.props.data.allMarkdownRemark.edges;
    return (
      <NuggetsPageContainerContainer>
        <Helmet title={config.siteTitle}/>
        <SEO postEdges={nuggets}/>
        <PageHeader>
          <h1>
            Nuggets
          </h1>
        </PageHeader>
        <ContentContainer>
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
          <NuggetListing postEdges={nuggets}/>
        </ContentContainer>
      </NuggetsPageContainerContainer>
    );
  }
}

const NuggetsPageContainerContainer = styled.div`
    max-width: 1100px;
    margin: 10px;
`;

const ContentContainer = styled.div`
  margin: 0 50px;
  
  @media screen and (max-width: 900px) {
    margin: 0 10px;
  }
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
