import React, { useContext, useState } from 'react'
import uuid from 'uuid/v4'
import { TodosContext } from '~/stores/todos'
import styles from '~/views/components/TodoInput.module.scss'

export function TodoInput() {
    const todos = useContext(TodosContext)
    const [text, setText] = useState('')

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!text) {
            alert("You can't enter a blank")
            return
        }

        todos.list.push({
            title: text,
            uid: uuid()
        })
        setText('')
    }

    return (
        <form className={styles.container} onSubmit={onSubmit}>
            <input
                className={styles.input}
                type={'text'}
                value={text}
                placeholder={'Please fill your todo item'}
                onChange={e => {
                    setText(e.target.value)
                }}
            />
            <button className={styles.button} type="submit">
                ADD
            </button>
        </form>
    )
}
