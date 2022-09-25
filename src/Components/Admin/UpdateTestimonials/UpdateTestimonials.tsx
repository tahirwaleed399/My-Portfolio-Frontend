import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetTestimonialQuery } from '../../../Redux/Testimonials/Testimonials';
import AdminContainer from '../../Shared/AdminContainer/AdminContainer';
import Loader from '../../Shared/Loader/Loader';
import TestimonialForm from '../../Shared/TestimonialForm/TestimonialForm';

const UpdateTestimonials = () => {

    const {_id}:any  = useParams();
    const { isLoading , data ,isSuccess} = useGetTestimonialQuery({_id} )

    React.useEffect(()=>{

    },[])
  return (
   <AdminContainer heading='Update Testimonials'>


<div>

{
    isLoading && <Loader></Loader>
}

{
    isSuccess && <TestimonialForm data={data.data}/>
}
</div>
   </AdminContainer>
  )
}

export default UpdateTestimonials