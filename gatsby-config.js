"use strict";

const cssnext = require("postcss-cssnext");

module.exports = {
  siteMetadata: {
    title: "Eric Windmill",
    description: "Eric Windmill's digital portfolio.",
    siteUrl: "https://gatsby-starter-typescript-plus.netlify.com",
    author: {
      name: "Eric Windmill",
      url: "https://twitter.com/resir014",
      email: "resir014@gmail.com",
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `material icons`,
          `Overpass\:300,300i,600`, // you can also specify font weights and styles
          `Overpass Mono\:300`, // you can also specify font weights and styles
          `EB Garamond\:400, 400i, 600`, // you can also specify font weights and styles
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          {
            resolve: "gatsby-plugin-react-svg",
            options: {
              rule: {
                include: /assets/ // See below to configure properly
              }
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://gatsby-starter-typescript-plus.netlify.com",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-next",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
  ],
};
