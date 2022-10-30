import * as React from 'react'
import Resume from 'url-loader?name=Phil-Neibaur-Resume.pdf!../../files/Resume.pdf'
import "./styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar } from 'react-bootstrap';


// children is what allows other things to render inside this layout component!
const Layout = ({ pageTitle, children }) => {

    return (
        <Container fluid>
            <header className='header'>
                <Navbar expand='sm'>
                    <Navbar.Toggle aria-controls='my-nav'/>
                    <Navbar.Collapse id='my-nav' className='justify-content-end'>
                        <Nav >
                            <Nav.Link className='text-light' href='/' >HOME</Nav.Link>
                            <Nav.Link className='text-light' href='/about' >ABOUT</Nav.Link>
                            <Nav.Link className='text-light' href='#' >TECH</Nav.Link>
                            <Nav.Link className='text-light' href='/projects' >PROJECTS</Nav.Link>
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
                <p>My contact info will go here: GitHub, LinkedIn, gmail</p>
            </footer>
        </Container>
    )
}

export default Layout