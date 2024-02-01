import React from 'react';
import './aboutHead.css';
import { FaGamepad } from "react-icons/fa";

function AboutHead() {
  return (
    <div className='abt-head'>
    <div className="abt-head-cont">
      <div className="abt-info-txt">
        <h1>About Me</h1>
      </div>
      <div className="abt-head-icon">
        <FaGamepad className='game-pad animate__animated animate__heartBeat animate__infinite	infinite' />
      </div>
    </div>
  </div>
  )
}

export default AboutHead