import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'; 
import "./flipedCard.css";
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

export const FlipCardDatabase = () => {

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
            <FontAwesomeIcon icon={faDatabase} className="mobile-icon"/>
            <p className='text-center'>Database Managment</p>
        </div>

        <div className="back">
          <ul className='card-list'>
              <li>Setting up cloud Atlas MongoDB</li>
              <li>Perform CRUD operations</li>
              <li>Defining Schema in Mongoose</li>
              <li>Data Validation with Mongoose</li>
          </ul>
          <div className='small-line'> </div>
          <button className='hire-btn' onClick={handleHire}> HIRE ME!</button>
        </div>
    </div>
  )
}
