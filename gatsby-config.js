module.exports = {
  siteMetadata: {
    title: `Sarang Mohaniraj | Developer`,
    description: `Personal website for Sarang Mohaniraj showcasing his skills and projects.`,
    author: `Sarang Mohaniraj`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sarang Mohaniraj Personal Website`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#F9F7F7`,
        theme_color: `#112D4E`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
  ],
}
