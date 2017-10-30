import React, { Component } from "react";
import "./About.scss";

class About extends Component {
  render() {
    return (
      <main>
        <section className='Hero'>
          <h1>About Me</h1>
        </section>
        <section className='About--Body'>
          <p>
            Hi! I’m Eric Windmill. I’m a <a>designer</a>, writer, speaker and coffee enthusiast currently residing in beautiful Zurich, Switzerland. I help companies create memorable experiences through user centered design.
            I’m currently design tinkering on Google Lens, previously Maps.
            I also write and speak about design.
          </p>
          <img src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,h_200/v1501186620/portfolio_site/bw_clinton_photography.png' />
          <p>
            A little more... Hi! I’m Eric Windmill. I’m a <a>designer</a>, writer, speaker and coffee enthusiast currently residing in beautiful Zurich, Switzerland. I help companies create memorable experiences through user centered design.
            I’m currently design tinkering on Google Lens, previously Maps.
            I also write and speak about design.
            Hi! I’m Eric Windmill. I’m a <a>designer</a>, writer, speaker and coffee enthusiast currently residing in beautiful Zurich, Switzerland. I help companies create memorable experiences through user centered design.
            I’m currently design tinkering on Google Lens, previously Maps.
            I also write and speak about design.
          </p>
        </section>
      </main>
    );
  }
}

export default About;
