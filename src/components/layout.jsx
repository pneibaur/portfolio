import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading, 
    navLinks,
    navLinkItem,
    navbar,
} 
from './layout.module.css'

// children is what allows other things to render inside this layout component!
const Layout = ({children}) => {
    return (
        <div className={container}>
            <header>
                <nav className={navbar}>
                    <ul className={navLinks}>
                        <li className={navLinkItem}><Link to='/'>HOME</Link></li>
                        <li className={navLinkItem}><Link to='/about'>ABOUT</Link></li>
                        <li className={navLinkItem}><Link to='/projects'>PROJECTS</Link></li>
                        <li className={navLinkItem}><Link to='#'>RESUME</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <h1 className={heading}>My portfolio webiste</h1>
                {children}
            </main>
            <footer>
                <p>My footer for now</p>
            </footer>
        </div>
    )
}

export default Layout