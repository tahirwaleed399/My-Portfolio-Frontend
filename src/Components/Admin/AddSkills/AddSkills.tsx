import { Button, IconButton, TextField } from '@mui/material'
import React, {  useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { BiAddToQueue } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useUpdateMutation } from '../../../Redux/UserApi/User'
import { getUser } from '../../../Redux/userSlice'
import uuidv4 from '../../../Util/uuid'
import AdminContainer from '../../Shared/AdminContainer/AdminContainer'
import Loader from '../../Shared/Loader/Loader'

const AddSkills = () => {

    const {user , isLoading }= useSelector((state:any)=>state.userState);
    const [skills , setSkills]=  useState(user?.skills);
    const [update, updateResult] = useUpdateMutation();
    const dispatch = useDispatch();
    React.useEffect(() => {
        toast.dismiss()
        if (updateResult.isLoading) {
          toast.loading("Updating the Timelines");
        }
        if (updateResult.isError) {
          toast.error(updateResult.error as any);
        }
        if (updateResult.isSuccess) {
          toast.success("SuccessFully Updated 🎉");
          dispatch(getUser() as any);
        }
      }, [updateResult,dispatch]);
    function handleChange(e : any , index : number){
        if(skills){
            let newSkills = [...skills];
            newSkills[index] =  {...newSkills[index] , [e.target.name] : e.target.value}
            setSkills(newSkills)
           }
    }

    
  function addSkill(){
    if(skills){
        setSkills([...skills , {uuid : uuidv4(), name :'' , percentage:10 , color :'#333333'} ])
    }
      }

      function deleteFromSkills(index : number){


        if(skills){

            let newSkills = [...skills];
            newSkills.splice(index , 1);
            setSkills([...newSkills]);
      
          }
      }

      function handleSubmit(e : React.SyntheticEvent){
        e.preventDefault();
        if(skills?.length === 0){
        toast.error('Skills Cannot Be Empty')
        }else{
            update({skills});
            dispatch(getUser() as any);
        }
        
          }
  return (
    <div>


<AdminContainer heading='Add Skills'>



<div className="addSkills">


<form onSubmit={handleSubmit}>
    
<IconButton color='success' aria-label="Add" size="large" onClick={addSkill}>
  <BiAddToQueue  />
</IconButton>
{
    isLoading && <Loader></Loader>
}

{
    user?.skills && skills.map((skill:any,index:number)=>{
        return (
        <div className="skillInput" key={skill._id ? skill._id : skill.uuid}>
    <TextField id="filled-basic" label="Skill" variant="filled" name='name' fullWidth value={skill.name}  onChange={(e)=>handleChange(e, index)} />
    <TextField id="filled-basic" label="Percentage" variant="filled" name='percentage' type='number' onChange={(e)=>handleChange(e, index)} fullWidth value={skill.percentage} />
    <input type="color" name='color' value={skill.color} onChange={(e)=>handleChange(e, index)} />

    <IconButton onClick={()=>deleteFromSkills(index)} color='error' aria-label="delete" size="large">
    <AiFillDelete  />
  </IconButton>
    </div>
        )
    })
    
}
<Button variant="contained" type="submit">
                Submit
              </Button>
</form>

</div>


</AdminContainer>

    </div>
  )
}

export default AddSkills