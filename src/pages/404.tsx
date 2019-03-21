import * as React from 'react'
import Link from 'gatsby-link'
import Page from '../components/layout/Page'

const NotFoundPage = () => (
  <Page>
    <>
      <h1>404: Page not found.</h1>
      <p>
        You've hit the void.{' '}
        <Link
          to='/'
          href='/'
        >
          Go back.
        </Link>
      </p>
    </>
  </Page>
)

export default NotFoundPage
