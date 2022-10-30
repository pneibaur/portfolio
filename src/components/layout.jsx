import * as React from 'react'
import Resume from 'url-loader?name=Phil-Neibaur-Resume.pdf!../../files/Resume.pdf'
import "./styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';


// children is what allows other things to render inside this layout component!
const Layout = ({ pageTitle, children }) => {

    return (
        <Container fluid>
            <header className='header'>
                <Navbar expand='sm'>
                    <Navbar.Toggle aria-controls='my-nav' />
                    <Navbar.Collapse id='my-nav' className='justify-content-end'>
                        <Nav >
                            <Nav.Link className='text-light' href='/' >HOME</Nav.Link>
                            <Nav.Link className='text-light' href='/about' >ABOUT</Nav.Link>
                            <Nav.Link className='text-light' href='/techstack' >SERVICES</Nav.Link>
                            <Nav.Link className='text-light' href='/projects' >EXPERIENCE</Nav.Link>
                            <Nav.Link className='text-light' href={Resume} download >RESUME</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
            <main className="layoutMain">
                <h1 className="pageTitle">{pageTitle}</h1>
                <hr />
                {children}
            </main>
            <footer className='page-footer'>
                <Row className='justify-content-center'>
                    <h5> Let's stay <a href="https://www.linkedin.com/in/phillip-neibaur/" target="_blank" rel='noreferrer'>
                            <StaticImage class='footerLogo' src='../images/logos/linkedinLogo.png' alt='LinkedIn Logo' />
                        </a> touch! 
                        <a href="https://github.com/pneibaur" target="_blank" rel='noreferrer'>
                            <StaticImage class='footerLogo' src='../images/logos/githubLogo.png' alt='GitHub Logo' />
                        </a>
                    </h5>
                </Row>
            </footer>
        </Container>
    )
}

export default Layout