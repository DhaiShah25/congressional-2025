import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        CongApp
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/contractor'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Contractor
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/image-analyzer'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Image Analyzer
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/about'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>About</Button>}
                </div>
            </nav>
        </>
    );
}

export default NavBar;
