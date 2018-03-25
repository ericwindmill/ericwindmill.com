import React from "react";
import styled from "styled-components";
import {Helmet} from "react-helmet";
import config from '../../data/SiteConfig'
import NuggetListing from "../components/NuggetListing";
import SEO from "../components/SEO";

export default class NuggetsPageContainer extends React.Component {

  render() {
    const nuggets = this.props.data.allMarkdownRemark.edges
    return (
      <NuggetsPageContainerContainer>
        <Helmet title={config.siteTitle}/>
        <SEO postEdges={nuggets}/>
        <h1>Nuggets!</h1>
        <NuggetListing postEdges={nuggets}/>
      </NuggetsPageContainerContainer>
    );
  }
}

const NuggetsPageContainerContainer = styled.div`

`


export const pageQuery = graphql`
  query NuggetsQuery {
    allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "nugget"}}}
    ) {
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
`
