import React from "react";
import styled from "styled-components";

export default class BookmarksPageContainer extends React.Component {

  getBookmarks() {
    const bookmarks = []
    this.props.data.allMarkdownRemark.edges.forEach(bookmark => {
      bookmarks.push({
        title: bookmark.node.frontmatter.title,
        url: bookmark.node.frontmatter.externalUrl,
        type: bookmark.node.frontmatter.type
      })
    })
    return bookmarks
  }

  render() {
    const bookmarks = this.getBookmarks()
    return (
      <BookmarksPageContainerContainer>
        <h1>Note To Self: Remember These Pages</h1>
        <ul>
          {
            bookmarks.map(bookmark => (
              <div>
                <h1>{bookmark.title}</h1>
              </div>
            ))
          }
        </ul>
      </BookmarksPageContainerContainer>
    );
  }
}

const BookmarksPageContainerContainer = styled.div`

`

export const pageQuery = graphql`
  query Bookmarks {
    allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "bookmark"}}}
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            type
            title
            externalUrl
          }
        }
      }
    }
  }
`;
