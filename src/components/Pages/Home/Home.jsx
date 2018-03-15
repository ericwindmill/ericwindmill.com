import React, { Component } from 'react'
import './Home.scss'
import PostListing from '../../PostListing/HomePostListing'
import ProjectListing from '../../PostListing/HomeProjectListing'
import ContactForm from '../../Forms/ContactForm'
import OptInForm from '../../Forms/OptInForm/HomeOptIn'

class Home extends Component {
  render() {
    return (
      <main className="Home">
        <section className="Home--Hero Hero">
          <h1>Eric Windmill. Front-end & UI Developer</h1>
        </section>
        <section className="Home--Body">
          <section className="Home--About">
            <h2>Welcome!</h2>
            <p>
              <em>
                Hi! I’m Eric Windmill. I’m a front-end developer, UI designer,
                and writer working to make the web a better place. I help
                companies create killer user-centered experiences on web (and
                now, mobile!) and I implement the code it needs to work. You can
                hire me to work with your team with deign or development. I'm
                currently available for small projects.
              </em>
            </p>
          </section>
          <div className="Divider" />
          <h2>Nuggets</h2>
          <h4>Web Development Tutorials</h4>
          <p>
            Nuggets is a collection of easy, bite-sized tutorials and developer
            tools in the web development world. They're designed to help newer
            developers learn new technologies. Ideally you could get value out
            of these in just a couple hours on a Saturday afternoon.
          </p>
          <img
            src="http://res.cloudinary.com/ericwindmill/image/upload/v1517674600/portfolio_site/Screen_Shot_2018-02-03_at_8.16.09_AM.png"
            alt="nuggets homepage"
            className="nuggets"
          />
          <a href="https://nuggets.cloud">To nuggets.cloud →</a>
          <div className="Divider" />
          <section className={'Home--PostList'}>
            <PostListing postEdges={this.props.postEdges} />
          </section>
          <div className="Divider" />
          <section className="Home--Currently">
            <h2>Currently</h2>
            <h4>AppTree Software - Portland, OR</h4>
            <p>
              I'm currently working for Enterprise PaaS company AppTree. I work
              on both the web client and the mobile app. This job is a blast
              because we're working in Dart with Flutter and Polymer, so it's
              all new to me. I'm the first employee hired solely for the Flutter
              team, where we're porting the app from native iOS and Android. I
              spend most of my time implementing the front-end and UI.
            </p>
          </section>
          <div className="Divider" />
          <section>
            <h2>Get In Touch</h2>
            <ContactForm isTab={false} />
          </section>
        </section>
      </main>
    )
  }
}
export default Home
