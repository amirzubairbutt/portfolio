import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'; 
import "./flipedCard.css";

export const FlipCardHtml = () => {

  const [flipped ,setFlipped] = useState(false);
  const handleHire = () => {
    const recipient = "saad.u922@gmail.com";
    const subject = "Hey Saad";
    const body = "Would you like to join us";
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  }
  
  return (
    <div className={`card ${flipped ? "flipped" : ""}`}
    onClick={() => {setFlipped(!flipped)}}
    >
        <div className="front">
            <FontAwesomeIcon icon={faCode} className="mobile-icon"/>
            <p className='text-center'>Design to Code</p>
        </div>

        <div className="back">
          <p>Pixel perfect Design to Code 
            including</p>
          <ul className='card-list'>
              <li>Animations</li>
              <li>Image Slide Shows</li>
              <li>Sliders</li>
              <li>Forms</li>
          </ul>
          <div className='small-line'> </div>
          <button className='hire-btn' onClick={handleHire}
          > HIRE ME!</button>
        </div>
    </div>
  )
}
