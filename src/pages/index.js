import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.allMarkdownRemark.edges.map(r => r.node.frontmatter.name)}
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
          }
        }
      }
    }
  }
`

export default IndexPage
