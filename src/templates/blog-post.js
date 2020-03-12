import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.nodeArticle
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body.value }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    nodeArticle(path: {alias: {eq: $slug}}) {
      body {
        value
      }
    }
  }
`