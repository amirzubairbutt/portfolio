import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export const LivePreview = ({link,name}) => {

  return (
    <div className="live-btn"><Link to={link} target="_blank" className='p-2 lg-p-3'> 
                {name} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mx-1"/> 
                </Link>
    </div>
  )
}
