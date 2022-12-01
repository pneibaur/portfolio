import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { Row, Col, Card, Badge } from "react-bootstrap"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ProjectsPage = ({ data }) => {
  return (
    <Layout pageTitle="My Projects">
      <br />
      {/* maps through the objects */}
      {data.allMdx.nodes.map((node) => {
        return (
          <>
            <Row className='justify-content-center'>
              <Col xs={12} md={4}>
                <Card className='rCard portfolio-card' key={node.id}>
                  <Card.Body className='rCardBody'>
                    <Card.Title className='rLink' as="h1">{node.frontmatter.title}</Card.Title>
                    <Card.Subtitle className='text-muted'>{node.frontmatter.date_posted}</Card.Subtitle>
                    <Card.Subtitle className='rYellow' as='h5'>"{node.frontmatter.flair}"</Card.Subtitle>
                    <hr />
                    <Card.Text className='rCardText'>{node.frontmatter.description}</Card.Text>
                    <hr />
                    <Card.Text className='rCardText'><h5>Technologies used: </h5>
                      {node.frontmatter.techologies_used.map((item) => {
                        return (
                          <>
                          <Badge bg='none'>{item}</Badge>
                          <span>{"  "}</span>
                          </>
                        )
                      })}
                    </Card.Text>
                    <hr />
                    <Card.Link className='rLink' rel="noreferrer" target='_blank' href={node.frontmatter.git_repo}>
                      GitHub</Card.Link>
                    <Card.Link className='rLink' rel="noreferrer" target='_blank' href={node.frontmatter.live_link}>
                      Live Demo</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4} className="align-self-center">
                <GatsbyImage className='projectImage portfolio-card' image={getImage(node.frontmatter.hero_image.childImageSharp)} alt={node.frontmatter.title} />
              </Col>
            </Row>
            <br /><hr /><br />
          </>
        ) 
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