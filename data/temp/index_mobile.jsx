import React from "react";
import styled from "styled-components";

export default class MobileIndexContainer extends React.Component {

  render() {
    return (


      <MobileIndexContainer>
        <div className="page">
          <h1>Hi there 👋</h1>
          <h2>
            I'm Eric Windmill, a software engineer, interface designer and
            writer on the webs.
          </h2>
          <img
            src="http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_600/v1522165983/cropped_moma_i6br7j.jpg"
            alt="me at SFMOMA"/>
          <h3>Work</h3>
          <p>
            I've been deisgning and building web applications for 3 years,
            focused primarily on building beautiful web experiences in
            JavaScript world, but now I have an infatuation with <a href="https://www.dartlang.org/">Dart</a>.
            I also like to <Link to={'/stream'}>write</Link>, and contribute to <a
            href="https://css-tricks.com/using-es2017-async-functions/">CSS Tricks</a>
          </p>.
          <p>
            I currently work at enterprise PaaS company AppTree in Portland, OR. I help design and build web
            and mobile clients written in Dart, AngularDart and Flutter.
          </p>
          <img
            src="https://maps.googleapis.com/maps/api/staticmap?zoom=4&maptype=roadmap&format=png32&size=1000x250&key=%20AIzaSyD5VLHcWSYsxzyvupu8tSU9wErU-himudE&markers=icon:http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_50/v1521842590/home_tg7cgw.png|Louisville,KY&markers=color:green|icon:http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_45/v1521841956/sficon2_leenmz.png|anchor:bottomright|San+Francisco,CA&markers=icon:http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_50/v1521842590/pdx_hqw4tf.png|label:3|Portland,Or&path=color:red|weight:1|38.2527,-85.7585|37.7749,-122.4194|45.5231,-122.6765"
            alt=""/>
          <h3>Extra-curricular</h3>
          <p>
            On my own time, I like to help new engineers who're switching
            careers. I mostly work on that through my site <a href="https://nuggets.cloud">Nuggets</a>. I
            also mentor in the Portland tech community at various meetups,
            most notably for my friend's organization <a href="https://askadev.org/">Ask-a-dev</a>.
          </p>
          <h3>Contact</h3>
          <p>
            The quickest way to get in touch is via{" "}
            <a href="https://www.messenger.com/t/eric.windmill">Messenger</a>{" "}
            (it makes my watch vibrate). I'm also active on{" "}
            <a href="https://twitter.com/ericwindmill">Twitter</a> and{" "}
            <a href="https://instagram.com/ericwindmill">Instagram</a>. Work
            inquires please{" "}
            <a href="mailto:eric@ericwindmill.com">email me</a>.
          </p>
          <br/>
          <br/>
          <p>Cheers! <br/> Eric </p>
          <Divider/>
          <UserLinks/>
        </div>
      </MobileIndexContainer>
    );
  }
}

const MobileIndexContainer = styled.section`
  @media screen and (max-width: 801px) {
    display: flex;
    flex-flow: column;
    width: 100vw;
    background: mediumaquamarine;
    background: url("http://res.cloudinary.com/ericwindmill/image/upload/v1501212538/portfolio_site/background-3.png")
    no-repeat center center fixed;
    background-size: cover;
    padding: 20px;

    .page {
      background: #f4f4f4;
    }

    h1,
    h2,
    h3,
    p {
      margin-bottom: 40px;
      padding: 0 30px;
    }

    h1 {
      font-size: 4rem;
      margin-top: 40px;
    }

    h2,
      h3 {
      font-size: 3.5rem;
    }
  
    img {
      margin: 40px 0;
      width: 100%;
    }
  }

  @media screen and (min-width: 601px) {
    display: none;
  }

