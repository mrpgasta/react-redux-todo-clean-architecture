import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

import Todo from "../../../domain/entities/Todo"
import TodoRepositoryImpl from "../../../data/repositories/TodoRepositoryImpl"
import TodoServiceImpl from "../../../domain/usecases/TodoService"
import { RootState } from "../store";

interface TodoState {
    todo: Array<Todo>
}

const initialState: TodoState = {
    todo: [],
}

const todoService = () => {
    const TodoRepo = new TodoRepositoryImpl()
    return new TodoServiceImpl(TodoRepo)
}

export const GetTodo = createAsyncThunk("todos/GetTodo", async () => {
    const todoRepo = new TodoRepositoryImpl();
    const todoService = new TodoServiceImpl(todoRepo);
    const todo = await todoService.GetTodos();
    return todo;
  })

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        createTodo: (state, action: PayloadAction<Todo>) => {

            state.todo.push(action.payload);

            const oldData = todoService().GetTodos()
            oldData.push(action.payload)
            todoService().SetTodo(oldData)

            return state;
        },
        deleteTodo: (state, action: PayloadAction<Todo>) => {

            state.todo = state.todo.filter(({ id }) => id !== action.payload.id)
            todoService().SetTodo(state.todo)

            return state;
        },
        updateTodo: (state, action: PayloadAction<Todo>) => {

            const updatedList = state.todo.map((payload) => {
                if (action.payload.id === payload.id) {
                    return new Todo(action.payload.id, action.payload.title, action.payload.done)
                }
                return payload
            })

            state.todo = updatedList;
            console.log(state.todo)

            return state;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(GetTodo.fulfilled, (state, action) => ({
          ...state,
          todo: action.payload,
        }))
      }
})

export const { createTodo, deleteTodo, updateTodo} = todoSlice.actions
export const todo = (state: RootState) => state.todoSlice.todo;
export default todoSlice.reducer
