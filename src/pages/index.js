import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Row, Col, Container, Carousel } from "react-bootstrap"

const IndexPage = () => {
  return (
    <Layout pageTitle="PHILLIP R. NEIBAUR">
      <Container>
        <Row>
          <Col xs={6}>
            <Row className="justify-content-center">
              <Col xs={8}>
                <StaticImage className="homeLogo" src="../images/gatsby-icon.png" alt="PRN-Logo" />
              </Col>
            </Row>
            <br />
            <Row className="justify-content-center">
              <br /><br />
              <Col xs={6}>
                <Carousel indicators={false} nextIcon="" prevIcon="" interval={2000}>
                  <Carousel.Item><h2>FULL <hr/> STACK <hr/> ENGINEER</h2></Carousel.Item>
                  <Carousel.Item><h2>FRONT <hr/> END <hr/> DESIGNER</h2></Carousel.Item>
                  <Carousel.Item><h2>BACK <hr/> END <hr/> DEVELOPER</h2></Carousel.Item>
                  <Carousel.Item><h2>FULL <hr/> FLEDGED <hr/> NERD</h2></Carousel.Item>
                </Carousel>
                {/* <hr />
                <Carousel indicators={false} nextIcon="" prevIcon="" interval={2000}>
                  <Carousel.Item><h2>STACK</h2></Carousel.Item>
                  <Carousel.Item><h2>END</h2></Carousel.Item>
                </Carousel>
                <hr />
                <Carousel indicators={false} nextIcon="" prevIcon="" interval={2000}>
                  <Carousel.Item><h2>ENGINEER</h2></Carousel.Item>
                  <Carousel.Item><h2>DEVELOPER</h2></Carousel.Item>
                  <Carousel.Item><h2>DESIGNER</h2></Carousel.Item>
                </Carousel>
                <hr /> */}
              </Col>
            </Row>
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