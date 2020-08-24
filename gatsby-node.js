// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// const locales = require('./src/constants/locales')

// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, deletePage } = actions

//   return new Promise(resolve => {
//     deletePage(page)

//     Object.keys(locales).map(lang => {
//       const localizedPath = locales[lang].default
//         ? page.path
//         : locales[lang].path + page.path

//       return createPage({
//         ...page,
//         path: localizedPath,
//         context: {
//           locale: lang
//         }
//       })
//     })

//     resolve()
//   })
// }
const path = require('path')
const locales = require('./src/constants/locales')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const BlogTemplate = path.resolve('./src/templates/blog-post.js')

  return new Promise((resolve, reject) => {
    graphql(`
    query {
      allWordpressPost {
        edges {
          node {
            id
            slug
            content
            title
          }
        }
      }
    }
  `).then(result => {
      if (result.errors) {
        console.log('Error while running GraphQL query.')
        return
      }

      const Pages = result.data.allWordpressPost.edges
      Pages.forEach(edge => {
        createPage({
          path: `/page/${edge.node.slug}`,
          component: BlogTemplate,
          context: { id: edge.node.id }
        })
      })
      resolve()
    })
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  // const BlogPostTemplate = path.resolve("./src/templates/blog-post.js")

  const myPages = new Promise(resolve => {
    deletePage(page)
    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    if (page.path.match(/^\/page/)) {
      page.matchPath = '/page/*'

      // Update the page.
      createPage({ ...page })
    }

    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default
        ? page.path
        : locales[lang].path + page.path

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang
        }
      })
    })

    resolve()
  })
  return myPages
}
