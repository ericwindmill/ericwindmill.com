import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import UserInfo from "../components/UserInfo";
import PostTags from "../components/PostTags";
import SocialLinks from "../components/SocialLinks";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import OptInForm from "../components/OptInForm";
import PageHeader from "../components/PageHeader";
import OptInFormSlim from "../components/OptInSlim";

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
      <div className="PostTemplate--Container">
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO/>

        <PostContainer>
          <PageHeader>
            <p className="post-date">
              {post.month} {post.year}
            </p>
            <h1>{post.title}</h1>
            <h3>in {post.category}</h3>
          </PageHeader>
          <Divider/>
          <section className="PostBody">
            <div dangerouslySetInnerHTML={{__html: postNode.html}}/>
          </section>
          <div className="PostOptIn">
            <OptInFormSlim/>
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
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  margin: 50px 0;
`;

const PostContainer = styled.div`
  margin: 10px;
  max-width: 1100px;
  .PostBody {
    margin: 0 50px;
    p > img,
    img {
      display: block;
      margin: auto;
    }
    ul,
    dl {
      margin-left: 25px;
      list-style: disc;

      li,
      p,
      ul,
      ol {
        margin: 10px !important;
      }
    }

    ol {
      margin-left: 25px;
      list-style: decimal;

      li,
      p,
      ul,
      ol {
        margin: 10px !important;
      }
    }

    @media screen and (max-width: 600px) {
      margin: 0 10px 50px;
      width: 100%;
    }
  }

  .PostCover {
    margin: auto;
    display: block;
    overflow: hidden;
    max-width: 100%;
  }

  .PostOptIn {
    margin: 150px 50px 0;
    padding-top: 100px;
    border-top: 0.5px solid rgba(0, 0, 0, 0.3);
    
    @media screen and (max-width: 600px) {
      margin: 0 10px;
    }
  }

  .PostMeta {
    display: flex;
    flex-flow: column;
    align-items: center;
    border-top: 1px solid black;
    margin: 50px;
    
    @media screen and (max-width: 600px) {
      margin: 50px 10px;
    }
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
`;

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
