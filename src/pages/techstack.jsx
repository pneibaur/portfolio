import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Row, Col } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'

const TechStack = () => {
    return (
        <Layout>
            <Row>
                <h1>What I bring to the table</h1>
            </Row>
            <hr className='h40' />
            <br />
            <Row>
                <Col xs={12} md={6}>
                    <h2>Languages</h2>
                    <hr className="h50" />
                    <StaticImage className='techLogo' src='../images/logos/languages/pythonLogo.png' alt='python-logo' />
                    <StaticImage className='techLogo' src='../images/logos/languages/htmlLogo.png' alt='html-logo' />
                    <StaticImage className='techLogo' src='../images/logos/languages/JavaScriptLogo.png' alt='javascript-logo' />
                    <StaticImage className='techLogo' src='../images/logos/languages/cssLogo.png' alt='css-logo' />
                    <StaticImage className='techLogo' src='../images/logos/languages/markdownLogo.png' alt='markdown-logo' />
                </Col>
                <Col xs={12} md={6}>
                    <h2>Frameworks</h2>
                    <hr className="h50" />
                    <StaticImage className='techLogo' src='../images/logos/frameworks/nodeJSLogo.png' alt='node-logo' />
                    <StaticImage className='techLogo' src='../images/logos/frameworks/expressLogo.png' alt='express-logo' />
                    <StaticImage className='techLogo' src='../images/logos/frameworks/ejsLogo.png' alt='ejs-logo' />
                    <StaticImage className='techLogo' src='../images/logos/frameworks/reactjsLogo.png' alt='react-logo' />
                    <StaticImage className='techLogo' src='../images/logos/frameworks/gatsbyLogo.png' alt='gatsby-logo' />
                    <StaticImage className='techLogo' src='../images/logos/frameworks/MaterializeLogo.png' alt='materialize-logo' />
                    <StaticImage className='techLogo' src='../images/logos/frameworks/djangoLogo.png' alt='django-logo' />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4}>
                    <h2>Libraries</h2>
                    <hr className="h50" />
                    <StaticImage className='techLogo' src='../images/logos/libraries/bootstrapLogo.png' alt='bootstrap-logo' />
                    <StaticImage className='techLogo' src='../images/logos/libraries/bulmaLogo.png' alt='bulma-logo' />
                    <StaticImage className='techLogo' src='../images/logos/libraries/jqueryLogo.png' alt='jquery-logo' />
                    <StaticImage className='techLogo' src='../images/logos/libraries/skeletonLogo.png' alt='skeleton-logo' />
                </Col>
                <Col xs={12} md={4}>
                    <h2>Databases</h2>
                    <hr className="h50" />
                    SQL, MongoDB, Mongoose
                </Col>
                <Col xs={12} md={4}>
                    <h2>Skills</h2>
                    <hr className="h50" />
                    Sass, Git & GitHub, Terminal, Firebase, Netlify, Azure, Heroku
                </Col>
            </Row>
        </Layout>
    )
}

export const Head = () => <Seo title='Tech Stack' />

export default TechStack