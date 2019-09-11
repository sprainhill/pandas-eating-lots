exports.onCreateNode = ({ node }) => {
  console.log("gatsby-node node.internal.type", node.internal.type)
}

// The onCreateNode function is called by Gatsby whenever a new node is created or updated
