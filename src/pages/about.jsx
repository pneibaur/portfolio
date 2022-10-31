import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Row, Col, Card, Carousel } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return (
        <Layout pageTitle="👋🏼 HELLO THERE">
            <Row>
                <Col xs={12} md={6}>
                    <StaticImage src='../images/classicProfile.png' alt='Phil Neibaur Profile' />
                </Col>
                <Col xs={12} md={6}>
                    <Row>
                        <br />
                        <Card className='rCard'>
                            <Card.Body>
                                <Card.Title className='rLink' as='h1'>You're probably wondering about me right now.</Card.Title>
                                <Card.Subtitle>That's perfectly fine! I wonder about myself too. Let me help you out and fill you in! 👏🏼 </Card.Subtitle>
                                <hr />
                                <Carousel indicators={false}>
                                    <Carousel.Item interval={6000}>
                                        <Row className='justify-content-center'>
                                            <Col xs={8}>
                                                <Card.Text className='rYellow' as="h3">I AM POSITIVE</Card.Text>
                                                <Card.Text>
                                                    Yep, I really am. There is lots to be positive about!
                                                    It's one of the first things you'll notice when we meet for the first time.
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                        <br /><br />
                                    </Carousel.Item>
                                    <Carousel.Item interval={6000}>
                                        <Row className='justify-content-center'>
                                            <Col xs={8}>
                                                <Card.Text className='rYellow' as="h3">I AM A THINKER</Card.Text>
                                                <Card.Text>
                                                    Seriously, I love to analyze and even exhaust a topic to understand it.
                                                    It's what makes me such a great coder. I take the time to read the docs,
                                                    find the features, and then try them out on my next project.
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                        <br /><br />
                                    </Carousel.Item>
                                    <Carousel.Item interval={6000}>
                                        <Row className='justify-content-center'>
                                            <Col xs={8}>
                                                <Card.Text className='rYellow' as="h3">I AM A PEOPLE PERSON</Card.Text>
                                                <Card.Text>
                                                    Wait, but I'm a software dev, so how does that work?
                                                    That's right, I'm both and I love it! 🙌🏼
                                                    I like getting to know other people, making friends,
                                                    working in teams, and problem solving with them.
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                        <br /><br />
                                    </Carousel.Item>
                                </Carousel>
                            </Card.Body>
                        </Card>
                    </Row>
                    <br />
                    <Row>
                        <Card className='rCard'>
                            <Card.Body>
                                <Card.Title className='rLink' as="h1">FUN FACTS</Card.Title>
                                <Card.Subtitle>Because I know you wana know</Card.Subtitle>
                                <hr />
                                <Card.Text className='rYellow' as='h3'>My Favorites</Card.Text>
                                <Card.Text><strong> Book Series:</strong> The Stormlight Archive by Brandon Sanderson</Card.Text>
                                <Card.Text><strong> TV Show:</strong> Avatar The Last Airbender</Card.Text>
                                <Card.Text><strong> Place to visit:</strong> Western Australia</Card.Text>
                                <Card.Text>
                                    <strong> Quote:</strong> "Courage is not simply one of the virtues,
                                    but the form of every virtue at the testing point." - C.S. Lewis
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
            </Row>
        </Layout>
    )
}

export const Head = () => <Seo title="About" />

export default AboutPage
// comment