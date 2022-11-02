import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Row, Col, Card, Carousel } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return (
        <Layout pageTitle={<StaticImage className='helloThere' src="../images/helloThere.png" alt="Hello There Wave" />}>
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
                                <Card.Subtitle>That's perfectly fine - I wonder about myself too! <p>Let me fill you in 👏🏼 </p></Card.Subtitle>
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
            <br />
            <hr className="h50" />
            <br />
            <Row className='justify-content-center'>
                <Col xs={12} md={8}>
                    <p><i>
                        "Phil was the director of our transportation department.
                        While working with him over the last 5 years, Phil was one of the hardest workers I knew.
                        He was determined, dedicated, focused, and gritty.
                        He answered emails and texts in a timely manner with a problem-solving mindset.
                        Phil has a personality that invites relationships.
                        He is a loveable man who loves interacting with others in a way that makes one feel cared about.
                        When Phil left our company he left a hole.
                        He gave his heart to us and left a lasting friendship and impact."
                    </i></p>
                    <p> - Drew Davis, Clinical Director at Telos RTC</p>
                </Col>
            </Row>
        </Layout>
    )
}

export const Head = () => <Seo title="About" />

export default AboutPage
// comment