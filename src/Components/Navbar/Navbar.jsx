import {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faHouse, faAddressCard, faBriefcase, faAddressBook, faArrowRight, faLaptopFile, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";
import { faMoon } from '@fortawesome/free-solid-svg-icons';


export const Navbar = ({handleTheme,theme}) => {

    const location = useLocation();

    const [responsive,setResponsive] = useState(false);

    const responsiveNavbar = responsive ? "mobile" : "pc"; 

    useEffect(() => {
        const element = document.getElementById(location.hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          console.log(element);
        }
      }, [location]);

      const closeNavbar = () => {
        
        document.body.style.overflow = 'auto'

        setResponsive(false)
      }
    
      const openNavbar = () => {
    
        document.body.style.overflow = 'hidden'
    
        setResponsive(true)

      }

      const handleHire = () => {
        const recipient = "saadurrheman.dev@gmail.com";
        const subject = "Interview call";
        const body = "Hey Saad we would like to meet you";
        const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
        closeNavbar()
      }

      const handleDocumentClick = (e) => {

        if (!e.target.closest('ul')) {

          closeNavbar();
        }
      }

      // useEffect(() => {
      //   document.addEventListener('click', handleDocumentClick);
      //   return () => {
      //     document.removeEventListener('click', handleDocumentClick);
      //   };
      // }, [closeNavbar]);


  return (
    <div className='container-xxl navbar-container'>
      <button className='go-to-top'> <Link to="#home" >
        <FontAwesomeIcon icon={faArrowUp}  className="go-top-arrow"/>
      </Link>
      </button>
      <div className="navbar d-flex justify-content-between align-items-center py-1">
        <h4 className='order-2 order-md-1'>Saad ur Rehman</h4>
        <button 
        className={`navbar-btn ${responsiveNavbar} order-1`}>
        {!responsive ? <FontAwesomeIcon icon={faBars} onClick={openNavbar}/> : <FontAwesomeIcon icon={faXmark} onClick={closeNavbar} />}
        </button>
        <nav className= {`${responsiveNavbar} order-2`} onClick={handleDocumentClick}>
          <ul className={`navbar-ul ${responsiveNavbar} flex align-center`}>

              {responsive && <li className='name'> <h5>Saad ur Rehman</h5></li>}
              {responsive && <hr/>}
              {responsive && <li 
              class="form-check form-switch"
              >
                <FontAwesomeIcon icon={faMoon} className="icons mobile"/> Dark Mode <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                checked={theme === "light" ? false : true}
                onChange={handleTheme}
                /> </li>}
                {responsive && <hr/>}

              <li> {responsive && <FontAwesomeIcon icon={faHouse} className="icons" />} <Link onClick={closeNavbar}
              to="#home">Home</Link></li>

              <li> {responsive && <FontAwesomeIcon icon={faAddressCard} className="icons" />}<Link onClick={closeNavbar}
              to="#about">About</Link></li>

              <li> {responsive && <FontAwesomeIcon icon={faBriefcase} className="icons" />}<Link onClick={closeNavbar}
              to="#services">Services</Link></li>

              <li> {responsive && <FontAwesomeIcon icon={faLaptopFile} className="icons" />}<Link onClick={closeNavbar}
              to="#projects">Projects</Link></li>

              <li onClick={closeNavbar}
              >{responsive && <FontAwesomeIcon icon={faAddressBook} className="icons" />} <Link onClick={closeNavbar} 
              to="#contact">Contact</Link></li>

              <li className="resume"> <Link onClick={handleHire} 
              className = "resume" target="_blank">Hire Me{responsive && <FontAwesomeIcon icon={faArrowRight} className="icons" />}</Link></li>

              {!responsive && <li 
              className="form-check form-switch"
              >
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
              checked={theme === "light" ? false : true}
              onChange={handleTheme} 
              /> </li>}

          </ul>
        </nav>
        
      </div>
    </div>
  )
}
