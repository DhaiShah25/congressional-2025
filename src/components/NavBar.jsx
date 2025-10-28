import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './NavBar.css';

import { X, Menu } from 'lucide-react';

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
                        <img src="/favicon.svg" className='h-[5rem] p-2 grayscale' alt="logo" /> Buildwise
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <X style={{ width: "2rem", height: "2rem" }} color="white" /> : <Menu style={{ width: "2rem", height: "2rem" }} color="white" />}
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
                                to='/legal'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Legal
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
