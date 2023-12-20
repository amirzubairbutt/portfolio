import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { motion } from 'framer-motion'
import { revealHiddenChildren } from '../../variants'

export const Certification = ({title,by,link}) => {
  return (
    <motion.div className='mt-lg-3 mt-1'
    variants={revealHiddenChildren}
    >

        <a href={`${link}`} target='_blank' type='button' className='certificate-btn' rel='noreferrer'>
            <p><b className='display-6'>{by}</b> Certified</p>
            <p className='h3'>{title} <i className='lead'><FontAwesomeIcon icon={faUpRightFromSquare} /></i></p> 
        </a>
</motion.div>
  )
}
