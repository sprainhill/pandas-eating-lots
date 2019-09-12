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
