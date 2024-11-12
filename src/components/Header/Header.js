import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='headerTitle'>
                <div className='headerDescription'>
                    Portfolio
                </div>
                <div className='headerName'>
                    Passakorn<br />
                    Nuchitkachornwut
                </div>
                <div className='headerDescription'>
                    Web Developer, 3D Animator, Game Developer<br />
                    Graduated from Faculty of Information Technology, KMITL
                </div>
            </div>
            <div className='headerPicture'>

            </div>
        </div>
    );
}

export default Header;