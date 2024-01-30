import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGamepad } from "react-icons/fa";
import './navbar.css';
import MenuBar from '../menuBar/MenuBar';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <nav>
            <div className="nav-cont">
                <div className="nav-logo">
                    <h3>Double A</h3>
                    <div className="nav-icon">
                        <FaGamepad />
                    </div>
                </div>
                <div className="burger" onClick={handleMenu}>
                    <GiHamburgerMenu />
                </div>
            </div>
            <MenuBar handleMenu={handleMenu} openMenu={openMenu} />
        </nav>
    )
}

export default Navbar