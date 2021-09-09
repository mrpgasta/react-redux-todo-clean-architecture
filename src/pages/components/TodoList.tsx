import React from 'react'
import { useAppDispatch } from "app/redux/hooks";
import { useState } from "react";
import { deleteTodo, GetTodo, updateTodo } from "app/redux/todo/todo.slice";
import Todo from 'domain/entities/Todo';

const TodoList = ({ todo }) => {

    const [newTitle, setNewTitle] = useState(todo.title);
    const [onEdit, setOnEdit] = useState(false);

    const handleUpdate = (todo) => {
        const updatedTodo = {
            id: todo.id,
            title: newTitle,
            done: todo.done
        }

        dispatch(updateTodo(updatedTodo));
        setOnEdit(false);
    }

    const dispatch = useAppDispatch();

    if (onEdit) {
        return (
            <div
            className='todo-edit'
            >
                <input
                    placeholder='Update your Task'
                    className='todo-input edit'
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <button onClick={() => handleUpdate(todo)} className='todo-button edit'>
                    Save
                </button>
                <button onClick={() => setOnEdit(false)} className='todo-button cancel'>
                    Cancel
                </button>
            </div>
        )
    } else {
        return (
            <div
                className={todo.done ? 'todo-row complete' : 'todo-row'}
                key={todo.id}
            >
                <div key={todo.id}>
                    {todo.title}
                </div>
                <div className='icons'>
                    <button onClick={() => setOnEdit(true)} className='todo-button edit' >EDIT</button>
                    <button onClick={() => dispatch(deleteTodo(todo))} className='todo-button delete'>DELETE</button>
                    <input
                        type="checkbox"
                        checked={todo.done}
                        onChange={() => { }}
                        onClick={(e) => dispatch(updateTodo(new Todo(
                            todo.id,
                            todo.title,
                            !todo.done
                        )))}
                    />
                </div>
            </div>
        );
    }
}

export default TodoList;