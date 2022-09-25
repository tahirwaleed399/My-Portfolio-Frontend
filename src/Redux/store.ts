import { configureStore } from '@reduxjs/toolkit'
import { userApi } from './UserApi/User'
import { projectApi } from './ProjectsApi/ProjectApi'
import userReducer, { getUser, isAuthenticatedUser } from './userSlice'
import { testimonialApi } from './Testimonials/Testimonials'
export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
    [testimonialApi.reducerPath]: testimonialApi.reducer,
    userState : userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware).concat(projectApi.middleware).concat(testimonialApi.middleware),
})

store.dispatch(getUser())
store.dispatch(isAuthenticatedUser())

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch