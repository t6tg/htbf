require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `Hacktoberfest Thailand`,
    description: `The biggest open source event`,
    author: `@t6tg_`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-javascript-frontmatter`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hacktoberfest`,
        short_name: `HTBF`,
        start_url: `/`,
        background_color: `#072540`,
        theme_color: `#FF8AE2`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
