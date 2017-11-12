const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const webpackLodashPlugin = require("lodash-webpack-plugin")

// Will create pages for Wordpress pages (route : /{slug})
// Will create pages for Wordpress posts (route : /{slug})
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                status
                template
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create Page pages.
        const pageTemplate = path.resolve(`./src/templates/wp_page.jsx`)
        _.each(result.data.allWordpressPage.edges, edge => {
          createPage({
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })
      })
      // ==== END PAGES ====

      // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(
          `
            {
              allWordpressPost {
                edges {
                  node {
                    id
                    slug
                    modified
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const postTemplate = path.resolve(`./src/templates/post.jsx`)
          // We want to create a detailed page for each
          // post node. We'll just use the Wordpress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressPost.edges, edge => {
            console.log('UP IN HERE')
            createPage({
              path: `/${edge.node.slug}`,
              component: slash(postTemplate),
              context: {
                id: edge.node.id,
              },
            })
          })
          resolve()
        })
      })
    // ==== END POSTS ====
  })
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-javascript") {
    config.plugin("Lodash", webpackLodashPlugin, null)
  }
}