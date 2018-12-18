import * as React from 'react'
import Helmet from 'react-helmet'

import '../styles/normalize'

import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

interface WrapperProps {
  children: () => any
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    }
  }
}

// @ts-ignore
const IndexLayout: React.SFC<WrapperProps> = ({children, data}) => <LayoutRoot>
  <Helmet
    title={data.site.siteMetadata.title}
    meta={[
      {name: 'description', content: data.site.siteMetadata.description},
      {name: 'keywords', content: 'gatsbyjs, gatsby, javascript, sample, something'}
    ]}
  />
  <LayoutMain>{children()}</LayoutMain>
</LayoutRoot>

export default IndexLayout

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
