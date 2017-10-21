import React, { Component } from "react"
import "./Home.scss"
import PostListing from '../../PostListing/HomePostListing'
import ProjectListing from '../../PostListing/HomeProjectListing'
import ContactForm from '../../Forms/ContactForm'
import Footer from '../../Footer/Footer'
// import UserLinks from '../../UserLinks/UserLinks'

class Home extends Component {
  render() {
    // const { config } = this.props

    return (
      <div className="Home">
        <section className='Home--Hero'>
          <h1>Eric Windmill. Front-end & UI Developer</h1>
          {/*<UserLinks config={config} labeled />*/}
        </section>
        <main className='Home--Content'>
          <section className='Home--About'>
            <h2>About Me</h2>
            <p><em>Hi! I’m Eric Windmill. I’m a designer, writer, speaker and coffee enthusiast currently residing in beautiful Zurich, Switzerland. I help companies create memorable experiences through user centered design.
            I’m currently design tinkering on Google Lens, previously Maps.
              I also write and speak about design.</em></p>
            <p>Hi! I’m Eric Windmill. I’m a <a>designer</a>, writer, speaker and coffee enthusiast currently residing in beautiful Zurich, Switzerland. I help companies create memorable experiences through user centered design.
              I’m currently design tinkering on Google Lens, previously Maps.
              I also write and speak about design.</p>
          </section>
          <div className='Divider' />
          <section className={'Home--PostList'}>
            <PostListing postEdges={this.props.postEdges} />
          </section>
          <div className='Divider' />
          <section>
            <ProjectListing postEdges={this.props.postEdges} />
          </section>
          <div className="Divider" />
          <section>
            <h2>
              Currently
            </h2>
            <p>AppTree Software - Portland, OR</p>
            <p>
              I'm currently working for Enterprise SaaS company AppTree. I work on both the web client and the mobile app. This job is a blast because we're working in Dart with Flutter and Polymer. I'm the first employee hired solely for the Flutter team, where we're porting the app from native iOS and Android.  I spend most of my time implementing the front-end and UI.
            </p>
          </section>
          <div className="Divider" />
          <section>
            <h2>
              Get In Touch
            </h2>
            <ContactForm />
          </section>
          <Footer />
        </main>
      </div>
    );
  }
}
export default Home;
