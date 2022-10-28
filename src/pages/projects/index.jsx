import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql, Link } from 'gatsby'

const ProjectsPage = ({data}) => {
    return (
        <Layout>
            {data.allMdx.nodes.map((node) => {
                return (
                    <article key={node.id}>
                        <Link to={`/projects/${node.frontmatter.slug}`}>
                            <h2>Project {node.frontmatter.title}</h2>
                        </Link>
                        <p>Created: {node.frontmatter.date_posted}</p>
                        <p>GitHub: {node.frontmatter.git_repo} </p>
                        <p>Live Link: {node.frontmatter.live_link} </p>
                    </article>
                )
            })}
            <h1>Projects Page</h1>
            <article>

            </article>
        </Layout>
    )
}

export const query = graphql`
query {
    allMdx(sort: {order: DESC, fields: frontmatter___date_posted}) {
      nodes {
        id
        frontmatter {
          git_repo
          live_link
          slug
          title
          date_posted(formatString: "MMMM D, YYYY")
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="Projects" />

export default ProjectsPage