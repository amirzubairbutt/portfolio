import React from 'react'
import { CardSlider } from '../CardSlider/CardSlider'

import {motion} from "framer-motion"

export const Services = () => {

  const variant = {

    hidden : {opacity: 0},
    visible: {opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.5,
      staggerChildren:0.08
      }
    }
  }
  
  return (
    <section id="services">

      <motion.div 
      initial = "hidden"
      whileInView= "visible"
      variants={variant}
      viewport={{ once: true }}
      >

        <motion.div variants={variant}>
          <div className='text-center'>
              <h2 className='display-5'>What I can do</h2>
              <div className='section-line' />
              <p>I may not be perfect but surely i'm of some use</p>
          </div>

            <motion.div className='mt-2' variants={variant}>
            
                <CardSlider/>

            </motion.div>
        </motion.div>
        

      </motion.div>

      

  </section>
  )
}
