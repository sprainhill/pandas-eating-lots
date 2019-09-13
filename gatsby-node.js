const path = require(`path`)

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  //   console.log("gatsby-node node.internal.type", node.internal.type)

  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    console.log(createFilePath({ node, getNode, basePath: `pages` }))
  }
}

// The onCreateNode function is called by Gatsby whenever a
// new node is created or updated

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise

  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  console.log(JSON.stringify(result, null, 4))

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}

// Adds an implementation of the createPages API which Gatsby
// calls so plugins can add pages
