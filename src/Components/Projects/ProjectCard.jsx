import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { LivePreview } from './LivePreview'

import {motion} from "framer-motion"

export const ProjectCard = ({project,variant}) => {
  return (
    <motion.div className="col-lg-6" variants={variant}>
          <div className="project-card">
            <div className='before-hover'>
                <img src={project.img} alt='Calculator' className='website' />
            </div>
            <div className='after-hover'>
                <p>{project.heading}</p>
                
                <ul className='project-ul'> 
                
                    {
                        project.features.map((feature,index) => <li key={feature+index}>        
                        <FontAwesomeIcon icon={faCaretRight} className="project-icons"/>{feature} </li>)
                    } 

                </ul>
                <div className='d-flex justify-content-center'>
                    {project.links.map((link,index) => <LivePreview link ={link} name={project.linkName[index]} key={link}/>)}


                </div>
                
            </div>
          </div>
     </motion.div>
  )
}
