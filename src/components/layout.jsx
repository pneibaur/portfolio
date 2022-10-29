import * as React from 'react'
import { Link } from 'gatsby'
import Resume from 'url-loader?name=Phil-Neibaur-Resume.pdf!../../files/Resume.pdf'
import "./styles.scss"


// children is what allows other things to render inside this layout component!
const Layout = ({pageTitle, children}) => {

    return (
        <div className="container">
            <header className='header'>
                <nav className="navbar">
                    <ul className="navUl">
                        <li className="navLi"><Link className='linkItem' to='/'>HOME</Link></li>
                        <li className="navLi"><Link className='linkItem' to='/tech'>TECH</Link></li>
                        <li className="navLi"><Link className='linkItem' to='/about'>ABOUT</Link></li>
                        <li className="navLi"><Link className='linkItem' to='/projects'>PROJECTS</Link></li>
                        <li className="navLi"><Link className='linkItem' to='/contact'>CONTACT</Link></li>
                        <li className='navLi'><a className="linkItem aTag" href={Resume} download>RESUME</a></li>
                    </ul>
                </nav>
            </header>
            <main className="layoutMain">
                <h1 className="mainH1">{pageTitle}</h1>
                {children}
            </main>
            <footer className='page-footer'>
                <p>My footer for now</p>
            </footer>
        </div>
    )
}

export default Layout