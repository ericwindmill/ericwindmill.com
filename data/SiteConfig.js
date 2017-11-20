module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  projectsDir: "projects",
  siteTitle: "Eric Windmill", // Site title.
  siteTitleAlt: "Eric Windmill's Flutter and CSS Posts", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://ericwindmill.com", // Domain of your website without pathPrefix.
  pathPrefix: "/ericwindmill", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Eric Windmill's Portfolio and Blog", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-82450300-1", // GA tracking ID.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Eric Windmill", // Username to display in the author segment.
  userTwitter: "ericwindmill", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Portland, OR", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription:
    "", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/ericwindmill",
      iconClassName: "fa-github-alt"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/ericwindmill",
      iconClassName: "fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:eric@ericwindmill.com",
      iconClassName: "fa-envelope"
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/ericwindmill/",
      iconClassName: "fa-instagram"
    },
    {
      label: "Messenger",
      url: "https://www.messenger.com/t/eric.windmill",
      iconClassName: "fa-comments"
    }
  ],
  copyright: "Copyright © 2017. Eric Windmill", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
