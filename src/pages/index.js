import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Row, Col, Container, Carousel } from "react-bootstrap"

const IndexPage = () => {
  return (
    <Layout pageTitle="PHIL R. NEIBAUR">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Row className="justify-content-center">
              <Col xs={12} md={8}>
                <StaticImage className="homeLogo" src="../images/PRNfavicon.png" alt="PRN-Logo" />
              </Col>
            </Row>
            <br />
            <Row className="justify-content-center">
              <br /><br />
              <Col xs={12} md={8}>
                <Carousel indicators={false} nextIcon="" prevIcon="" interval={2000}>
                  <Carousel.Item><h2>FULL <hr/> STACK <hr/> ENGINEER</h2></Carousel.Item>
                  <Carousel.Item><h2>FRONT <hr/> END <hr/> DESIGNER</h2></Carousel.Item>
                  <Carousel.Item><h2>BACK <hr/> END <hr/> DEV</h2></Carousel.Item>
                  <Carousel.Item><h2>FULL <hr/> FLEDGED <hr/> NERD</h2></Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <StaticImage src='../images/posterProfile.png' alt="Phil Profile" />
          </Col>
        </Row>
      </Container>

    </Layout>
  )
}

export const Head = () => <Seo title='Home' />

export default IndexPage