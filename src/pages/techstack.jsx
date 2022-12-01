import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Row, Col, Container, Card } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'

const TechStack = () => {
    return (
        <Layout>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={12} md={8}>
                        <StaticImage className='techStackTitle' src='../images/techStackTitle.png' alt='What I bring to the table' />
                    </Col>
                </Row>
                <hr className='h40' />
                <Row>
                    <Col className='colBuff' xs={12} md={6}>
                        <Card className='rCard skillCard'>
                            <Card.Body>
                                <h2 className='rLink rShadow'>Languages</h2>
                                <hr className="h50" />
                                <StaticImage className='techLogo' src='../images/logos/languages/pythonLogo.png' alt='python-logo' />
                                <StaticImage className='techLogo' src='../images/logos/languages/JavaScriptLogo.png' alt='javascript-logo' />
                                <StaticImage className='techLogo' src='../images/logos/languages/htmlLogo.png' alt='html-logo' />
                                <StaticImage className='techLogo' src='../images/logos/languages/cssLogo.png' alt='css-logo' />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='colBuff' xs={12} md={6}>
                        <Card className='rCard skillCard'>
                            <Card.Body>
                                <h2 className='rLink rShadow'>Libraries & Frameworks</h2>
                                <hr className="h50" />
                                <StaticImage className='techLogo' src='../images/logos/frameworks/nodeJSLogo.png' alt='node-logo' />
                                <StaticImage className='techLogo' src='../images/logos/frameworks/reactjsLogo.png' alt='react-logo' />
                                <StaticImage className='techLogo' src='../images/logos/frameworks/djangoLogo.png' alt='django-logo' />
                                <StaticImage className='techLogo' src='../images/logos/frameworks/gatsbyLogo.png' alt='gatsby-logo' />
                                <StaticImage className='techLogo' src='../images/logos/libraries/jqueryLogo.png' alt='jquery-logo' />
                                <StaticImage className='techLogo' src='../images/logos/frameworks/expressLogo.png' alt='express-logo' />
                                <StaticImage className='techLogo' src='../images/logos/frameworks/ejsLogo.png' alt='ejs-logo' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className='colBuff' xs={12} md={6}>
                        <Card className='rCard skillCard'><Card.Body>
                            <h2 className='rLink rShadow'>Styling Tools</h2>
                            <hr className="h50" />
                            <Row>
                                <Col xs={12}>
                                    <StaticImage className='techLogo' src='../images/logos/skills/sassLogo.png' alt='git-logo' />
                                    <StaticImage className='techLogo' src='../images/logos/libraries/materializeLogo.png' alt='materialize-logo' />
                                    <StaticImage className='techLogo' src='../images/logos/libraries/bootstrapLogo.png' alt='bootstrap-logo' />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <StaticImage className='techLogo' src='../images/logos/libraries/bulmaLogo.png' alt='bulma-logo' />
                                    <StaticImage className='techLogo' src='../images/logos/libraries/skeletonLogo.png' alt='skeleton-logo' />
                                </Col>
                            </Row>
                        </Card.Body></Card>
                    </Col>
                    <Col className='colBuff' xs={12} md={6}>
                        <Card className='rCard skillCard'><Card.Body>
                            <h2 className='rLink rShadow'>Databases</h2>
                            <hr className="h50" />
                            <StaticImage className='techLogo' src='../images/logos/databases/mongodbLogo.png' alt='mongoDB-logo' />
                            <StaticImage className='techLogo' src='../images/logos/databases/mongooseLogo.png' alt='mongoose-logo' />
                            <StaticImage className='techLogo' src='../images/logos/databases/sqlLogo.png' alt='postgreSQL-logo' />
                        </Card.Body></Card>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='colBuff justify-content-center skills' xs={12}>
                        <Card className='rCard skillCard skills'><Card.Body>
                            <h2 className='rLink rShadow'>Skills</h2>
                            <hr className="h50" />
                            <StaticImage className='techLogo' src='../images/logos/skills/gitLogo.png' alt='git-logo' />
                            <StaticImage className='techLogo' src='../images/logos/skills/firebaseLogo.png' alt='git-logo' />
                            <StaticImage className='techLogo' src='../images/logos/skills/herokuLogo.png' alt='git-logo' />
                            <StaticImage className='techLogo' src='../images/logos/skills/netlifyLogo.png' alt='git-logo' />
                            <StaticImage className='techLogo' src='../images/logos/skills/azureLogo.png' alt='azure-logo' />
                        </Card.Body></Card>
                        <br /><br />
                    </Col>
                </Row>
            </Container>
        </Layout >
    )
}

export const Head = () => <Seo title='Tech Stack' />

export default TechStack