import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import * as styles from "../../styles/projects.module.css"
import Img from "gatsby-image"
export default function Projects({ data }) {
  const projects = data.project.nodes
  const contact = data.contact.siteMetadata.contact
  console.log(projects)
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects and Websites I have created</h3>

        <div className={styles.projects}>
          {projects.map(project => {
            return (
              <Link
                to={`/projects/${project.frontmatter.slug}`}
                key={project.id}
              >
                <div>
                  <Img
                    fluid={project.frontmatter.thumb.childImageSharp.fluid}
                  />
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            )
          })}
        </div>
        <p>Like what you see? Email me at {contact} for a quote!</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    project: allMarkdownRemark {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
