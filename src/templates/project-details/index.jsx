import React from "react"
import Layout from "../../components/layout"
import Img from "gatsby-image"
import * as styles from "../../styles/project-detail.module.css"
import { graphql } from "gatsby"
export default function ProjectDetails({ data }) {
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{data.markdownRemark.frontmatter.title}</h2>
        <h3>{data.markdownRemark.frontmatter.stack}</h3>
        <div className={styles.featured}>
          <Img
            fluid={
              data.markdownRemark.frontmatter.featuredImg.childImageSharp.fluid
            }
          />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query projectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        slug
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
