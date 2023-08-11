import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'; 
import "./flipedCard.css";
import { faServer } from '@fortawesome/free-solid-svg-icons';

export const FlipCardBackend = () => {

  const [flipped ,setFlipped] = useState(false);

  const handleHire = () => {
    const recipient = "saad.ur922@gmail.com";
    const subject = "Interview call";
    const body = "Hey Saad we would like to meet you";
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  }
  
  return (
    <div className={`card ${flipped ? "flipped" : ""}`}
    onClick={() => {setFlipped(!flipped)}}
    >
        <div className="front">
            <FontAwesomeIcon icon={faServer} className="mobile-icon"/>
            <p className='text-center'>Serer side coding</p>
        </div>

        <div className="back">
          <p className='text-center'>Adept in</p>
          <ul className='card-list'>
              <li>Creating and Handling Routes</li>
              <li>Custom Middlewares</li>
              <li>User Authenterication</li>
              <li>Error Handling</li>
              
    
          </ul>
          <div className='small-line'> </div>
          <button className='hire-btn' onClick={handleHire}> HIRE ME!</button>
        </div>
    </div>
  )
}
