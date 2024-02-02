import React from 'react';
import './footer.css'
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaGamepad } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="footer-main">
                <div className="foot-head">
                    <h1>Ready to take your project to the next level ?</h1>
                </div>
                <div className="foot-body">
                    <div className="feel-free">
                        <h3>Feel free to connect with me on ...</h3>
                    </div>
                    <div className="connect-guide">
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
                <div className="foot-bottom">
                    <div className="foot-made">
                        <h3>Made by</h3>
                    </div>
                    <div className="foot-author">
                        <h3>Double A</h3>
                        <div className="nav-icon">
                            <FaGamepad />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer