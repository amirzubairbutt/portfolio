import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import myaboutimage from '../../assets/images/3.png';
import "./about.css";
import {motion} from "framer-motion"
import { contacts } from '../../data';
import { certificate } from '../Home/homeData';
import { Certification} from "../Home/Certification"
import { revealHidden } from '../../variants';
export const About = () => {

  const listitems = ["React","Tailwind CSS", "Bootstrap", "Redux Thunk", "Framer Motion", "Node.js","Express.js","MongoDB"]


  const ulVariant = {
    hidden : {opacity : 0},
    visible : {
      opacity : 1,
      transition: {
        type: "spring",
        delayChildren: 0.5,
        staggerChildren: 0.08
      }
    }
  }

  const livariant = {
    hidden: {opacity: 0,x: -70},
    visible: {
      opacity:1,
      x:0,
    }

  }

  const variant = {

    hidden : {opacity: 0,x:-20},
    visible : {opacity:1, x : 0,
    transition:{
      type:"spring",
      damping: 25,
      velocity: 2,
      delay: 0.5,
      delayChildren: 0.8,
      staggerChildren: 0.01
    }}
  }

  return (
    <motion.section id="about" className='overflow-hidden'
    >
      <motion.div className='about-me'
      initial = "hidden"
      whileInView= "visible"
      variants={variant}
      viewport={{ once: true }}
      >
        
        <h1 className='display-5'>About me</h1>
        <div className='section-line'></div>
        <p> Get to know me</p>
      </motion.div>
    
    <motion.div className='row mt-3 about-me-data gap-4 gap-lg-0'
        initial = "hidden"
        whileInView= "visible"
        variants={variant}
        viewport={{ once: true }}
    >
    <motion.div className="col-lg-6 d-flex flex-column align-items-center justify-content-center justify-content-lg-start
    order-2 order-lg-1
    " 
    variants={variant}>
                <motion.div className='d-flex flex-column align-item-center justify-content-evenly gap-4 gap-lg-2'
            initial = "hidden"
            whileInView = "visible"
            variants= {revealHidden}
            viewport={{ once: true }}
          >

              {
                certificate.map(data => <Certification title={data.title} by={data.by} link={data.link}  key={data.id}/>)
              } 

          </motion.div>
    </motion.div>
    <motion.div className="col-lg-6 mt-lg-2 mt-3 about-me-right order-1 order-lg-2" variants={variant}>
      <motion.p className='lead' variants={variant}>Who am i?</motion.p>
      <motion.p className='mt-lg-2 mt-3' variants={variant}><b>I am Amir Zubair Butt, A Self Taught Mobile App & React Native Developer.</b> </ motion.p>
      <motion.p className='mt-lg-3 mt-3 ' variants={variant}> I am  Proficient in MERN stack development, with a self-taught journey 
      showcasing dedication, commitment, and a strong passion for learning.I am proficient in creating responsive and visually appealing designs,
      skilled in both front-end and back-end development,experienced in utilizing Redux for efficient state management, 
      enabling smooth data flow and enhanced application performance.
      </motion.p>
         <div className="line"> </div>
         <div>
          <p>Technologies i have worked with</p>
          <motion.ul className='about-me-list mt-3 mt-lg-3 d-flex flex-wrap'
          variants={ulVariant}

          >
            {
              listitems.map((item,index) => {
               return  <motion.li key={item + index} className='mt-1'
               variants={livariant}
               ><FontAwesomeIcon icon={faCaretRight} className="about-me-icons"/> {item}</motion.li>
              })
            }

          </motion.ul>    

          <div className="line"></div>
          <div>
            <div className="row g-3 about-me-info">
              <div className='col-lg-6'><p><b>Name:</b> Amir Zubair Butt</p></div>
              <div className='col-lg-6'><p><b>Email:</b> {contacts[1].text}</p></div>
            </div>
            <div className="row hide-for-mobile mt-3">
            <div className='col-lg-6'><p><b>Age:</b> 25</p></div>
              <div className='col-lg-6'><p><b>From:</b> Lahore,PK</p></div>
            </div>
          </div>
         </div>
    </motion.div>
    </motion.div>
  </motion.section>
  )
}
