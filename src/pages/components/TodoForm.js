import React, { useState, useEffect } from 'react'
import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector, useAppDispatch } from "app/redux/hooks";
import { createTodo, GetTodo } from "app/redux/todo/todo.slice";
import TodoList from './TodoList';


const TodoForm = () => {
    const [title, setTitle] = useState("")
    const dispatch = useAppDispatch();
    const todos = useAppSelector((state) => state.todoSlice.todo)

    useEffect(() => {
        dispatch(GetTodo());
        console.log(todos);
    }, [])

    const onClick = (event) => {
        event.preventDefault()

        const todo = {
            id: nanoid(),
            title,
            isDone: false
        };

        dispatch(createTodo(todo))

        setTitle("")
    }

    return (
        <div>
            <form className='todo-form'>
                <label value={title} onChange={e => setTitle(e.target.value)}>
                    <input className='todo-input edit' placeholder='Enter Task'/>
                    <button onClick={onClick} className='todo-button save' >Submit</button>
                </label>
            </form>

            <div className="table">
                {todos.map((todo) => (
                    <TodoList key={todo.id} todo={todo} />
                ))}
            </div>
        </div>
    );
}

export default TodoForm;