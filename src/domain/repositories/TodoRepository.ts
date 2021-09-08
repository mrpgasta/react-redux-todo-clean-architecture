import Todo from "../entities/Todo"

export default interface TodoRepository {
    GetTodos(): Array<Todo>
    SetTodo(todo: Array<Todo>): void
}
