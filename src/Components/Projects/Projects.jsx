
import "./projects.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


import calculator from "../../assets/images/Calculator.png";
import todolist from "../../assets/images/todolistpc.png"
import bookshoppc from "../../assets/images/bookshoppc.jpg";
import impactpc from "../../assets/images/impactpc.png"


export const Projects = () => {
  return (
    <section id="projects">
    <h2 className='display-4 text-center'>Projects</h2>

      <div className='section-line' />
      <p className='text-center'>Here are my some of my projects</p>
      <div className="row g-2">
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
                <div className="live-btn"><Link to="https://bookshop-delta-umber.vercel.app/" target="_blank">
                Live Preview <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mx-1"/> 
                </Link></div>
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
                <div className="live-btn"><Link to="https://impact2-8fhz5moq9-saad9122.vercel.app/" target="_blank">
                Impact <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mx-1"/> 
                </Link></div>
                <div className="live-btn"><Link to="https://mentor-github-io.vercel.app/" target="_blank">
                Mentor <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mx-1"/> 
                </Link></div>

                </div>
                
            </div>
          </div>
        </div>

        {/* Calculator App */}
        <div className="col-lg-6">
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
        </div>

        {/* Todo List */}
        <div className="col-lg-6">
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
        </div>

      </div>
  </section>
  )
}
