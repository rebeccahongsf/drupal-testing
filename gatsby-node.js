const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query Article {
      allNodeArticle {
        edges {
          node {
            title
            id
            path {
              alias
            }
            body {
              summary
              value
            }
          }
        }
      }
    }   
  `)

  result.data.allNodeArticle.edges.forEach(({ node }) => {
    createPage({
      path: node.path.alias,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.path.alias,
      },
    })
  })
}