import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Project } from "../../Interfaces/Project";
import { backendUrl } from "../../Util/backendurl";

// Define a service using a base URL and expected endpoints
export const projectApi  :any= createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({ baseUrl: backendUrl }),
  tagTypes: ["project"],
  endpoints: (builder) => ({
    addProject: builder.mutation({
      query: (data: Project) => {
        return {
          url: "project",
          body: data,
          method: "POST",
          headers: { "content-type": "application/json" },
          credentials: "include",
        };
      },
      invalidatesTags:['project']

    }),   
    reorderProjects: builder.mutation({
      query: (data:any) => {
        return {
          url: "reorderProjects",
          body: data,
          method: "PUT",
          headers: { "content-type": "application/json" },
          credentials: "include",
        };
      },
      invalidatesTags:['project']

    }),
    updateProject: builder.mutation({
      query: (data: any) => {
        console.log(data)
        return {
          url: "project",
          body: data,
          method: "PUT",
          headers: { "content-type": "application/json" },
          credentials: "include",
        };
      },
      invalidatesTags:['project']

    }),
    // }),
    getProjects: builder.query<{success : boolean , data : Project[]}, void>({
      query: () => {
        return {
          url: "project",
          method: "GET",
          headers: { "content-type": "application/json" },
          credentials: "include",
        };
      },
      transformResponse : (responce : any)=>{
        let newResponce =  responce.data.map((data : Project,  index:number )=>{
          return {
            ...data ,
            id : index 
          }
        })
return newResponce;
      },
      providesTags:['project']
    }),  
    
    getProject: builder.query<{success : boolean , data : Project}, {_id : string }>({
      query: (data :{_id : string } ) => {
        return {
          url: "getSingleProject",
          method: "PUT",
          body : data,
          headers: { "content-type": "application/json" },
          credentials: "include",
        };
      },
    }),  
     deleteProject: builder.mutation<{success : boolean , data : Project[]},{_id : string , public_id : string }>({
      query: (data : {_id : string}) => {
        return {
          url: "project",
          body:data,
          method: "DELETE",
          headers: { "content-type": "application/json" },
          credentials: "include",
        };
      },
      invalidatesTags:['project']
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddProjectMutation, useGetProjectsQuery,useReorderProjectsMutation, useDeleteProjectMutation ,useUpdateProjectMutation , useGetProjectQuery} = projectApi;
