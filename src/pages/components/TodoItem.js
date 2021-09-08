import React from "react"
import { updateTodo, deleteTodo } from "app/redux/todo/todo.slice"
import { useAppDispatch } from "app/redux/hooks"
import Todo from "domain/entities/Todo"

const TodoItem = ({ todo }) => {
    return (
        <div className="row">
            <div className="column">
                <h2
                    style={{
                        textDecoration: todo.done ? "line-through" : null,
                    }}
                >
                    {todo.title}
                </h2>
            </div>
            <div className="column">
                <div className="ui checkbox">
                    <input
                        type="checkbox"
                        checked={todo.done}
                        onChange={() => {}}
                    />
                    <label>Done</label>
                </div>
            </div>
            <div className="column">
                <div className="ui button" >
                    <i className="trash icon" />
                </div>
            </div>
        </div>
    )
}

export default TodoItem
