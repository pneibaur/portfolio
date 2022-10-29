import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql, Link } from 'gatsby'
import { Row, Col } from "react-bootstrap"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ProjectsPage = ({ data }) => {
  let counter = 1
  return (
    <Layout pageTitle="My Projects">
      {data.allMdx.nodes.map((node) => {
        return counter % 2 === 0 ? (
          <Row>
            <Col>
              <div key={node.id}>
                <Link to={`/projects/${node.frontmatter.slug}`}>
                  <h2>Project {node.frontmatter.title}</h2>
                </Link>
                <p>Created: {node.frontmatter.date_posted}</p>
                <p>GitHub: {node.frontmatter.git_repo} </p>
                <p>Live Link: {node.frontmatter.live_link} </p>
              </div>
            </Col>
            <Col>
              <GatsbyImage className='projectImage' image={getImage(node.frontmatter.hero_image.childImageSharp)} alt={node.frontmatter.title} />
              <br /><hr /><br />
            </Col>
            <div hidden>{counter = counter + 1}</div>
          </Row>
        ) :
          <Row>
            <Col>
              <GatsbyImage className='projectImage' image={getImage(node.frontmatter.hero_image.childImageSharp)} alt={node.frontmatter.title} />
              <br /><hr /><br />
            </Col>
            <Col>
              <div key={node.id}>
                <Link to={`/projects/${node.frontmatter.slug}`}>
                  <h2>Project {node.frontmatter.title}</h2>
                </Link>
                <p>Created: {node.frontmatter.date_posted}</p>
                <p>GitHub: {node.frontmatter.git_repo} </p>
                <p>Live Link: {node.frontmatter.live_link} </p>
              </div>
            </Col>
            <div hidden>{counter = counter + 1}</div>
          </Row>
      })}
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