import "./projects.css"
import { projects } from "../../data";
import { ProjectCard } from "./ProjectCard";
import {motion, wrap} from "framer-motion"



export const Projects = () => {

  const wrapper = {
    hidden : {opacity: 0},
    visible : {opacity: 1,
    transition: {
      duration: 1,
      delayChildren:0.5,
      staggerChildren: 0.4
      }
    }
  }

  const popProject = {
    hidden: {scale: 0},
    visible: {scale: 1, 
      transition: {
        type: "spring",
        damping: 12
      }
    }
  }
  return (
    <section id="projects">
      <motion.div
      initial = "hidden"
      whileInView="visible"
      variants={wrapper}
      viewport={{ once: true }}

      >
          <motion.div variants={wrapper}>
              <h2 className='display-4 text-center'>Projects</h2>
              <div className='section-line' />
              <p className='text-center'>Here are my some of my projects</p>
          </motion.div>

          <motion.div className="row g-2" variants={wrapper}>

               {projects.map (project => <ProjectCard project= {project} key ={project.id} variant = {popProject}/>)}

          </motion.div>
      </motion.div>
    

      
  </section>
  )
}
