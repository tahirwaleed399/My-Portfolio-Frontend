import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDelTestimonialMutation, useGetTestimonialsQuery } from '../../../Redux/Testimonials/Testimonials'
import AdminContainer from '../../Shared/AdminContainer/AdminContainer';
import Loader from '../../Shared/Loader/Loader';

const AdminTestimonials = () => {
    const { data , isLoading , isSuccess } = useGetTestimonialsQuery();
    let [deleteTestimonial , updateResult] = useDelTestimonialMutation();
    React.useEffect(() => {
      toast.dismiss()
      if (updateResult.isLoading) {
        toast.loading("Deleting the Post");
      }
      if (updateResult.isError) {
        toast.error(updateResult.error as any);
      }
      if (updateResult.isSuccess) {
        toast.success("SuccessFully Deleted 🎉");
      }
    }, [updateResult]);
    function handleDelete(_id :string, image : {public_id : string , url  : string}){
      deleteTestimonial({_id,image});
    }
  return (
 <AdminContainer heading='Testimonials'>

{
    isLoading && <Loader></Loader>
}

<div className="flex flex-wrap justify-center items-center gap-8">
{
    isSuccess && data.data.map((testimonial:any)=>{
        return (
        <Card key={testimonial._id} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={testimonial.image.url}
          alt={testimonial.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {testimonial.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {testimonial.message}
          </Typography>
        </CardContent> 
        <CardActions>
        <Link to={`/admin/testimonials/${testimonial._id}`}><Button size="large" variant='contained' color='success'>Update</Button></Link>
        <Button size="large" onClick={()=>handleDelete(testimonial._id , testimonial.image)}>Delete</Button>
      </CardActions>
      </CardActionArea>
    </Card>
        )
    })
}
</div>

 </AdminContainer>

  )
}

export default AdminTestimonials