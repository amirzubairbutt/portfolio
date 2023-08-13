import React from 'react'
import { CardSlider } from '../CardSlider/CardSlider'

export const Services = () => {
  return (
    <section id="services">
      <div className='text-center'>
      <h2 className='display-5'>What I can do</h2>
      <div className='section-line' />
    <p>I may not be perfect but surely i'm of some use</p>

      </div>
      <div className='mt-2'>

        
         <CardSlider/>
      </div>
  </section>
  )
}
