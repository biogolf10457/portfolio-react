import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='navbar'>
            <div className='navTitle'>
                Portfolio
            </div>
            <div className={`${'navHamburger'} ${menuOpen && 'navHamburgerOpen'}`}
            onClick={() => setMenuOpen(!menuOpen)}>
                    <div className='hamburgerBar'></div>
                    <div className='hamburgerBar'></div>
                    <div className='hamburgerBar'></div>
            </div>
            <div className={`${'navMenu'} ${menuOpen && 'navMenuOpen'}`}>
                <Link className='navMenuItem'>Home</Link>
                <Link className='navMenuItem'>Work</Link>
                <Link className='navMenuItem'>Project</Link>
            </div>
        </nav>
    )
}

export default Navbar;