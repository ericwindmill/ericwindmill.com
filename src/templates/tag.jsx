import React from 'react'
import Helmet from 'react-helmet'
import PostListing from '../components/PostListing/PostListing'
import config from '../../data/SiteConfig'

export default class TagTemplate extends React.Component {
  render () {
    const tag = this.props.pathContext.tag
    // const postEdges = this.props.data.allMarkdownRemark.edges
    return (
      <div className="tag-container">
        <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`}/>
        <section className='Hero'>
          <h1>{tag} Posts</h1>
        </section>
        <main className='TagListingBody'>
          {/*<PostListing postEdges={postEdges} />*/}
        </main>

      </div>
    )
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
    query TagPage($category: String) {
      allWordpressPost {
        edges{
          node{
            excerpt
            title
            date
            tags{
              name
              count
            }
          }
        }
      }
    }
`
//
// export const pageQuery = graphql`
//   query TagPage($tag: String) {
//     allMarkdownRemark(
//       limit: 1000
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { tags: { in: [$tag] } } }
//     ) {
//       totalCount
//       edges {
//         node {
//           fields {
//             slug
//           }
//           excerpt
//           timeToRead
//           frontmatter {
//             title
//             tags
//             cover
//             date
//           }
//         }
//       }
//     }
//   }
// `
