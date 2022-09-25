import React from 'react'
import { Link } from 'react-router-dom';
import { useGetProjectsQuery } from '../../../Redux/ProjectsApi/ProjectApi';
import Heading from '../../Shared/Heading/Heading';

import Project from './Project/Project'
const Projects = () => {
  const {data , isSuccess} = useGetProjectsQuery()
  return (
    <section id="projects">
   <Heading heading ='Projects' sectionNo={3} id='projects'></Heading>

{ isSuccess && [0,1,2].map((num:number)=>{
  console.log(data[num])
  return(
 
 <div key={num}>
 {
  data[num] &&  <Project  projectData={data[num]}></Project>
 }
 </div>
  )
})

}


<Link to='/projects'><button className="btn btn-outlined mx-auto block">Show All</button></Link>
    </section>
  )
}

export default Projects 