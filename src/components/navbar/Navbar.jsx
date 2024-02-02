import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGamepad } from "react-icons/fa";
import './navbar.css';
import LeftBar from '../menuBar/LeftBar';
import RightBar from '../menuBar/RightBar';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <nav>
            <div className="nav-cont">
                <Link to='/' className="nav-logo">
                    <h3>Double A</h3>
                    <div className="nav-icon">
                        <FaGamepad />
                    </div>
                </Link>
                <div className="burger" onClick={handleMenu}>
                    <GiHamburgerMenu />
                </div>
            </div>
            <LeftBar handleMenu={handleMenu} openMenu={openMenu} />
            <RightBar handleMenu={handleMenu} openMenu={openMenu} />
        </nav>
    )
}

export default Navbar