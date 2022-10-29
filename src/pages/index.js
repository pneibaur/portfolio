import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Row, Col, Container } from "react-bootstrap"

const IndexPage = () => {
  return (
    <Layout pageTitle="PHILLIP NEIBAUR">
      <Container>
        <Row>
          <Col xs={6}>
            <br/><br/>
            <h2>
              FULL
              <hr />
              STACK
              <hr />
              ENGINEER
              <hr />
            </h2>
          </Col>
          <Col xs={6}>
            <StaticImage src='../images/posterProfile.png' alt="Phil Profile" />
          </Col>
        </Row>
      </Container>

    </Layout>
  )
}

export const Head = () => <Seo title='Home' />

export default IndexPage