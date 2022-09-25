import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Project } from '../../../../Interfaces/Project'
import { useDeleteProjectMutation } from '../../../../Redux/ProjectsApi/ProjectApi';
import { toast } from 'react-toastify';
import Modal from '../../../Shared/Modal/Modal';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({project} : any) => {
    const [deleteProject , resultDelete] = useDeleteProjectMutation();
    const [open, setOpen] = React.useState(false);
    const [id, setId] = React.useState('');
    const [public_id, setPublic_Id] = React.useState('');
    const navigate= useNavigate();
  React.useEffect(() => {
    toast.dismiss()
    if (resultDelete.isLoading) {
      toast.loading("Deleting the Project");
    }
    if (resultDelete.isError) {
      toast.error(resultDelete.error as any);
    }
    if (resultDelete.isSuccess) {
      toast.success("SuccessFully Deleted 🎉");
      
    }
  }, [resultDelete]);
    function handleDelete( ){
        deleteProject({_id : id , public_id : public_id });
    }

    function confirm(_id : string , public_id:string ){
        console.log('confirm');
        setId(_id)
        setPublic_Id(public_id)
        setOpen(true )
    }
  return (
 

    <>
<Card sx={{ maxWidth: 230 }}>
      <CardMedia
        component="img"
        height="140"
        image={`${project.projectImage.url}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">{project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" variant='contained' color='success' onClick={()=>navigate(`update/${project._id}`)}>Update</Button>
        <Button size="medium" color='error' onClick={()=>confirm(project._id , project.projectImage.public_id)}>Delete</Button>
      </CardActions>
    </Card>

    <Modal heading ='Deleting This Project' open={open} onClose={()=>setOpen(false)}>

        <div>
          <div className="flex my-4 justify-center gap-6 ">
          <Button color ='success' variant='contained' onClick={()=>setOpen(false)} >Close </Button>
          <Button color ='error'  variant='contained'  onClick={()=>handleDelete()}>Delete</Button>
          </div>
        </div>
    </Modal>
  </>
  )
}

export default ProjectCard