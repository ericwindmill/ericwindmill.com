import React from "react";
import styled from "styled-components";
import Link from 'gatsby-link';
import HomeGridBox from "../components/HomeGridBox";
import PageHeader from "../components/PageHeader";
import OptInFormSlim from "../components/OptInSlim";

export default class HomePage extends React.Component {
  render() {
    const latestPost = this.props.data.allMarkdownRemark;
    const title = latestPost.edges[0].node.frontmatter.title;
    const month = latestPost.edges[0].node.frontmatter.month;
    const year = latestPost.edges[0].node.frontmatter.year;
    const path = latestPost.edges[0].node.fields.slug;
    return (
      <HomePageContainer>
        <PageHeader>
          <h1>
            Hi There.{' '}
            <b>
              I'm Eric Windmill. Software Engineer, UI Designer, and writer on the webs.
            </b>
          </h1>
        </PageHeader>
        <BodyContainer>
          <HomeGridBox className="box job" title="Day Job">
            <a href={"https://apptree.cloud"} style={{textDecoration: 'none'}}>
              <h2 style={{color: "#43ab60"}}>AppTree Software</h2>
            </a>
            <h3>Software Engineer</h3>
            <h3>Web and Mobile Clients</h3>
          </HomeGridBox>
          <HomeGridBox className="box article" title="Latest Article">
            <Link to={path} className='article' style={{textDecoration: 'none', cursor: 'pointer'}}>
              <h2>{title}</h2>
              <h3>
                {month} {year}
              </h3>
            </Link>
          </HomeGridBox>
          <HomeGridBox className="box map" title="Currently In">
            <h2>Portland, Or</h2>
            <img
              width="300px"
              src="https://maps.googleapis.com/maps/api/staticmap?zoom=4&maptype=terrain&format=png32&size=850x300&key=%20AIzaSyD5VLHcWSYsxzyvupu8tSU9wErU-himudE&markers=icon:http://res.cloudinary.com/ericwindmill/image/upload/c_scale,h_64/v1522204541/portfolio_site/home.png|Louisville,KY&markers=icon:http://res.cloudinary.com/ericwindmill/image/upload/c_scale,h_50/v1522204542/portfolio_site/sficon2.png|anchor:bottomright|San+Francisco,CA&markers=icon:http://res.cloudinary.com/ericwindmill/image/upload/c_scale,h_64/v1522204542/portfolio_site/pdx.png|Portland,Or&path=color:red|weight:2|38.2527,-85.7585|37.7749,-122.4194|45.5231,-122.6765"
              alt="map of USA"
            />
          </HomeGridBox>
          <HomeGridBox title={'Elsewhere'}>
            <p>
              The quickest way to get in touch is via{" "}
              <a href="https://www.messenger.com/t/eric.windmill">Messenger</a>{" "}
              (it makes my watch vibrate). I'm also active on{" "}
              <a href="https://twitter.com/ericwindmill">Twitter</a> and{" "}
              <a href="https://instagram.com/ericwindmill">Instagram</a>.
            </p>
            <p>Work
              inquires please{" "}
              <a href="mailto:eric@ericwindmill.com">email me</a>.
            </p>
          </HomeGridBox>
          <div className="optin">
            <OptInFormSlim/>
          </div>
        </BodyContainer>
      </HomePageContainer>
    );
  }
}


const HomePageContainer = styled.div`
    margin: 10px;
    max-width: 1100px;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  > .optin {
  margin:  auto;
  }
`;

export const pageQuery = graphql`
  query MainPosts {
    allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "Post"}}}
      sort: {fields: [frontmatter___date], order: DESC}
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
