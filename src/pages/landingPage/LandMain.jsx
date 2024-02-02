import React from 'react';
import './landmain.css';
import { BsFillDpadFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function LandMain() {
    const projectBuild = useSelector(state => state.portfolio.projects);

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
                    {
                        projectBuild.map((projects, ind) => (
                            <div key={ind} data-aos="zoom-in-right" className="project-main">
                                <div className="project-list">
                                    <div className="project-id">
                                        <h1>{projects.id}</h1>
                                    </div>
                                    <div className="project-frame">
                                        <div className="project-img">
                                            <img src={projects.img} alt="" />
                                        </div>
                                    </div>
                                    <div className="project-details">
                                        <div className="pro-title">
                                            <h3>{projects.title}</h3>
                                        </div>
                                        <div className="pro-detail">
                                            <div className="pro-txt">
                                                <p>
                                                    {projects.info}
                                                </p>
                                            </div>
                                            <div className="pro-stack">
                                                {
                                                    projects.stack.map((stack) => (
                                                        <span className='stacks'>{stack}</span>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="pro-links">
                                            <Link to={projects.gitHub} target='_blank' rel='noopener noreferrer' className='view-site'><span>GitHub</span></Link>
                                            <Link to={projects.website} target='_blank' rel='noopener noreferrer' className='view-site'><span>Website</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <Link to='/project' className="go-to-project">
                    <h1>View All Projects</h1>
                    <BsFillDpadFill className='pro-icon' />
                </Link>
            </div>
        </main>
    )
}

export default LandMain