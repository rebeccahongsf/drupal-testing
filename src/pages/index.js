import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Dog Bork Things
        </h1>
        <h4>{data.allNodeArticle.totalCount} Posts</h4>
        {data.allNodeArticle.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.path.alias}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.title}
              </h3>
              <p>{node.body.summary}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
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
`