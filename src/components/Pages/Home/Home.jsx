import React, { Component } from "react"
import "./Home.scss"
import PostListing from '../../PostListing/HomePostListing'
import ProjectListing from '../../PostListing/HomeProjectListing'
import ContactForm from '../../Forms/ContactForm'
import UserLinks from '../../UserLinks/UserLinks'
import config from "../../../../data/SiteConfig";

class Home extends Component {
  render() {
    return (
      <main className="Home">
        <section className='Home--Hero'>
          <h1>Eric Windmill. Front-end & UI Developer</h1>
          <div className='Hero--SocialLinks'><UserLinks config={config} /></div>
        </section>
        <section className='Home--Body'>
          <section className='Home--About'>
            <h2>Welcome!</h2>
            <p><em>Hi! I’m Eric Windmill. I’m a front-end developer, UI designer, and writer working to make the web a better place. I help companies create killer user-centered experiences on web (and now, mobile!) and I implement the code it needs to work. You can hire me to work with your team with deign or development. I'm current available for small projects.</em></p>
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
          <section className='Home--Currently'>
            <h2>
              Currently
            </h2>
            <h4>AppTree Software - Portland, OR</h4>
            <p>I'm currently working for Enterprise SaaS company AppTree. I work on both the web client and the mobile app. This job is a blast because we're working in Dart with Flutter and Polymer. I'm the first employee hired solely for the Flutter team, where we're porting the app from native iOS and Android.  I spend most of my time implementing the front-end and UI.</p>
          </section>
          <div className="Divider" />
          <section>
            <h2>
              Get In Touch
            </h2>
            <ContactForm isTab={false} />
          </section>
        </section>
      </main>
    );
  }
}
export default Home;
