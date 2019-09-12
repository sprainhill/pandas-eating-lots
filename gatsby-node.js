exports.onCreateNode = ({ node, getNode }) => {
  //   console.log("gatsby-node node.internal.type", node.internal.type)

  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    console.log(`\n`, fileNode.relativePath)
  }
}

// The onCreateNode function is called by Gatsby whenever a new node is created or updated
