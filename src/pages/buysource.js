import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Bio from "../components/Bio"
import CardBuySource from "../components/CardBuySource"
import SEO from "../components/Seo"

import "../styles/pages/buysource.scss"

class BuysourcePage extends Component {
  render() {
    const { data } = this.props
    const {
      allMarkdownRemark: { edges },
    } = data

    return (
      <Layout>
        <SEO title="Buy Source" keywords={[`buysource`, `page`]} />
        <Bio />
        
          <div className="card-list-buysource">
              {edges.map(({ node }) => {
                return (
                  <CardBuySource
                    key={node.id}
                    title={node.frontmatter.title}
                    description={node.frontmatter.description}
                    dateTime={node.frontmatter.date}
                    readTime={node.timeToRead}
                    coverImage={
                      node.frontmatter.cover &&
                      node.frontmatter.cover.childImageSharp.fluid
                    }
                    linkPost={node.fields.slug}
                  />
                )
              })}
          </div>
        
      </Layout>
    )
  }
}

export default BuysourcePage

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "buysource-page" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
            cover {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          timeToRead
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
