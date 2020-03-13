import React from "react"
import { graphql } from "gatsby"
import styled from styled-components

import Layout from "../components/layout"

const Img = styled.img`
  maxwidth: 100%;
`

export default ({ data }) => {
  const post = data.nodeArticle
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body.value }} />
        <Img src={post.relationships.field_image.localFile.publicURL} alt={post.field_image.alt} />
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
            publicURL
          }
        }
      }
      created
    }
  }
`