import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./contactCard.css"

export const ContactCardEmail = () => {
  return (
    <div className='contact-card'>
        <FontAwesomeIcon icon={faEnvelope} className="contact-icon"/> 
        <p className='lead'>amirzubairbutt@gmail.com</p>
    </div>
  )
}
