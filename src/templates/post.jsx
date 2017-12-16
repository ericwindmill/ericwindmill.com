import React from "react";
import Helmet from "react-helmet";
import UserInfo from "../components/UserInfo/UserInfo";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import OptInForm from "../components/Forms/OptInForm/OptInForm";

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID;
    }
    // const coverImg = (post.cover) ? <img src={post.cover} className='PostCover' alt='cover' /> : <div />
    return (
      <div className='PostTemplate--Container'>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        {/*Content*/}
        <main className="Post--Page">
          {/*hero*/}
          <section className='Post-Hero'>
            <p className="PostDate">{post.month} {post.year}</p>
            <h1>{post.title}</h1>
            <h3>in {post.category}</h3>
          </section>
          <div className='Divider' />
          <section className='PostBody'>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <div className="PostOptIn">
              <h3>Get More Like This For Free</h3>
              <p>
                I'd like to send you a fun way to start your week: the Monday Morning Update. It's an email that takes about 30 seconds to read that'll give you some weekly entertainment: Maybe some new posts from me, the best developer and design happenings around the web that I've found the past week, and maybe a new album or book that I'm diggin'.
              </p>
              <OptInForm />
            </div>
          </section>
          <div className="PostMeta">
            <PostTags tags={post.tags} />
            <SocialLinks postPath={slug} postNode={postNode} />
          </div>
          <UserInfo config={config} />
        </main>

      </div>
    );
  }
}

/* eslint no-undef: "off"*/
// first line just establishes the function that queries. No magic.
// tje second line is creating a function of type query, and naming it BlogPostBySlug, and it takes a named argument called $slug.
// third line is searching for a specific post which matches the slug.
  // then we tell graphQL what information we actually want.
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
