import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { TodosContext } from '~/stores/todos'
import { TodoInput } from '~/views/components/TodoInput'
import { TodoItem } from '~/views/components/TodoItem'
import styles from '~/views/components/TodoList.module.scss'
import { TodoPlaceHolder } from '~/views/components/TodoPlaceholder'

export const TodoList = observer(() => {
    const todos = useContext(TodosContext)

    return (
        <div className={styles.container}>
            <strong className={styles.title}>Todo list</strong>
            <TodoPlaceHolder />
            <ul className={styles.list}>
                {todos.list.map(todo => (
                    <TodoItem key={todo.uid} todo={todo} />
                ))}
            </ul>
            <TodoInput />
        </div>
    )
})
