const path = require('path')
const locales = require('./src/constants/locales')

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const result = await graphql(`
//     query {
//       allWordpressPost {
//         edges {
//           node {
//             id
//             slug
//             content
//             title
//           }
//         }
//       }
//     }
//   `)

//   result.data.allWordpressPost.edges.forEach(edge => {
//     createPage({
//       path: edge.node.slug,
//       component: path.resolve('./src/templates/blog-post.js'),
//       context: {
//         id: edge.node.id,
//         locale: 'it'
//       }
//     })
//   })
// }

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  const myPages = new Promise(resolve => {
    deletePage(page)

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
