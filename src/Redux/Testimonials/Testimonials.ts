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
          headers: { "content-type": "application/json" },
          credentials: "include",
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
          headers: { "content-type": "application/json" },
          credentials: "include",
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
          headers: { "content-type": "application/json" },
          credentials: "include",
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
          headers: { "content-type": "application/json" },
          credentials: "include",
        };
      },
   


    }), 
    delTestimonial: builder.mutation({
      query: (data: { _id : string,image :{public_id : string , url  : string}}) => {
        return {
          url: "testimonial",
          method: "DELETE",
          body : data,
          headers: { "content-type": "application/json" },
          credentials: "include",
        };
      },
      invalidatesTags:['testimonial']
   


    }),

    

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useDelTestimonialMutation,useGetTestimonialQuery, useAddTestimonialMutation ,useUpdateTestimonialMutation, useGetTestimonialsQuery} = testimonialApi;
 