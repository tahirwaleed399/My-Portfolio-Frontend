import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { backendUrl } from "../../Util/backendurl";

// Define a service using a base URL and expected endpoints
export const testimonialApi = createApi({
  reducerPath: "testimonialApi",
  baseQuery: fetchBaseQuery({ baseUrl: backendUrl }),
  tagTypes: ['testimonial'],
  endpoints: (builder) => ({
    getTestimonials: builder.query<any, void >({
      query: () => {
        return {
          url: "testimonial",
          method: "GET",
        };
      },
providesTags:['testimonial']
    }),  
    
    addTestimonial: builder.mutation({
      query: (data: { name : string , message : string , image :{public_id : string , url : string}}) => {
        return {
          url: "testimonial",
          body: data,
          method: "POST",
        };
      },
      invalidatesTags:['testimonial']

    }),  updateTestimonial: builder.mutation({
      query: (data: {_id : string , name : string , message : string , image :{public_id : string , url : string}}) => {
        console.log(data)
        return {
          url: "testimonial",
          body: data,
          method: "PUT",
        };
      },
      invalidatesTags:['testimonial']

    }),
    
    getTestimonial: builder.query<any , {_id : string}>({
      query: (data: { _id : string}) => {
        console.log("getTestimonial?id="+data._id)
        return {
          url: "getTestimonial?id="+data._id,
          method: "GET",
        };
      },
   


    }), 
    delTestimonial: builder.mutation({
      query: (data: { _id : string,image :{public_id : string , url  : string}}) => {
        return {
          url: "testimonial",
          method: "DELETE",
          body : data
        };
      },
      invalidatesTags:['testimonial']
   


    }),

    

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useDelTestimonialMutation,useGetTestimonialQuery, useAddTestimonialMutation ,useUpdateTestimonialMutation, useGetTestimonialsQuery} = testimonialApi;
 