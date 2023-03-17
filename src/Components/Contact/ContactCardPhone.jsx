import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./contactCard.css"

export const ContactCardPhone = () => {
  return (
    <div className='contact-card'>
        <FontAwesomeIcon icon={faPhone} className="contact-icon"/> 
        <p className='lead' >(+92)306-9122722</p>
    </div>
  )
}
