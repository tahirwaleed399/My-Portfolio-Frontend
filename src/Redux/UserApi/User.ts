import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { backendUrl } from "../../Util/backendurl";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: backendUrl}),
  tagTypes: ['user'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data: { email: string; password: string }) => {
        return {
          url: "login",
          body: data,
          method: "POST",
        };
      },

    }),
    update: builder.mutation({
      query: (data: any) => {
        return {
          url: "updateMe",
          body: data,
          method: "PUT",
        };
      },
      invalidatesTags:['user' as any]
    }),
    
    getContacts: builder.query<any, void>({
      query: () => {
        return {
          url: "contact",
          method: "GET",
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation, useUpdateMutation,useGetContactsQuery } = userApi;
 