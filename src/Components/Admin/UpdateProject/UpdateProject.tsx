import { Loader } from '@react-three/drei'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProjectQuery } from '../../../Redux/ProjectsApi/ProjectApi'
import AdminContainer from '../../Shared/AdminContainer/AdminContainer'
import ProjectForm from '../../Shared/ProjectForm/ProjectForm'
 
const UpdateProject = () => {
    const {_id } = useParams();
    let {isLoading , isSuccess , data} = useGetProjectQuery({_id} as any)
  return (
    <div>
<AdminContainer  heading ='Update Project' > 
 {
   isLoading && <Loader></Loader>
 }

 {
  isSuccess && data && <ProjectForm formData={data.data}></ProjectForm>
 }


</AdminContainer>


    </div>
  )
}

export default UpdateProject