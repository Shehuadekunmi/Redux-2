import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from '../features/POSTS/PostsSlice'
import usersReducer from '../features/Users/UsersSlice'


export const store = configureStore({
    reducer: {
        posts: PostsReducer,
        users: usersReducer
    }
})