import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./contactCard.css"

export const Contactcard = () => {
  return (
    <div className='contact-card'>
        <FontAwesomeIcon icon={faHouse} className="contact-icon"/> 
        <p className='lead'>Lahore, Pakistan</p>
    </div>
  )
}
