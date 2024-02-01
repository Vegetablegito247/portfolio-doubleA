import React from 'react';
import './contactHead.css';
import { FaGamepad } from "react-icons/fa";

function ContactHead() {
  return (
    <div className='con-head'>
      <div className="con-head-cont">
        <div className="con-info-txt">
          <h1>Contact Me</h1>
        </div>
        <div className="con-head-icon">
          <FaGamepad className='game-pad animate__animated animate__heartBeat animate__infinite	infinite' />
        </div>
      </div>
    </div>
  )
}

export default ContactHead