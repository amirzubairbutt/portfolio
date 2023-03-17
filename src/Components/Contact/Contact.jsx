import React from 'react' 
import Slider from 'react-slick';
import "./contact.css"
import { Contactcard } from './Contactcard';
import { ContactCardEmail } from './ContactCardEmail';
import { ContactCardPhone } from './ContactCardPhone';
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

  return (
    <section id="contact">
    <div>
      <h1 className='display-5 text-center'>Get in Touch</h1>
      <div className="section-line"></div>
      <p className='text-center'>Let's build something together</p>
      <div className='contact-card-deck'>
        <Slider {...settings}>
          <Contactcard/>
          <ContactCardEmail/>
          <ContactCardPhone/>
        </Slider>
        

      </div>
    </div>
  </section>
  )
}
