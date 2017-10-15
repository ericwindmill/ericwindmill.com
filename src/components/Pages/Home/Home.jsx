import React, { Component } from "react";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <section className='Home--Hero'>
          <h1>Eric Windmill. Front-end & UI Developer</h1>
        </section>
        <main className='Home--Content'>
          <section className='Home--About'>
            <h2>About Me</h2>
            <p><em>Hi! I’m Adrian Zumbrunnen. I’m a designer, writer, speaker and coffee enthusiast currently residing in beautiful Zurich, Switzerland. I help companies create memorable experiences through user centered design.
            I’m currently design tinkering on Google Lens, previously Maps.
              I also write and speak about design.</em></p>
            <p>Hi! I’m Adrian Zumbrunnen. I’m a <a>designer</a>, writer, speaker and coffee enthusiast currently residing in beautiful Zurich, Switzerland. I help companies create memorable experiences through user centered design.
              I’m currently design tinkering on Google Lens, previously Maps.
              I also write and speak about design.</p>
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
