import React from 'react';
import './proMain.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProMain() {
  const projectBuild = useSelector(state => state.portfolio.projects);

  return (
    <div className='projects-main'>
      <div className="project-main-title">
        <h3>Immerse Yourself in the Artistry</h3>
        <p>
          And embark on a journey through my meticulously crafted webpages.
        </p>
      </div>
      <div className="project-body">
        {
          projectBuild.map((projects, ind) => (
            <div key={ind} data-aos="zoom-in-right" className="project-main">
              <div className="project-list">
                <div className="project-id">
                  <h1>{ind < 9 ? `0${ind + 1}` : ind + 1}</h1>
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
    </div>
  )
}

export default ProMain