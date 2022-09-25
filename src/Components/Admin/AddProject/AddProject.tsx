import React from 'react'
import AdminContainer from '../../Shared/AdminContainer/AdminContainer'

import ProjectForm from '../../Shared/ProjectForm/ProjectForm';
const AddProject = () => {

  return (
<AdminContainer heading ='Add Project'>
 
  <div>
 
<ProjectForm formData={null}></ProjectForm>
  </div>

</AdminContainer>
  )
}

export default AddProject 