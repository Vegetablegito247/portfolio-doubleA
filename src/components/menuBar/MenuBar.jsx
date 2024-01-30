import React from 'react';
import './menuBar.css';
import LeftBar from './LeftBar';
import RightBar from './RightBar';

function MenuBar({ handleMenu, openMenu }) {
    return (
        <div className={openMenu ? 'menu-bar active' : 'menu-bar'}>
            <LeftBar handleMenu={handleMenu} openMenu={openMenu} />
            <RightBar handleMenu={handleMenu} openMenu={openMenu} />
        </div>
    )
}

export default MenuBar