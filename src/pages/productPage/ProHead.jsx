import React from 'react';
import './proHead.css';
import { FaGamepad } from "react-icons/fa";

function ProHead() {
  return (
    <div className='pro-head'>
      <div className="pro-head-cont">
        <div className="pro-info-txt">
          <h1>Projects</h1>
        </div>
        <div className="pro-head-icon">
          <FaGamepad className='game-pad animate__animated animate__heartBeat animate__infinite	infinite' />
        </div>
      </div>
    </div>
  )
}

export default ProHead