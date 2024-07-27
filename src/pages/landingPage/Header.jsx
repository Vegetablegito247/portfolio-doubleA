import React from 'react';
import './header.css';
import { IoCloudDownload } from "react-icons/io5";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { FaGamepad } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="head-cont">
                <div className="head-txt">
                    <div className="head-intro">
                        <h1>Yo - I am Al-min.</h1>
                        <h1>A Enthusiastic and Passionate { window.innerWidth >= 625 ? <br /> : ' ' } Software Developer.</h1>
                        <p>
                            I specialize in crafting unique digital experiences for brands in the modern web. Proficient in AI chat box creation, I blend creativity and technology to enhance user interactions.
                        </p>
                    </div>
                    <div className="head-btn">
                        <Link to='tel:+13063515173' target='_blank' rel='noopener noreferrer' className="btn-ctct">
                            <span>Contact Me</span>
                            <FaHeadphonesSimple className='ct-icon' />
                        </Link>
                        <Link to='https://docs.google.com/file/d/1Y3pGP6PN7HSXTdS_TTpaXH4Y30uXWVaw/edit?usp=docslist_api&filetype=msword' target='_blank' rel='noopener noreferrer' className="btn-cv">
                            <span>Get My CV</span>
                            <IoCloudDownload className='ct-icon' />
                        </Link>
                    </div>
                </div>
                <div className="con-head-icon">
                    <FaGamepad className='game-pad animate__animated animate__heartBeat animate__infinite	infinite' />
                </div>
            </div>
        </header>
    )
}

export default Header