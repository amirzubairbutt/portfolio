import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./contactCard.css"
import {motion} from "framer-motion"
import { revealHiddenChildren } from '../../variants';

export const Contactcard = ({contact,variant}) => {
  return (
    <motion.div className='contact-card'
    variants={revealHiddenChildren}
    >
        <FontAwesomeIcon icon={contact.icon} className="contact-icon"/> 
        <p className='lead'>{contact.text}</p>
    </motion.div>
  )
}
