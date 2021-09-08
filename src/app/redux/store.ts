import { configureStore } from "@reduxjs/toolkit"

import throttle from 'lodash.throttle';
import todoSlice from "./todo/todo.slice"
import TodoRepositoryImpl from "../../data/repositories/TodoRepositoryImpl";

const persistedState = new TodoRepositoryImpl().GetTodos();

export const store = configureStore({
    reducer: {
        todoSlice,
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false,
    })
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
