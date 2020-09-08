module.exports = {
  siteMetadata: {
    title: '',
    description: 'Digital Creators',
    author: '@gatsbyjs',
    siteUrl: 'https://www.vanillamarketing.it'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images', 
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/vanilla-favicon.png' // This path is relative to the root of the site.
      }
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-58429863-1'
      }
    },
    {
      resolve: 'gatsby-plugin-facebook-pixel',
      options: {
        pixelId: '1285281921665685'
      }
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // your WordPress source
        baseUrl: 'blog.vanillamarketing.it',
        protocol: 'https',
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
        acfOptionPageIds: [],
        verboseOutput: false,
        includedRoutes: [
          '**/categories',
          '**/posts',
          '**/page',
          '**/media',
          '**/tags',
          '**/taxonomies',
          '**/users',
          '**/*/*/menus',
          '**/*/*/menu-locations'
        ],
        excludedRoutes: [],
        normalizer: function ({ entities }) {
          return entities
        }
      }
    }
  ]
}
