import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'; 
import "./flipedCard.css";
export const FlipedCard = () => {

  const [flipped ,setFlipped] = useState(false);

  const handleHire = () => {
    const recipient = "someone@example.com";
    const subject = "Hello there";
    const body = "Hi%0D%0A%0D%0ARegards";
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  }
  
  return (
    <div className={`card ${flipped ? "flipped" : ""}`}
    onClick={() => {setFlipped(!flipped)}}
    >
        <div className="front">
            <FontAwesomeIcon icon={faMobile} className="mobile-icon"/>
            <p>Mobile App Development</p>
        </div>

        <div className="back">
          <p>Android App Development via Flutter</p>
          <ul className='card-list'>
              <li>Splash Screen</li>
              <li>Fire Base</li>
              <li>REST APIs</li>
              <li>Mpas navigation and more!</li>
          </ul>
          <div className='small-line'> </div>
          <button className='hire-btn' onClick={handleHire}> HIRE ME!</button>
        </div>
    </div>
  )
}
