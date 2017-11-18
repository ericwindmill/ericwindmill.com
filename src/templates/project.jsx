// import React from "react";
// import Helmet from "react-helmet";
// import UserInfo from "../components/UserInfo/UserInfo";
// import Disqus from "../components/Disqus/Disqus";
// import PostTags from "../components/PostTags/PostTags";
// import SocialLinks from "../components/SocialLinks/SocialLinks";
// import SEO from "../components/SEO/SEO";
// import config from "../../data/SiteConfig";
// import "./post.css";
//
// export default class ProjectTemplate extends React.Component {
//   render() {
//     const { slug } = this.props.pathContext;
//     const postNode = this.props.data.markdownRemark;
//     console.log(this.props)
//     const post = postNode.frontmatter;
//     if (!post.id) {
//       post.id = slug;
//     }
//     if (!post.id) {
//       post.category_id = config.postDefaultCategoryID;
//     }
//     const excerpt = postNode.excerpt
//     const timeToRead = postNode.timeToRead
//     return (
//       <div>
//         <Helmet>
//           <title>{`${post.title} | ${config.siteTitle}`}</title>
//         </Helmet>
//         <SEO postPath={slug} postNode={postNode} postSEO />
//         <div>
//           <h1>
//             {post.title}
//           </h1>
//           <p>post id: {post.id}</p>
//           <p>post excerpt: {excerpt}</p>
//           <p>time to read: {timeToRead}</p>
//           <img src={post.cover}  alt="cactus" />
//           <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
//           <div className="post-meta">
//             <PostTags tags={post.tags} />
//             <SocialLinks postPath={slug} postNode={postNode} />
//           </div>
//           <UserInfo config={config} />
//           <Disqus postNode={postNode} />
//         </div>
//       </div>
//     );
//   }
// }
//
// /* eslint no-undef: "off"*/
// // first line just establishes the function that queries. No magic.
// // tje second line is creating a function of type query, and naming it BlogPostBySlug, and it takes a named argument called $slug.
// // third line is searching for a specific post which matches the slug.
// // then we tell graphQL what information we actually want.
// export const pageQuery = graphql`
//   query ProjectBySlug($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       timeToRead
//       excerpt(pruneLength: 250)
//       frontmatter {
//         title
//         cover
//         date
//         category
//         tags
//       }
//       fields {
//         slug
//       }
//     }
// `;
// }
