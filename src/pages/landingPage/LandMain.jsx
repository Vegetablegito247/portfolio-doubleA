import React from 'react';
import './landmain.css';
import { BsFillDpadFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import welcome from '../../assets/mainImg/welcome.gif';

function LandMain() {
    return (
        <main>
            {/* Main head text */}
            <div className="mainHead">
                <div className="mainTxt">
                    <h3>
                        Turning intricate ideas into seamless, user-friendly designs <br /> that not only communicate effectively but also make a lasting impact.
                    </h3>
                    <p>
                        " Fueling my passion for code, I architect digital realms where innovation and logic converge. Each line I write is a step towards shaping a future brimming with possibilities. "
                    </p>
                </div>
            </div>

            {/* Projects */}
            <div className="projects">
                <div className="project-head">
                    <h1>Projects</h1>
                    <BsFillDpadFill className='pro-icon' />
                </div>

                <div className="project-body">
                    <div className="project-main">
                        <div className="project-list">
                            <div className="project-id">
                                <h1>01</h1>
                            </div>
                            <div className="project-frame">
                                <div className="project-img">
                                    <img src={welcome} alt="" />
                                </div>
                            </div>
                            <div className="project-details">
                                <div className="pro-title">
                                    <h3>FrontEnd-Tutor</h3>
                                </div>
                                <div className="pro-detail">
                                    <div className="pro-txt">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima rem eligendi soluta, sapiente voluptas velit quibusdam! Aperiam autem dolorem accusamus enim consectetur cumque neque, obcaecati ea laborum eos nesciunt, voluptatum tempora quasi! Fugiat, harum at! Magni aspernatur temporibus rerum a!
                                        </p>
                                    </div>
                                    <div className="pro-stack">
                                        <span className='stacks'>React</span>
                                        <span className='stacks'>React-redux</span>
                                        <span className='stacks'>Node</span>
                                        <span className='stacks'>MongoDB</span>
                                    </div>
                                </div>
                                <div className="pro-links">
                                    <Link to="" className='view-site'><span>GitHub</span></Link>
                                    <Link to="" className='view-site'><span>Website</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-main">
                        <div className="project-list">
                            <div className="project-id">
                                <h1>02</h1>
                            </div>
                            <div className="project-frame">
                                <div className="project-img">
                                    <img src={welcome} alt="" />
                                </div>
                            </div>
                            <div className="project-details">
                                <div className="pro-title">
                                    <h3>FrontEnd-Tutor</h3>
                                </div>
                                <div className="pro-detail">
                                    <div className="pro-txt">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima rem eligendi soluta, sapiente voluptas velit quibusdam! Aperiam autem dolorem accusamus enim consectetur cumque neque, obcaecati ea laborum eos nesciunt, voluptatum tempora quasi! Fugiat, harum at! Magni aspernatur temporibus rerum a!
                                        </p>
                                    </div>
                                    <div className="pro-stack">
                                        <span className='stacks'>React</span>
                                        <span className='stacks'>React-redux</span>
                                        <span className='stacks'>Node</span>
                                        <span className='stacks'>MongoDB</span>
                                    </div>
                                </div>
                                <div className="pro-links">
                                    <Link to="" className='view-site'><span>GitHub</span></Link>
                                    <Link to="" className='view-site'><span>Website</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="go-to-project">
                    <h1>View All Projects</h1>
                    <BsFillDpadFill className='pro-icon' />
                </div>
            </div>
        </main>
    )
}

export default LandMain