import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Row, Col } from 'react-bootstrap'

const TechStack = () => {
    return (
        <Layout>
            <Row>
                <h1>What I bring to the table</h1>
            </Row>
            <hr className='h40' />
            <br />
            <Row>
                <Col xs={12} md={4}>
                    <h2>Languages</h2>
                    <hr className="h50" />
                </Col>
                <Col xs={12} md={4}>
                    <h2>Frameworks</h2>
                    <hr className="h50" />
                </Col>
                <Col xs={12} md={4}>
                    <h2>Libraries</h2>
                    <hr className="h50" />
                </Col>
            </Row>
        </Layout>
    )
}

export const Head = () => <Seo title='Tech Stack' />

export default TechStack