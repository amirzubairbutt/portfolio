import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./contactCard.css"
import {motion} from "framer-motion"

export const Contactcard = ({contact,variant}) => {
  return (
    <motion.div className='contact-card'
    variants={variant}
    >
        <FontAwesomeIcon icon={contact.icon} className="contact-icon"/> 
        <p className='lead'>{contact.text}</p>
    </motion.div>
  )
}
