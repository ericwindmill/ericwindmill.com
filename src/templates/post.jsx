// import React from "react";
// import Helmet from "react-helmet";
// import UserInfo from "../components/UserInfo/UserInfo";
// import PostTags from "../components/PostTags/PostTags";
// import SocialLinks from "../components/SocialLinks/SocialLinks";
// import SEO from "../components/SEO/SEO";
// import config from "../../data/SiteConfig";
// import "./b16-tomorrow-dark.css";
//
// export default class PostTemplate extends React.Component {
//   render() {
//     const { slug } = this.props.pathContext;
//     const postNode = this.props.data.markdownRemark;
//     const post = postNode.frontmatter;
//     if (!post.id) {
//       post.id = slug;
//     }
//     if (!post.id) {
//       post.category_id = config.postDefaultCategoryID;
//     }
//     // const coverImg = (post.cover) ? <img src={post.cover} className='PostCover' alt='cover' /> : <div />
//     return (
//       <div className='PostTemplate--Container'>
//         <Helmet>
//           <title>{`${post.title} | ${config.siteTitle}`}</title>
//         </Helmet>
//         <SEO postPath={slug} postNode={postNode} postSEO />
//         {/*Content*/}
//         <div className="Post--Page">
//           {/*hero*/}
//           <section className='Hero Post-Hero'>
//             <p className="PostDate">{post.month} {post.year}</p>
//             <h1>{post.title}</h1>
//             <h3>in {post.category}</h3>
//           </section>
//           {/*body*/}
//           {/*{coverImg}*/}
//           <section className='PostBody'>
//             <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
//           </section>
//           {/*Footer -- Meta*/}
//           <div className="PostMeta">
//             <PostTags tags={post.tags} />
//             <SocialLinks postPath={slug} postNode={postNode} />
//           </div>
//           <UserInfo config={config} />
//         </div>
//
//       </div>
//     );
//   }
// }
//
// /* eslint no-undef: "off"*/
// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     wordpressPost(fields: { slug: { eq: $slug } }) {
//         content
//         excerpt
//         id
//         slug
//         title
//         date
//         modified
//         author {
//           name
//         }
//         template
//         categories {
//           name
//         }
//         tags{
//           name
//         }
//         acf {
// 		  project
//         }
//         fields {
//             slug
//         }
//     }
// }
// `;
//
//
//
// // first line just establishes the function that queries. No magic.
// // tje second line is creating a function of type query, and naming it BlogPostBySlug, and it takes a named argument called $slug.
// // third line is searching for a specific post which matches the slug.
//   // then we tell graphQL what information we actually want.
// // export const pageQuery = graphql`
// //   query BlogPostBySlug($slug: String!) {
// //     markdownRemark(fields: { slug: { eq: $slug } }) {
// //       html
// //       timeToRead
// //       excerpt(pruneLength: 250)
// //       frontmatter {
// //         title
// //         cover
// //         month
// //         year
// //         category
// //         tags
// //       }
// //       fields {
// //         slug
// //       }
// //     }
// //   }
// // `;
