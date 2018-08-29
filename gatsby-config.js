module.exports = {
  siteMetadata: {
    title: 'Metadrome',
  },
  plugins: ['gatsby-plugin-react-helmet'],
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options:{
        google: {
          families: ['Oleo Script', 'M PLUS Rounded 1c']
        }
      }
    }
  ]
}
