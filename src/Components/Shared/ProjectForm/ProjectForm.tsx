import React from 'react'
import TextField from '@mui/material/TextField';
import ReactTags from  '../../Shared/ReactTags/ReactTags';
import { Button, IconButton } from '@mui/material';
import { AiFillCamera } from 'react-icons/ai';
import ImageInput from '../ImageInput/ImageInput';
import { toast } from 'react-toastify';
import { Project } from '../../../Interfaces/Project';
import { useAddProjectMutation, useUpdateProjectMutation } from '../../../Redux/ProjectsApi/ProjectApi';
import { useNavigate } from 'react-router-dom';
const ProjectForm = ( {formData} : {formData : Project | any}) => {


  const navigate = useNavigate();
  let [tags , setTags] = React.useState<any[]>(!formData ? [] :  formData.technologies);
  let [image , setImage ] = React.useState<any>(!formData ? null : formData.projectImage.url );
  let [addProject , addResult]=useAddProjectMutation()
  let [updateProject , updateResult]=useUpdateProjectMutation()
  let [projectData , setProjectData ] = React.useState<any>(!formData ? {
    name : '',
    description :'',
    liveLink :'',
    githubLink :'',

  }:{
    name : formData.name,
    description :formData.description,
    liveLink :formData.liveLink,
    githubLink :formData.githubLink,

  });
  React.useEffect(() => {
    toast.dismiss()
    if (addResult.isLoading || updateResult.isLoading) {
      toast.loading("Updating the Post");
    }
    if (addResult.isError || updateResult.isError) {
      toast.error(addResult.error as any);
    }
    if (addResult.isSuccess || updateResult.isSuccess) {
      toast.success("SuccessFully Updated 🎉");
    navigate('/admin')
    }
  }, [addResult,updateResult]);

  function handleChange(e:any){

   setProjectData({...projectData ,  [e.target.name] : e.target.value})
  }


    function handleSubmit(e : React.SyntheticEvent){
e.preventDefault()
if(!tags){

  toast.error('Enter Technologies Please');
  return
}
if(!image ){
  toast.error('Please Upload Any Image Please');
  return 
}

if(!formData){
  let tempObj :Project = {
    ...projectData ,
    projectImage:image ,
    technologies : tags
  }
  
  
  addProject(tempObj);
  
  
}else {
  let tempObj = {
    ...projectData ,
    projectImage:image ,
    technologies : tags,
    lastPublicId :formData.projectImage.public_id
    ,
    _id : formData._id
  }
  updateProject(tempObj)
}
 

}
  return (
    <>
<div className="Projectform">




    <TextField id="filled-basic" value={projectData.name} onChange={(e)=>handleChange(e)} label="Name" name="name" variant="filled" fullWidth />
    <TextField id="filled-basic" value={projectData.description} onChange={(e)=>handleChange(e)} label="Description" name='description' variant="filled" fullWidth />
    <TextField id="filled-basic" value={projectData.githubLink} onChange={(e)=>handleChange(e)} label="Github Link" name='githubLink' variant="filled" fullWidth />
    <TextField id="filled-basic" value={projectData.liveLink} onChange={(e)=>handleChange(e)} label="Live Link" name='liveLink' variant="filled" fullWidth />

<ReactTags data={tags} setData={setTags as any}></ReactTags>


<ImageInput image={image} setImage={setImage}></ImageInput>

<Button variant='contained' color='primary' onClick={handleSubmit} >Add</Button>
</div>
    </>
  )
}

export default ProjectForm