import { faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'; 
import "./flipedCard.css";

export const FlipCardReact = () => {

  const [flipped ,setFlipped] = useState(false);

  const handleHire = () => {
    const recipient = "amirzubairbutt@gmail.com";
    const subject = "Interview call";
    const body = "Hey Amir we would like to meet you";
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  }
  
  return (
    <div className={`card ${flipped ? "flipped" : ""}`}
    onClick={() => {setFlipped(!flipped)}}
    >
        <div className="front">
            <FontAwesomeIcon icon={faReact} className="mobile-icon"/>
            <p className='text-center'>Functionality with React</p>
        </div>

        <div className="back">
          <p>Have sound Knowledge of</p>
          <ul className='card-list'>
              <li>Routing</li>
              <li>Hooks</li>
              <li>Redux</li>
              <li>CRUD operations</li>
    
          </ul>
          <div className='small-line'> </div>
          <button className='hire-btn' onClick={handleHire}> HIRE ME!</button>
        </div>
    </div>
  )
}
