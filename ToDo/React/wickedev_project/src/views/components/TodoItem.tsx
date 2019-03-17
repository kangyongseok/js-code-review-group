import { observer } from 'mobx-react-lite'
import React from 'react'
import { useContext } from 'react'
import { ITodo } from '~/models/entities/todo'
import { TodosContext } from '~/stores/todos'
import styles from '~/views/components/TodoItem.module.scss'

export const TodoItem = observer(({ todo }: { todo: ITodo }) => {
    const todos = useContext(TodosContext)

    function onClickRemove(e: React.SyntheticEvent) {
        e.preventDefault()
        todos.remove(todo)
    }

    const onClickItem = (e: React.SyntheticEvent) => {
        e.preventDefault()
        todo.isDone = !todo.isDone
        console.log(todo.isDone)
    }

    const doneStyle = (isDone?: boolean) => {
        return isDone ? styles.done : ''
    }

    return (
        <li onClick={onClickItem}>
            <span className={doneStyle(todo.isDone)}>{todo.title}</span>{' '}
            <button onClick={onClickRemove}>x</button>
        </li>
    )
})
