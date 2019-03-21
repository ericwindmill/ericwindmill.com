import * as React from "react"
import Link from "gatsby-link"

import Page from "../components/layout/Page"
import styled from "styled-components"
import {colors, fonts} from "../styles/variables"

interface ArticleListingProps {
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
        title: string;
        type: string;
        category: string;
        year: number;
        month: number;
        tags: Array<string>;
      };
    };
  };
}

// language=GraphQL
export const postQuery = graphql`
  query PostQuery {
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
      filter: { frontmatter: { type: { eq: "Post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            year
            month
            type
            category
          }
        }
      }
    }
  }
`

const PostPageContainer = styled.div`
  max-width: 800px;
  margin: 200px auto;
  
  @keyframes fade-in {
	0% { opacity: 0; }
	20% { opacity: 0; }
	60% { opacity: 1; }
	100% { opacity: 1; }
}

 .fade-in {
    animation: fade-in .6s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`

const PostElement = styled.li`
  list-style: none;
  h4 {
    margin-bottom: 0;
    line-height: 1.5rem;
  }
  h4:hover {
    color: ${colors.brand};
  }
  p {
    color: ${colors.ink};
    font-style: italic;
    font-family: ${fonts.serif};
  }
  a:hover {
    text-decoration: none;
  }
`

export default ({data}: ArticleListingProps) => {
  // noinspection TypeScriptUnresolvedVariable
  const posts = data.allMarkdownRemark.edges

  return (
    <Page>
      <PostPageContainer>
        <div className='fade-in'>
          {posts.map(post => (
            <PostElement key={post.node.fields.slug}>
              <Link to={post.node.fields.slug}>
                <h4>{post.node.frontmatter.title}</h4>
                <p>
                  {post.node.frontmatter.month} {post.node.frontmatter.year}
                </p>
              </Link>
            </PostElement>
          ))}
        </div>
      </PostPageContainer>
    </Page>

  )

};
