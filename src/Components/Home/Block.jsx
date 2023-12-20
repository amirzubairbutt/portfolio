import React from 'react'
import { motion } from 'framer-motion'

export const Block = ({text,color,background}) => {
  return (

    <motion.div className='px-5 py-4' style={{backgroundColor:`${background}`,color:`${color}`}}>

        <h1 className='text-center'>{text}</h1>

     </motion.div>
  )
}
