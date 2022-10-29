import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { Row, Col, Card } from "react-bootstrap"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ProjectsPage = ({ data }) => {
  let counter = 0
  return (
    <Layout pageTitle="My Projects">
      <br />
      {/* maps through the objects */}
      {data.allMdx.nodes.map((node) => {
        // checks if counter is odd or even. renders different layout depending.
        return counter % 2 === 0 ? (
          <>
            <Row className='justify-content-center'>
              <Col xs={12} md={4}>
                <Card className='rCard' key={node.id}>
                  <Card.Body className='rCardBody'>
                    <Card.Title as="h1">{node.frontmatter.title}</Card.Title>
                    <Card.Subtitle className='text-muted'>{node.frontmatter.date_posted}</Card.Subtitle>
                    <Card.Text className='rCardText' as='h4'>"{node.frontmatter.flair}"</Card.Text>
                    <hr />
                    <Card.Text>{node.frontmatter.description}</Card.Text>
                    <hr />
                    <Card.Link className='rLink' rel="noreferrer" target='_blank' href={node.frontmatter.git_repo}>
                      GitHub</Card.Link>
                    <Card.Link className='rLink' rel="noreferrer" target='_blank' href={node.frontmatter.live_link}>
                      Live Demo</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <GatsbyImage className='projectImage' image={getImage(node.frontmatter.hero_image.childImageSharp)} alt={node.frontmatter.title} />
              </Col>
              <div hidden>{counter = counter + 1}</div>
            </Row>
            <br /><hr /><br />
          </>
          // Ternary operator, for 'else'. renders different layout below.
        ) :
          <>
            <Row className='justify-content-center'>
              <Col xs={12} md={4}>
                <GatsbyImage className='projectImage' image={getImage(node.frontmatter.hero_image.childImageSharp)} alt={node.frontmatter.title} />
              </Col>
              <Col xs={12} md={4}>
                <Card className='rCard' key={node.id}>
                  <Card.Body className='rCardBody'>
                    <Card.Title as="h1">{node.frontmatter.title}</Card.Title>
                    <Card.Subtitle className='text-muted'>{node.frontmatter.date_posted}</Card.Subtitle>
                    <Card.Text className='rCardText' as='h4'>"{node.frontmatter.flair}"</Card.Text>
                    <hr />
                    <Card.Text>{node.frontmatter.description}</Card.Text>
                    <hr />
                    <Card.Link className='rLink' rel="noreferrer" target='_blank' href={node.frontmatter.git_repo}>
                      GitHub</Card.Link>
                    <Card.Link className='rLink' rel="noreferrer" target='_blank' href={node.frontmatter.live_link}>
                      Live Demo</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <div hidden>{counter = counter + 1}</div>
            </Row>
            <br /><hr /><br />
          </>
      })}
    </Layout>
  )
}
// data query from graphql
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
          techologies_used
          description
          flair
        }
      }
    }
  }
`

export const Head = () => <Seo title="Projects" />

export default ProjectsPage