import React from 'react';
import './contactMain.css';
import { Link } from 'react-router-dom';
import { SiGmail } from 'react-icons/si';
import { MdMyLocation } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter, FaPhone, FaWhatsapp } from 'react-icons/fa';

function ContactMain() {
    return (
        <div className='contact-main'>
            <div className="contact-main-title">
                <h3>Contact Information</h3>
                <p>
                    Thanks for exploring my portfolio! If you have any questions or inquiries, feel free to reach out to me. You can contact me via the following means below.
                </p>
            </div>
            <div className="contact-list">
                <div className="cont-info">
                    <SiGmail className='cont-icon' />
                    <span>akalmin247@gmail.com</span>
                </div>
                <div className="cont-info">
                    <FaPhone className='cont-icon' />
                    <span>+1-306-351-5173</span>
                </div>
                <div className="cont-info">
                    <FaWhatsapp className='cont-icon' />
                    <span>+1-306-351-5173, +234-703-856-0337</span>
                </div>
                <div className="cont-info">
                    <MdMyLocation className='cont-icon' />
                    <span>Remote</span>
                </div>
            </div>
            <div className="contact-guide">
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

export default ContactMain