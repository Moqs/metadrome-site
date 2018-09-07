module.exports = {
  siteMetadata: {
    title: 'Metadrome',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`,
    'gatsby-plugin-catch-links',
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/pages`,
          name: 'pages',
        }
      },
      {
        resolve: 'gatsby-plugin-web-font-loader',
        options:{
          google: {
            families: ['Oleo Script', "Montserrat", 'Noto Sans JP']
          }
        }
      }
  ]
}
