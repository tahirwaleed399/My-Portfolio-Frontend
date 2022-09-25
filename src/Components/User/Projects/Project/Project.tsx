import React from "react";
import { BsGithub, BsArrowUpLeft } from "react-icons/bs";
import { motion } from "framer-motion";
import { Project as ProjectInterface } from "../../../../Interfaces/Project";


const textAnimation = {
  initial: {
    y: 50,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const Project = ({projectData} : {projectData : ProjectInterface | any}) => {
  return (
    <motion.main
     
      id="project"
    >
 
      <motion.div
        initial={{
          // scale: 0,
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          // scale: 1,
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="projectImage"
      >
        <img src={projectData.projectImage.url} alt="space" />
      </motion.div>
      <div className="projectContent">
        <motion.h2
          variants={textAnimation}
          initial="initial"
          whileInView="animate"
          transition={{
            delay : 0.2
          }}
        >
          {
            projectData.name
          }
        </motion.h2>
        <motion.div
          variants={textAnimation}
          initial="initial"
          whileInView="animate"
          className="projectDescription"
          transition={{
            delay : 0.4
          }}
        >
          {
            projectData.description
          }
        </motion.div>
        <motion.div className="technologies">
          {
            projectData.technologies.map((tech:any)=>{
              return (
              <motion.span
              key={tech.tag}
            variants={textAnimation}
            initial="initial"
            whileInView="animate"
          >
           {tech.tag}
          </motion.span>
              )
            })
          }
         


        </motion.div>
        <motion.div className="actions">
          {
            projectData.githubLink.length > 5 && <a href={projectData.githubLink} target="_blank" rel="noopener noreferrer"><BsGithub className="cursor-pointer" /></a>
          }
         
{         projectData.liveLink.length > 5 &&  <a href={projectData.liveLink} target="_blank" rel="noopener noreferrer">  <BsArrowUpLeft className="cursor-pointer" /></a> }
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Project;
