import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navLogo'>
                Logo
            </div>
            <div className='navMenu'>
                <Link className='navMenuItem'>Home</Link>
                <Link className='navMenuItem'>Work</Link>
                <Link className='navMenuItem'>Project</Link>
            </div>
        </nav>
    )
}

export default Navbar;