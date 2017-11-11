import React from 'react'
import Helmet from 'react-helmet'
import PostListing from '../components/PostListing/PostListing'
import config from '../../data/SiteConfig'

export default class TagTemplate extends React.Component {
  render () {
    // const tag = this.props.pathContext.tag
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