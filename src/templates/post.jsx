import React from "react";
import Helmet from "react-helmet";
import styled from 'styled-components';
import UserInfo from "../components/UserInfo/UserInfo";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import OptInForm from "../components/Forms/OptInForm/OptInForm";

export default class PostTemplate extends React.Component {
  render() {
    const {slug} = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID;
    }

    return (
      <div className='PostTemplate--Container'>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO/>

        <PostContainer>
          {/*hero*/}
          <PostHero>
            <p className="post-date">{post.month} {post.year}</p>
            <h1>{post.title}</h1>
            <h3>in {post.category}</h3>
          </PostHero>
          <Divider/>
          <section className='PostBody'>
            <div dangerouslySetInnerHTML={{__html: postNode.html}}/>
          </section>
          <div className="PostOptIn">
            <h3>Get More Like This For Free</h3>
            <p>
              I'd like to send you a fun way to start your week: the Monday Morning Update. It's an email that takes
              about 30 seconds to read that'll give you some weekly entertainment: Maybe some new posts from me, the
              best developer and design happenings around the web that I've found the past week, and maybe a new album
              or book that I'm diggin'.
            </p>
            <OptInForm/>
          </div>
          <div className="PostMeta">
            <PostTags tags={post.tags}/>
            <SocialLinks postPath={slug} postNode={postNode}/>
            <UserInfo config={config}/>
          </div>
        </PostContainer>
      </div>
    );
  }
}

const Divider = styled.div`
  border-bottom: 1px solid rgba(0,0,0,.2);
  margin: 50px 0;
`

const PostContainer = styled.div`
  max-width: 850px;
  
.PostBody {
	p > img, img {
		display: block;
		margin: auto;
	}

	ul, dl {
		margin-left: 25px;
		list-style: disc;

		li, p, ul, ol {
			margin: 10px !important;
		}
	}

	ol {
		margin-left: 25px;
		list-style: decimal;

		li, p, ul, ol {
			margin: 10px !important;
		}
	}
}

.PostCover {
	margin: auto;
	display: block;
	overflow: hidden;
	max-width: 100%;
}

.PostOptIn {
	margin-top:  150px;
	padding-top: 100px;
	border-top: 1px solid black;
}

.PostMeta {
  display: flex;
  flex-flow: column;
  align-items: center;
	border-top: 1px solid black;
	margin: 50px;
}

.post-tag-container {
	display: flex;
	justify-content: center;
	align-items: center;

	p {
		font-size: 1.2rem;
		margin: 8px 0 0 0;
	}

	a {
		button {
			line-height: 0;
			outline: none;
			border: none;
			text-decoration: underline;
			background: transparent;

			&:hover {
				cursor: pointer;
			}
		}
	}
}
`
const PostHero = styled.div`
  position: relative;
  h1 {
    margin: 0;
    line-height: 1.2;
  }
	.post-date {
		position: absolute;
		top: -20px;
		color: grey;
		font-family: 'Fira Mono', monospace;
		font-size: 1.2rem;
	}
`

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt(pruneLength: 250)
      frontmatter {
        title
        cover
        month
        year
        category
        tags
      }
      fields {
        slug
      }
    }
  }
`;
