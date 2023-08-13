
import "./projects.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import bookshoppc from "../../assets/images/bookshoppc.jpg";
import impactpc from "../../assets/images/impactpc.png"
import MERNTodoList from "../../assets/images/MERNTodoList.png"
import Exclusive from "../../assets/images/Exclusive.png"
import WhatsappWeb from "../../assets/images/WhatsappWeb.png"
import { LivePreview } from "./LivePreview";
import { links } from "../../data";



export const Projects = () => {
  return (
    <section id="projects">
    <h2 className='display-4 text-center'>Projects</h2>

      <div className='section-line' />
      <p className='text-center'>Here are my some of my projects</p>
      <div className="row g-2">


         {/* E-commerece Store */}
         <div className="col-lg-6">
          <div className="project-card">
            <div className='before-hover'>
                <img src={Exclusive} alt='Calculator' className='website' />
            </div>
            <div className='after-hover'>
                <p>E-commerece Store</p>
                
                <ul className='project-ul'> 
                
                {/* <p className='mb-4'>Extra Features</p> */}

                    <li><FontAwesomeIcon icon={faCaretRight} className="project-icons"/>Functionality with React</li>
                    <li><FontAwesomeIcon icon={faCaretRight} className="project-icons"/>State Managment with Redux</li>
                    <li><FontAwesomeIcon icon={faCaretRight} className="project-icons"/>Responsive Design </li>
                    <li><FontAwesomeIcon icon={faCaretRight} className="project-icons"/>Animations with CSS</li>

                </ul>

                <LivePreview link ={links.E_COMMERECE} name={"Live Preview"} />
            </div>
          </div>
        </div>

        {/* Todo List MERN */}
        <div className="col-lg-6">
          <div className="project-card">
            <div className='before-hover'>
                <img src={MERNTodoList} alt='Calculator' className='website' />
            </div>
            <div className='after-hover'>
                <p>MERN Empowered TodoList</p>
                
                <ul className='project-ul'> 
                
                {/* <p className='mb-4'>Extra Features</p> */}

                    <li><FontAwesomeIcon icon={faCaretRight} className="project-icons"/>State Managment with Redux Thunk </li>
                    <li><FontAwesomeIcon icon={faCaretRight} className="project-icons"/>User Authentication with JWT </li>
                    <li><FontAwesomeIcon icon={faCaretRight} className="project-icons"/>Data Managment in MongoDB</li>
                    <li><FontAwesomeIcon icon={faCaretRight} className="project-icons"/>Password encryption with bcrypt </li> 

                </ul>
                <LivePreview link ={links.MERN_Todo_LIST} name={"Live Preview"} />
            </div>
          </div>
        </div>

          {/* WhatsApp Clone */}
        <div className="col-lg-6">
          <div className="project-card">
            <div className='before-hover'>
                <img src={WhatsappWeb} alt='Calculator' className='website' />
            </div>
            <div className='after-hover'>
                <p>Whatsapp Web MERN Application</p>
                
                <ul className='project-ul'> 
                
                {/* <p className='mb-4'>Extra Features</p> */}

                    <li><FontAwesomeIcon icon={faCaretRight} className="project-icons"/>State Managment with Redux Thunk </li>
                    <li><FontAwesomeIcon icon={faCaretRight} className="project-icons"/>Google Authentication </li>
                    <li><FontAwesomeIcon icon={faCaretRight} className="project-icons"/>Data Managment in MongoDB</li>
                    <li><FontAwesomeIcon icon={faCaretRight} className="project-icons"/>Live chat with Socket.io </li> 

                </ul>
                <LivePreview link ={links.MERN_WHATSAPP} name={"Live Preview"} />
            </div>
          </div>
        </div>
        {/* Bookshop */}

      <div className="col-lg-6">
          <div className="project-card">
            <div className='before-hover'>
                <img src={bookshoppc} alt='Website' className='website' />
            </div>
            <div className='after-hover mt-lg-4 '>
                <p>BookShop having functionality of adding and removing products from cart
                </p>
                <ul className='project-ul'> 
                  <p className='mb-3'>Developed with</p>
                  <li><FontAwesomeIcon icon={faCaretRight} className="project-icons"/> Tailwind CSS </li>
                  <li><FontAwesomeIcon icon={faCaretRight} className="project-icons"/> React </li> 
                </ul>
                <LivePreview link ={links.BOOKSHOP} name={"Live Preview"} />
            </div>
          </div>
        </div>

        {/* Responsive Sites */}
      <div className="col-lg-6">
          <div className="project-card">
            <div className='before-hover'>
                <img src={impactpc} alt='Website' className='website' />
            </div>
            <div className='after-hover'>
                <p>Pixel Perfect Fully Responsive sites developed with </p>
                <ul className='project-ul'> 
                  <li><FontAwesomeIcon icon={faCaretRight} className="project-icons"/> CSS </li>
                  <li><FontAwesomeIcon icon={faCaretRight} className="project-icons"/> Bootstrap </li> 
                  <li> <FontAwesomeIcon icon={faCaretRight} className="project-icons"/>Tailwind CSS </li>
                </ul>
                <div className="d-flex justify-content-center gap-2">
                <LivePreview link ={links.IMPACT} name={"Impact"} />
                <LivePreview link ={links.MENTOR} name={"Mentor"} />

                </div>
                
            </div>
          </div>
        </div>

        {/* Calculator App */}
        {/* <div className="col-lg-6">
          <div className="project-card">
            <div className='before-hover'>
                <img src={calculator} alt='Calculator' className='calculator' />
            </div>
            <div className='after-hover'>
                <p>Calculator App developed in</p>
                
                <ul className='project-ul'> 
                  <li><FontAwesomeIcon icon={faCaretRight} className="project-icons"/> React </li>
                  <li><FontAwesomeIcon icon={faCaretRight} className="project-icons"/> Bootstrap </li>
                </ul>
                <div className="live-btn"><Link to="https://brawny-receptive-sorrel.glitch.me/" target="_blank">
                Live Preview <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mx-1"/> 
                </Link></div>
            </div>
          </div>
        </div> */}

        {/* Todo List */}
        {/* <div className="col-lg-6">
          <div className="project-card">
            <div className='before-hover'>
                <img src={todolist} alt='Calculator' className='website' />
            </div>
            <div className='after-hover'>
                <p>Todo list with CRUD Operations</p>
                
                <ul className='project-ul'> 
                
                <p className='mb-4'>Developed in </p>
                
                 <li><FontAwesomeIcon icon={faCaretRight} className="project-icons"/> React </li> 
                 <li><FontAwesomeIcon icon={faCaretRight} className="project-icons"/> Bootstrap </li> 
                </ul>
                <div className="live-btn"><Link to="https://todo-list-green-nine.vercel.app/" target="_blank">
                Live Preview <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mx-1"/> 
                </Link></div>
            </div>
          </div>
        </div> */}

        
      </div>

      
  </section>
  )
}
