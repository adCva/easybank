import React, { useState, useEffect, useRef } from 'react';
import { useTransition, animated } from 'react-spring';
import Button from './Button';


function Nav() {
    const [ openMobileMenu, setOpenMobileMenu ] = useState(false);
    const menuRef = useRef();

    // Open/close mobile menu.
    const toggleMobileMenu = () => {
        setOpenMobileMenu(!openMobileMenu);
    }

    // Close mobile menu on link click.
    const closeOnLinkClick = () => {
        if (window.innerWidth < 767) {
            setOpenMobileMenu(false);
        }
    }

    // React Spring.
    const transition = useTransition(openMobileMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    // Display menu on bigger screens.
    useEffect(() => {
        let makeMenuVisibleDesktop = () => {
            if (window.innerWidth > 767) {
                setOpenMobileMenu(true);
            } else {
                setOpenMobileMenu(false);
            }
        }

        let clouseMenuOutsideClick = (event) => {
            if (window.innerWidth < 768) {
                if (openMobileMenu && !menuRef.current.contains(event.target)) {
                    setOpenMobileMenu(false);
                }
            }
        }

        window.addEventListener("load", makeMenuVisibleDesktop)
        window.addEventListener("resize", makeMenuVisibleDesktop)
        document.addEventListener("click", clouseMenuOutsideClick)
        return() => {
            window.removeEventListener("load", makeMenuVisibleDesktop)
            window.removeEventListener("resize", makeMenuVisibleDesktop)
            document.removeEventListener("click", clouseMenuOutsideClick)
        }
    });


    
    return (
        <div className="navbar-wrapper">
            <div className="navbar-container">
                <img src="./images/logo.svg" alt="Logo" className="nav-logo" />
                <img src={openMobileMenu ? "./images/icon-close.svg" : "./images/icon-hamburger.svg"} alt="Close Menu" onClick={toggleMobileMenu} className="mobile-menu-icon"/>
                {transition((style, openMobileMenu) => openMobileMenu ? (
                    <animated.div style={style} className="nav-menu-container">
                        <div className="nav-menu" ref={menuRef}>
                            <button className="menu-link" onClick={closeOnLinkClick}>Home</button>
                            <button className="menu-link" onClick={closeOnLinkClick}>About</button>
                            <button className="menu-link" onClick={closeOnLinkClick}>Contact</button>
                            <button className="menu-link" onClick={closeOnLinkClick}>Blog</button>
                            <button className="menu-link" onClick={closeOnLinkClick}>Careers</button>
                        </div>
                    </animated.div>
                ) : null)}
                <div className="invite-btn">
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default Nav;