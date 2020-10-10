import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card"

import "../components/layout.css"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Image />
    <h1 className="total">
      <span role="img" aria-label="party">
        🎉{" "}
      </span>{" "}
      Complete {data.allMarkdownRemark.totalCount} Pull Request
    </h1>
    <br />
    <div className="container">
      {data.allMarkdownRemark.edges.map(r => (
        <Card key={r.node.frontmatter.github} data={r.node.frontmatter} />
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            name
            github
            message
          }
        }
      }
      totalCount
    }
  }
`

export default IndexPage
