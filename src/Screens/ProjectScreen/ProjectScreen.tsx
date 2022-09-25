import React from 'react'
import Loader from '../../Components/Shared/Loader/Loader'
import ScrollToTop from '../../Components/Shared/ScrollTop/ScrollTop'
import Project from '../../Components/User/Projects/Project/Project'
import { useGetProjectsQuery } from '../../Redux/ProjectsApi/ProjectApi'

const ProjectScreen = () => {
  const {data , isSuccess , isLoading} = useGetProjectsQuery();

  return (
      <div className="allProjects">
        <ScrollToTop></ScrollToTop>
         <h1 className="text-7xl text-center text-white font-bold "> Projects</h1>
    {
      isSuccess && data.map((project:any)=>{
        return (
        <Project key={project._id} projectData={project}></Project>
      )
      })
    }
    {
      isLoading && <Loader/>
    }
    </div>
  )
}

export default ProjectScreen