import React from "react";
import styled from "styled-components";
import HomeGridBox from "../components/HomeGridBox";
import OptInForm from "../components/Forms/OptInForm/OptInForm";
import UserLinks from "../components/UserLinks/UserLinks";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.typewriter = this.typewriter.bind(this);
    this.reverseTypewriter = this.reverseTypewriter.bind(this);
  }

  componentDidMount() {
    const typeWriterArray = [
      "converts",
      "motivates users",
      "turns users into fans",
      "sells",
    ];
    this.typewriter(typeWriterArray, 0, 0);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  typewriter(array, n, idx) {
    if (idx === array.length) {
      idx = 0;
    }
    const element = document.querySelector(".typewriter");
    const word = element.innerText;
    if (n < array[idx].length) {
      element.innerHTML = array[idx].substring(0, n + 1);
      n++;
      this.timer = setTimeout(() => {
        this.typewriter(array, n, idx);
      }, 75);
    } else {
      this.timer = setTimeout(
        () => this.reverseTypewriter(array, word.length, idx),
        2000,
      );
    }
  }

  reverseTypewriter(array, n, idx) {
    const element = document.querySelector(".typewriter");
    const word = element.innerText;
    if (word.length > 0) {
      element.innerHTML = array[idx].substring(0, n - 1);
      n--;
      this.timer = setTimeout(() => {
        this.reverseTypewriter(array, n, idx);
      }, 75);
    } else {
      idx++;
      this.timer = setTimeout(() => this.typewriter(array, 0, idx), 1000);
    }
  }

  render() {
    const latestPost = this.props.data.allMarkdownRemark;
    const title = latestPost.edges[0].node.frontmatter.title;
    const month = latestPost.edges[0].node.frontmatter.month;
    const year = latestPost.edges[0].node.frontmatter.year;
    return (
      <HomePageContainer>
        <HeaderContainer>
          <div className="header">
            <h1>
              Software Engineer with a Design Problem.{" "}
              <b>
                I make clean, precise UI that <span className="typewriter"/>.
              </b>
            </h1>
          </div>
        </HeaderContainer>

        <HomeGrid>
          <HomeGridBox className="box job" title="Day Job">
            <a href={"https://apptree.cloud"}>
              <h2 style={{color: "#43ab60"}}>AppTree Software</h2>
            </a>
            <h3>Software Engineer</h3>
            <h3>Web and Mobile Clients</h3>
          </HomeGridBox>
          <HomeGridBox className="box article" title="Latest Article">
            <h2>{title}</h2>
            <h3>
              {month} {year}
            </h3>
          </HomeGridBox>
          <HomeGridBox title="Elsewhere">
            <p>
              The quickest way to get in touch is via{" "}
              <a href="https://www.messenger.com/t/eric.windmill">Messenger</a>.
              I'm also active on{" "}
              <a href="https://twitter.com/ericwindmill">Twitter</a> and{" "}
              <a href="https://instagram.com/ericwindmill">Instagram</a>.
            </p>
          </HomeGridBox>
          <HomeGridBox className="box map" title="Currently In">
            <h2>Portland, Or</h2>
            <img
              width="350px"
              src="https://maps.googleapis.com/maps/api/staticmap?zoom=4&maptype=roadmap&format=png32&size=550x250&key=%20AIzaSyD5VLHcWSYsxzyvupu8tSU9wErU-himudE&markers=icon:http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_50/v1521842590/home_tg7cgw.png|Louisville,KY&markers=color:green|icon:http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_45/v1521841956/sficon2_leenmz.png|anchor:bottomright|San+Francisco,CA&markers=icon:http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_50/v1521842590/pdx_hqw4tf.png|label:3|Portland,Or&path=color:red|weight:1|38.2527,-85.7585|37.7749,-122.4194|45.5231,-122.6765"
              alt="map of USA"
            />
          </HomeGridBox>
          <HomeGridBox className="box music" title="Listening To">
            <img
              height="250px"
              src="https://f4.bcbits.com/img/a3164574832_10.jpg"
              alt="phoebe bridgers album cover"
            />
          </HomeGridBox>
          <HomeGridBox title="Reading">
            <img
              width="250px"
              src="https://s3-us-west-2.amazonaws.com/tabs.web.media/c/9/c9lw/c9lw-square-orig.jpg"
              alt="sapiens book cover"
            />
          </HomeGridBox>

        </HomeGrid>
        <OptInContainer>
          <HomeGridBox
            className="box optin"
            double
            title={"Monday Morning Nuggets"}
          >
            <p>
              Enter your email address to get a quick update from me on Monday
              Mornings about my free courses, and a few tools to start your week
              of right.
            </p>
            <OptInForm/>
          </HomeGridBox>
        </OptInContainer>
      </HomePageContainer>
    );
  }
}

const HomePageContainer = styled.div`
  .header {
    max-width: 825px;
    margin-bottom: 100px;
    min-height: 240px;
    h1 {
      font-size: 6rem;
      margin-bottom: 0px;
    }
    h1 b {
      font-size: 60%;
    }
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  padding-right: 100px;
`;

const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  grid-auto-flow: dense;
  grid-gap: 80px;
`;

const OptInContainer = styled.div`
  max-width: 700px;
  padding: 100px 0;
`;

export const pageQuery = graphql`
  query MainPosts {
    allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            year
            month
            type
            category
          }
        }
      }
    }
  }
`;
