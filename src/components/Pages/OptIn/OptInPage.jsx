import React, { Component } from 'react'
import OptInForm from '../../Forms/OptInForm/OptInForm'
import UserLinks from '../../UserLinks/UserLinks'
import config from '../../../../data/SiteConfig'

class OptInPage extends Component {
  render () {
    return (
      <main>
        <section className='Hero'>
          <h1>Mailing List</h1>
        </section>
        <main className='OptIn--Body'>
          <div className='OptIn--Content'>
          <p>
            This is where you can confirm that you want updates from me. I'll let you know when <strong>my new courses and tools are available.</strong> They'll always be free.
          </p>
          <p>
            I'd also like to send you a fun Monday Morning Update that you can start your week with. It will include a couple things to keep you entertained. New posts from me, the best developer and design posts around the web that I've found the past week, and maybe a new album that I'm diggin'.
          </p>
          <OptInForm />
          </div>
        </main>
      </main>
    )
  }
}

export default OptInPage