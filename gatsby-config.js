const config = require("./data/SiteConfig");

const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    rssMetadata: {
      site_url: config.siteUrl + pathPrefix,
      feed_url: config.siteUrl + pathPrefix + config.siteRss,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${config.siteUrl + pathPrefix}/logos/logo-512.png`,
      author: config.userName,
      copyright: config.copyright
    }
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`crimson text:400, 400i, 700, 700i`,
                `space mono:400,700`,
        ],
      }
    },
    {
        resolve: 'gatsby-source-wordpress',
        options: {
            /*
           * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
           * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
           */
            baseUrl: 'ericwindmill.host',
            // The protocol. This can be http or https.
            protocol: 'http',
            // Indicates whether the site is hosted on wordpress.com.
            hostingWPCOM: false,
            // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
            // This feature is untested for sites hosted on Wordpress.com.
            // Defaults to true.
            useACF: true,
            // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
            // It can help you debug specific API Endpoints problems
            verboseOutput: false,
        },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "posts",
    //     path: `${__dirname}/content/${config.blogPostDir}`
    //   }
    // },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "projects",
    //     path: `${__dirname}/content/${config.projectsDir}`
    //   }
    // },
    // {
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     plugins: [
    //       {
    //         resolve: "gatsby-remark-images",
    //         options: {
    //           maxWidth: 690
    //         }
    //       },
    //       {
    //         resolve: "gatsby-remark-responsive-iframe"
    //       },
    //       "gatsby-remark-prismjs",
    //       "gatsby-remark-copy-linked-files",
    //       "gatsby-remark-autolink-headers"
    //     ]
    //   }
    // },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-twitter",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitle,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "minimal-ui",
        icons: [
          {
            src: "/logos/logo-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/logos/logo-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    },
    "gatsby-plugin-offline",
    // {
    //   resolve: "gatsby-plugin-feed",
    //   options: {
    //     setup(ref) {
    //       const ret = ref.query.site.siteMetadata.rssMetadata;
    //       ret.allMarkdownRemark = ref.query.allMarkdownRemark;
    //       ret.generator = "GatsbyJS Material Starter";
    //       return ret;
    //     },
    //     query: `
    //     {
    //       site {
    //         siteMetadata {
    //           rssMetadata {
    //             site_url
    //             feed_url
    //             title
    //             description
    //             image_url
    //             author
    //             copyright
    //           }
    //         }
    //       }
    //     }
    //   `
    //     feeds: [
    //       {
    //         serialize(ctx) {
    //           const rssMetadata = ctx.query.site.siteMetadata.rssMetadata;
    //           return ctx.query.allMarkdownRemark.edges.map(edge => ({
    //             categories: edge.node.frontmatter.tags,
    //             date: edge.node.frontmatter.date,
    //             title: edge.node.frontmatter.title,
    //             description: edge.node.excerpt,
    //             author: rssMetadata.author,
    //             url: rssMetadata.site_url + edge.node.fields.slug,
    //             guid: rssMetadata.site_url + edge.node.fields.slug,
    //             custom_elements: [{"content:encoded": edge.node.html}]
    //           }));
    //         },
    //         query: `
    //         {
    //           allMarkdownRemark(
    //             limit: 1000,
    //             sort: { order: DESC, fields: [frontmatter___date] },
    //           ) {
    //             edges {
    //               node {
    //                 excerpt
    //                 html
    //                 timeToRead
    //                 fields { slug }
    //                 frontmatter {
    //                   title
    //                   cover
    //                   date
    //                   month
    //                   year
    //                   category
    //                   tags
    //                   type
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       `,
    //         output: config.siteRss
    //       }
    //     ]
    //   }
    // }
  ]
};
