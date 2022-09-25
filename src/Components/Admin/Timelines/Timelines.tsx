import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userState } from '../../../Interfaces/UserState'
import Loader from '../../Shared/Loader/Loader';
import TextField from '@mui/material/TextField';
import AdminContainer from '../../Shared/AdminContainer/AdminContainer';
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button";
import {BiAddToQueue} from 'react-icons/bi'
import { IconButton } from '@mui/material';
import uuidv4 from '../../../Util/uuid';
import { useUpdateMutation } from '../../../Redux/UserApi/User';
import { getUser } from '../../../Redux/userSlice';
import { toast } from 'react-toastify';
import { AiFillDelete } from 'react-icons/ai';
const Timelines = () => {
const dispatch = useDispatch()
  const {user , isLoading , isSuccess } : userState= useSelector((state:any)=>state.userState);
  const [timelines , setTimelines]=  useState(user?.timeLine)
  const [update, updateResult] = useUpdateMutation();
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
  }, [updateResult]);
  function handleChange(e:any,index:number){
 if(timelines){
  let newTimeline = [...timelines];
  newTimeline[index] =  {... newTimeline[index] , [e.target.name] : e.target.value}
setTimelines(newTimeline)
 }
   
  }


  function handleSubmit(e : React.SyntheticEvent){
e.preventDefault();
if(timelines?.length === 0){
toast.error('Time Lines Cannot Be Empty')
}else{
  let timeLine = timelines;
update({timeLine});
}

  }

  function deleteFromTimeline(index : number){
    if(timelines){

      let newTimeline = [...timelines];
      newTimeline.splice(index , 1);
      setTimelines([...newTimeline]);

    }

  }



  function addTimeline(){
if(timelines){
  setTimelines([...timelines , {uuid : uuidv4(), title :'' , year:''} ])
}
  }
  return (
  <AdminContainer heading={'Timelines'}>

<div>

<IconButton color='success' aria-label="Add" size="large" onClick={addTimeline}>
  <BiAddToQueue  />
</IconButton>
{
  isLoading && <Loader></Loader>
}
{
  isSuccess && <>
  
<form onSubmit={handleSubmit}>

{
timelines?.length === 0 ? <h1>No Time Line Available</h1>:timelines?.map((timeline, index)=>{

  return <div className='timelineFields' key={timeline._id ? timeline._id : timeline.uuid}>
  
  <TextField value={timeline.title} name='title' onChange={(e:any)=>handleChange(e,index)}  id="filled-basic" label="Title" variant="filled" fullWidth />
  <TextField value={timeline.year}  name='year' onChange={(e:any)=>handleChange(e,index)} id="filled-basic" label="Year" variant="filled"  fullWidth/>
  <IconButton onClick={()=>deleteFromTimeline(index)} color='error' aria-label="delete" size="large">
    <AiFillDelete  />
  </IconButton>
  <Divider className='my-10'/>
  </div>
  })
}

<Button variant="contained" type="submit">
                Submit
              </Button>
</form>
  
  </>
}



</div>
  </AdminContainer>
  )
}

export default Timelines 