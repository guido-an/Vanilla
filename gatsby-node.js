const path = require("path")
const locales = require("./src/constants/locales")
const routes = require("./src/routes")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const BlogTemplate = path.resolve("./src/templates/blog-post.js")

  routes.forEach(route => {
    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default
        ? route.path
        : locales[lang].path + route.path

      return createPage({
        path: localizedPath,
        component: route.component,
        context: {
          locale: lang,
        },
      })
    })
  })

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
        console.log("Error while running GraphQL query.")
        return
      }

      const posts = result.data.allWordpressPost.edges
      posts.forEach(edge => {
        Object.keys(locales).map(lang => {
          const path = `/blogs/${edge.node.slug}`
          const localizedPath = locales[lang].default
            ? path
            : locales[lang].path + path

          createPage({
            path: localizedPath,
            component: BlogTemplate,
            context: { id: edge.node.id, locale: lang },
          })
        })
      })
      resolve()
    })
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  deletePage(page)
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/page/)) {
    page.matchPath = "/page/*"

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
        locale: lang,
      },
    })
  })
}
