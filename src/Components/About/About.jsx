import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import myaboutimage from '../../assets/images/3.png';
import "./about.css";

export const About = () => {
  return (
    <section id="about">
      <div className='about-me'>
        
        <h1 className='display-5'>About me</h1>
        <div className='section-line'></div>
        <p> Get to know me</p>
      </div>
    
    <div className='row mt-3 about-me-data'>
    <div className="col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-start">
      <img class="about-img" src={myaboutimage} alt="Display" />
    </div>
    <div className="col-lg-6 mt-lg-2 mt-3 about-me-right">
      <p className='lead'>Who am i?</p>
      <p className='mt-lg-2 mt-3'><b>I am Saad ur Rehman, A Front-End Developer, 
        Expert in resposive designs, have wroking experince in React.js Technology</b> </p>
      <p className='mt-lg-2 mt-3'> I am Fresh Fornt-End React Developer who wants to work in professional environment. I have work experince in 
      React and JavaScript. I can design fully responsive sites with Bootstrap and tailwind CSS.I am self-driven and
      self-motivated and ready to accept challenges.
        </p>
         <div className="line"> </div>
         <div>
          <p>Technologies i have worked with</p>
          <ul className='about-me-list mt-3 mt-lg-2'>
            <li><FontAwesomeIcon icon={faCaretRight} className="about-me-icons"/> HTML</li>
            <li><FontAwesomeIcon icon={faCaretRight} className="about-me-icons"/>CSS</li>
            <li><FontAwesomeIcon icon={faCaretRight} className="about-me-icons"/>JS</li>
            <li><FontAwesomeIcon icon={faCaretRight} className="about-me-icons"/>BS5</li>
            <li><FontAwesomeIcon icon={faCaretRight} className="about-me-icons"/> React</li>
          </ul>
          <div className="line"></div>
          <div>
            <div className="row g-3 about-me-info">
              <div className='col-lg-6'><p><b>Name:</b> Saad ur Rehman</p></div>
              <div className='col-lg-6'><p><b>Email:</b> Saad.ur922@gmail.com</p></div>
            </div>
            <div className="row hide-for-mobile mt-2">
            <div className='col-lg-6'><p><b>Age:</b> 25</p></div>
              <div className='col-lg-6'><p><b>From:</b> Lahore,PK</p></div>
            </div>
          </div>
         </div>
    </div>
    </div>
  </section>
  )
}
