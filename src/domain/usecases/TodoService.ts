import Todo from "../entities/Todo"
import TodoRepository from "../repositories/TodoRepository"


export default class TodoServiceImpl {
    todoRepo: TodoRepository

    constructor(tr: TodoRepository) {
        this.todoRepo = tr
    }

    GetTodos(): Array<Todo> {
        return this.todoRepo.GetTodos()
    }

    SetTodo(todo: Array<Todo>): void {
        return this.todoRepo.SetTodo(todo)
    }
}
