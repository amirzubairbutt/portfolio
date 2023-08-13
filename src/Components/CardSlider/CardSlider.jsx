import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./cardSlider.css"
import { services } from '../../data';
import { Cards } from './Cards';

export const CardSlider = () => {


  const settings = {

    slidesToShow:3,
    arrows:false,  
    autoplay:true,
    autoplaySpeed:2000,
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
        arrows:true,
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
            infinite: true,
            arrows:true,
          }
         }
    ]

}
  return (

    <div className="card-deck">
    <Slider {...settings}>

      {services.map(service => <Cards service ={service}/>)}

      
        {/* <FlipCardHtml />
        <FlipcardRes />
        <FlipCardReact />
        <FlipCardBackend/>
        <FlipCardDatabase/> */}
    </Slider>
    </div>
 
  )
}
