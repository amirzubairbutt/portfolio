import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram , faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./home.css";
import myimage from '../../assets/images/3.png';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';


//import myimage from './images/1.jpg';

export const Home = () => {
   
  const string =  ["Front-End Developer", "Responsive Designs", "React.js"];

  const [index, setIndex] = useState(0);

  useEffect (() => {

      const timeout = setTimeout( () => {

        setIndex((index+1) % string.length)

        } ,2500
      );
      return () => clearTimeout(timeout);

    }, [index,string.length]
  );

  return (
    <section id="home">
      <div className="row g-2">
        <div className="col-lg-6 order-2 order-lg-1 home-left">
          <p className='lead typing-effect'> WELCOME TO MY PORTFOLIO</p>
          <h1 className='display-2'>Saad</h1>
          <h1 className="display-3"><b>ur Rehman</b></h1>
          <p className='lead mt-2'><FontAwesomeIcon icon={faCaretRight} style={{color:"var(--second)"}}/> {string[index]}</p>
          <div className='home-icons mt-lg-3 mt-1'>
            {/* <Link to="#" className='icon'> <FontAwesomeIcon icon={faFacebook}/> </Link>
            <Link to="#" className='icon'> <FontAwesomeIcon icon={faInstagram}/> </Link> */}
            <Link to="https://github.com/saad9122" target="_blank" className='icon'> <FontAwesomeIcon icon={faGithub}/> </Link>
            {/* <Link to="#" className='icon'> <FontAwesomeIcon icon={faLinkedinIn}/> </Link>
            <Link to="#" className='icon'> <FontAwesomeIcon icon={faTwitter}/> </Link> */}
          </div>
        </div>

        <div className="col-lg-6 d-flex order-1 order-lg-2 justify-content-center justify-content-lg-end">
        <img className="myimage" src={myimage} alt="myimage"/>
        </div>

      </div>

  </section>
  )
}
