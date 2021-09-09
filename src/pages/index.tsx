
import TodoForm from "./components/TodoForm"


export default function Home() {

    return (
        <div className="todo-app" >
            <h1>My Plans For Today</h1>
            <div className="TodoApp">
                <TodoForm />
            </div>
        </div>
    )
}
