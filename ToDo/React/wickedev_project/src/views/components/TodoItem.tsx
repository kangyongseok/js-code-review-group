import { observer } from 'mobx-react-lite'
import React from 'react'
import { useContext } from 'react'
import { ITodo } from '~/models/entities/todo'
import { TodosContext } from '~/stores/todos'
import styles from '~/views/components/TodoItem.module.scss'

export const TodoItem = observer(({ todo }: { todo: ITodo }) => {
    const todos = useContext(TodosContext)

    function onClickMoveUp(e: React.SyntheticEvent) {
        todos.moveDown(todo)
    }

    function onClickMoveDown() {
        todos.moveUp(todo)
    }

    function onClickRemove() {
        todos.remove(todo)
    }

    const onClickItem = () => {
        todo.isDone = !todo.isDone
    }

    const doneStyle = (isDone?: boolean) => {
        return isDone ? styles.done : ''
    }

    return (
        <li>
            <div className={styles.container}>
                <span
                    onClick={onClickItem}
                    className={styles.text + ' ' + doneStyle(todo.isDone)}
                >
                    {todo.title}
                </span>{' '}
                <span className={styles.buttons}>
                    <button onClick={onClickMoveUp}>▲</button>
                    <button onClick={onClickMoveDown}>▼</button>
                    <button onClick={onClickRemove}>x</button>
                </span>
            </div>
        </li>
    )
})
