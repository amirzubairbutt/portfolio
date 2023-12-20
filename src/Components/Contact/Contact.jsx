import React from 'react' 
import Slider from 'react-slick';
import { Contactcard } from './Contactcard';
import { contacts } from '../../data';
import {motion} from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./contactCard.css"
import { revealHidden, revealLeftToRight } from '../../variants';

export const Contact = () => {
  const settings = {

    slidesToShow:3,
    autoplay:true,
    autoplaySpeed:3000,
    responsive: [
       {
        breakpoint:1024,
        settings: {
        slidesToShow:2,
        slidesToScroll:1,
        speed:1000,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:true,
        dots:true,
        infinite:true,

      }
    },
         {
            breakpoint:600,
            settings: {
            slidesToShow:1,
            slidesToScroll:1,
            autoplay:true,
            autoplaySpeed:3000,
            dots:false,
            infinite: false,
          }
         }
    ]

}

const cardWrapper = {

  hidden : {opacity: 0},
  visible: {opacity: 1,
  transition: {
    duration: 1,
    delayChildren: 0.5,
    staggerChildren:0.08
    }
  }
}

const card = {

  hidden : {opacity: 0, x: -50},
  visible: {opacity: 1, x: 0,
  transition: {
    duration: 1,
    }
  }
}


  return (
    <section id="contact">
    <div>
      <motion.div
            initial = "hidden"
            whileInView="visible"
            variants={cardWrapper}
            viewport={{ once: true }}
      >
          <h1 className='display-5 text-center'
          >Get in Touch</h1>
          <div className="section-line"></div>
          <p className='text-center'>Let's build something together</p>
      </motion.div>
      
      


      <motion.div className='contact-card-deck'
      initial = "hidden"
      whileInView="visible"
      variants={revealHidden}
      viewport={{ once: true }}
      >
        <Slider {...settings}>
          {
            contacts.map(contact => <Contactcard contact={contact} variant = {card} key={contact.id}/>)
          }

        </Slider>
        

      </motion.div>
    </div>
  </section>
  )
}
