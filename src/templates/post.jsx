import React from "react";
import Helmet from "react-helmet";
import UserInfo from "../components/UserInfo/UserInfo";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.allWordpressPost;
    const post = postNode;
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
        <SEO postPath={slug} postNode={postNode} postSEO />
        {/*Content*/}
        <div className="Post--Page">
          {/*hero*/}
          <section className='Hero Post-Hero'>
            <p className="PostDate">{post.month} {post.year}</p>
            <h1>{post.title}</h1>
            <h3>in {post.category}</h3>
          </section>
          {/*body*/}
          {/*{coverImg}*/}
          <section className='PostBody'>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          </section>
          {/*Footer -- Meta*/}
          <div className="PostMeta">
            <PostTags tags={post.tags} />
            <SocialLinks postPath={slug} postNode={postNode} />
          </div>
          <UserInfo config={config} />
        </div>

      </div>
    );
  }
}