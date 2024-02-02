import React from 'react';
import './menuBar.css';
import { NavLink, Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";

function RightBar({ handleMenu, openMenu }) {
    return (
        <div className={openMenu ? 'right-bar active' : 'right-bar'}>
            <div className="close-bar" onClick={handleMenu}>
                <MdClose />
            </div>
            <div className="right-bar-cont">
                <NavLink to='/' className="right-bar-list" onClick={handleMenu}>
                    <span>Home</span>
                </NavLink>
                <NavLink to='/about' className="right-bar-list" onClick={handleMenu}>
                    <span>About</span>
                </NavLink>
                <NavLink to='/project' className="right-bar-list" onClick={handleMenu}>
                    <span>Projects</span>
                </NavLink>
                <NavLink to='/contact' className="right-bar-list" onClick={handleMenu}>
                    <span>Contact</span>
                </NavLink>
            </div>
            <div className="right-social-guide">
                <Link to='https://linkedin.com/in/al-min-ajadi-10964a21a' target='_blank' rel='noopener noreferrer' className="social">
                    <FaLinkedin />
                </Link>
                <Link to='https://github.com/Vegetablegito247' target='_blank' rel='noopener noreferrer' className="social">
                    <FaGithub />
                </Link>
                <Link to='https://w.app/DoubleA' target='_blank' rel='noopener noreferrer' className="social">
                    <FaWhatsapp />
                </Link>
                <Link to='mailto:akalmin247@gmail.com' target='_blank' rel='noopener noreferrer' className="social">
                    <SiGmail />
                </Link>
                <Link to='https://twitter.com/ajadiola247' target='_blank' rel='noopener noreferrer' className="social">
                    <FaTwitter />
                </Link>
            </div>
        </div>
    )
}

export default RightBar