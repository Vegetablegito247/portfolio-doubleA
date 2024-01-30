import React from 'react';
import './footer.css'
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaGamepad } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";

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