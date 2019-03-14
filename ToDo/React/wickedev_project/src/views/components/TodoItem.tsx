import React from 'react'
import { useContext } from 'react'
import { ITodo } from '~/entities/todo'
import { TodosContext } from '~/stores/todos'

export function TodoItem({ todo }: { todo: ITodo }) {
    const todos = useContext(TodosContext)

    function onClickRemove(e: React.SyntheticEvent) {
        e.preventDefault()
        todos.remove(todo)
    }

    return (
        <li>
            {todo.title} <button onClick={onClickRemove}>x</button>
        </li>
    )
}
