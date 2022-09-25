import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import Testimonial from './Testimonial/Testimonial'

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
import Heading from '../../Shared/Heading/Heading';
import { useGetTestimonialsQuery } from '../../../Redux/Testimonials/Testimonials';
const Testimonials = () => {
  
  let {data , isSuccess}=useGetTestimonialsQuery()
  return (
    <>
    
    <section id="testimonials">
       <Heading  heading='What Others Say' sectionNo={6} id='testimonial' ></Heading> 

      <div className="slider mt-9">
        {
          isSuccess &&     <Swiper autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }} slidesPerView={'auto'}     modules={[Autoplay]} className="mySwiper">
            {
              data.data.map((testimonial:any)=>(
              
              <SwiperSlide key={testimonial._id}> <Testimonial data={testimonial}></Testimonial></SwiperSlide>
              ))
            }
        </Swiper>
        }
  
      </div>
    </section>
    </>
  )
}

export default Testimonials