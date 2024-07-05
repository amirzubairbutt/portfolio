import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'; 
import "../Flipedcard/flipedCard.css";

export const Cards = ({service}) => {

  const [flipped ,setFlipped] = useState(false);

  const handleHire = () => {
    const recipient = "amirzubairbutt@gmail.com";
    const subject = "Interview call";
    const body = "Hey Amir we would like to meet you";
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  }
  
  useEffect (() => {

    const timoutId = setTimeout(() => {

        setFlipped(false)
    },5000)

   return () => clearTimeout(timoutId)

  },[flipped])


  return (
    <div className={`card ${flipped ? "flipped" : ""}`}
    onClick={() => {setFlipped(!flipped)}}
    >
        <div className="front">
            <FontAwesomeIcon icon={service.icon} className="mobile-icon"/>
            <p className='text-center'>{service.heading}</p>
        </div>

        <div className="back">
          <p className='text-center h6`'>{service.backHeading}</p>
          <ul className='card-list'>

            {service.list.map((text,index) => <li key={text+index}>{text}</li>)}
    
          </ul>
          <div className='small-line'> </div>
          <button className='hire-btn' onClick={handleHire}> HIRE ME!</button>
        </div>
    </div>
  )
}
