import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaGamepad } from 'react-icons/fa';
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
                <div className="social">
                    <FaLinkedin />
                </div>
                <div className="social">
                    <FaGithub />
                </div>
                <div className="social">
                    <FaWhatsapp />
                </div>
                <div className="social">
                    <SiGmail />
                </div>
                <div className="social">
                    <FaTwitter />
                </div>
            </div>
        </div>
    )
}

export default RightBar