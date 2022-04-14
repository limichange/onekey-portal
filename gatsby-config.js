module.exports = {
  siteMetadata: {
    siteUrl: 'https://google.com',
    title: 'title',
    description: 'description',
    url: 'url',
    image: 'image',
    twitterUsername: 'twitterUsername',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-i18n-simple',
      options: {
        locales: ['en', 'zh'],
        defaultLocale: 'en',
        redirect: false,
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
