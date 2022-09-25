import React from 'react'
import AdminContainer from '../../Shared/AdminContainer/AdminContainer'
import TestimonialForm from '../../Shared/TestimonialForm/TestimonialForm'

const AdminTestimonial = () => {
  return (
 <AdminContainer heading='Add Testimonial'>
    <div>
        <TestimonialForm data={null}></TestimonialForm>
    </div>
 </AdminContainer>
  )
}
 
export default AdminTestimonial
