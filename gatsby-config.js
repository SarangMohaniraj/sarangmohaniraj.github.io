module.exports = {
  siteMetadata: {
    title: `Sarang Mohaniraj | Portfolio`,
    description: `Personal website for Sarang Mohaniraj showcasing his skills and projects.`,
    author: `Sarang Mohaniraj`,
    siteUrl: "https://sarangmohaniraj.github.io"
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
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
        display: `standalone`,
        icon: `src/content/icons/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-anchor-links`,
  ],
}
