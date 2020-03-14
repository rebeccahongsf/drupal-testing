module.exports = {
  siteMetadata: {
    title: `Dog Blog`,
  },
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        // preview: true,
        baseUrl: `https://dev-doodledeveloper.pantheonsite.io/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}