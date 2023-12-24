import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./home.css";
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import {motion} from "framer-motion"
import { revealHidden, revealLeftToRight } from '../../variants';
import myimage from '../../assets/images/3.png';

//import myimage from './images/1.jpg';

export const Home = () => {
   
  const string =  ["Crafting Experiences with React", "Redux State Master", "Responsive Designs Specialist", "Scalable MERN Applications",

                  ];

  const line = "WELCOME TO MY PORTFOLIO"

  const wrapper = {
    hidden : {opacity : 0},
    visible : {
      opacity : 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.09
      }
    }
  }

  const letter = {
    hidden: {opacity: 0,y: 50},
    visible: {
      opacity:1,
      y:0,
      transition: {

        duration: 0.01
      }
    }
  }

  const leftToRight = {
    hidden: {opacity: 0,x:-70},
    visible: {x:0, opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      delayChildren: 0.5,
      staggerChildren: 0.08,
     }
    },
  }


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
      <motion.div className="row g-2 w-100"
      initial = "hidden"
      whileInView = "visible"
      variants= {revealHidden}
      viewport={{ once: true }}
      >
        <motion.div className="col-lg-6 order-2 order-lg-1 home-left" variants={leftToRight}>

          <motion.p className='h3' 
          variants={wrapper}
          > 
          
          {line.split("").map((char,index) => {

            return (
              <motion.span
                  variants = {letter}
                  key={char + index}
                  >{char}

              </motion.span>
            )
          })}
          
          </motion.p>

          
          <p className='lead'>I am</p>
          <h1 className="display-3 mt-1"><b>Saad ur Rehman</b></h1>
          <h1 className="display-6 mt-1">MERN Stack Developer
          </h1>

          <p className='lead mt-2'><FontAwesomeIcon icon={faCaretRight} style={{color:"var(--second)"}}/> {string[index]}</p>
          <div className='home-icons mt-lg-3 mt-1 d-flex'>

            <a href="https://linkedin.com/in/saad-ur-rehman-586b95292" target="_blank" className='icon' rel='noreferrer noopener'> 
            <FontAwesomeIcon icon={faLinkedin}/> </a>
            <a href="https://github.com/saad9122" target="_blank" className='icon' rel='noreferrer noopener'> 
            <FontAwesomeIcon icon={faGithub}/> </a>

          </div>

        </motion.div>

        <motion.div className="col-lg-6 order-1 order-lg-2 d-flex justify-content-center justify-content-lg-end align-items-center"
        variants={revealLeftToRight}
        >
          
          <img className="myimage" src={myimage} alt="myimage"/>

        </motion.div>

      </motion.div>

  </section>
  )
}
