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
        <img src={post.relationships.field_image.localFile.absolutePath} alt={post.field_image.alt} height={post.field_image.height} width={post.field_image.width} />
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($slug: String!) {
  nodeArticle(path: {alias: {eq: $slug}}) {
    body {
      value
    }
    field_image {
      width
      height
      alt
    }
    relationships {
      field_image {
        localFile {
          absolutePath
        }
      }
    }
    created
  }
}
`