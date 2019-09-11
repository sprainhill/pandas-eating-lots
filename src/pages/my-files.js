import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log("my-files data", data)

  return (
    <Layout>
      <div>My Sites Files</div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>prettySize</th>
            <th>birthTime</th>
            <th>extension</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }, index) => (
            <tr key={index}>
              <td>{node.name}</td>
              <td>{node.prettySize}</td>
              <td>{node.birthTime}</td>
              <td>{node.extension}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          name
          prettySize
          birthTime(fromNow: true)
          relativePath
        }
      }
    }
  }
`
