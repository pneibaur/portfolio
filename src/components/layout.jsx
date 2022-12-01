import React, { useState } from 'react'
import "./styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar, Row, Modal, Button } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';


// children is what allows other things to render inside this layout component!
const Layout = ({ pageTitle, children }) => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <Container fluid>
            <header className='header'>
                <Navbar className='navbar-custom' expand='sm'>
                    <Navbar.Toggle aria-controls='my-nav' />
                    <Navbar.Collapse id='my-nav' className='justify-content-end'>
                        <Nav >
                            <Nav.Link className='navbar-custom navbar-text navLi' href='/' >HOME</Nav.Link>
                            <Nav.Link className='navbar-custom navbar-text navLi' href='/about' >ABOUT</Nav.Link>
                            <Nav.Link className='navbar-custom navbar-text navLi' href='/techstack' >TECHNOLOGY</Nav.Link>
                            <Nav.Link className='navbar-custom navbar-text navLi' href='/projects' >PORTFOLIO</Nav.Link>
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
                <hr className="h50" />
                <Row className='justify-content-center'>
                    <span>
                        <a href="https://www.linkedin.com/in/phillip-neibaur/" target="_blank" rel='noreferrer'>
                            <StaticImage class='footerLogo' src='../images/logos/linkedinLogo.png' alt='LinkedIn Logo' />
                        </a>
                        <a href="https://github.com/pneibaur" target="_blank" rel='noreferrer'>
                            <StaticImage class='footerLogo' src='../images/logos/githubLogo.png' alt='GitHub Logo' />
                        </a>
                        <a className='footerLi' href="#" onClick={handleShow}>
                            <StaticImage class='footerLogo' src='../images/fileDownload.png' alt='Resume Download' />
                        </a>
                    </span>
                </Row>
            </footer>
            <Modal show={show} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header><Modal.Title>DOWNLOAD RESUME</Modal.Title></Modal.Header>
                <Modal.Footer>
                    <a href={`../../Phillip_Neibaur_Resume.pdf`} download>
                        <Button variant='success'>DOWNLOAD</Button>
                    </a>
                    <Button variant='danger' onClick={handleClose}>CLOSE</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Layout