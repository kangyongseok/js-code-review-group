import React, { useContext, useState } from 'react'
import uuid from 'uuid/v4'
import { TodosContext } from '~/stores/todos'

export function TodoInput() {
    const todos = useContext(TodosContext)
    const [text, setText] = useState('')

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        todos.list.push({
            title: text,
            uid: uuid()
        })
        console.log(todos.list.length)
        setText('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type={'text'}
                value={text}
                onChange={e => {
                    setText(e.target.value)
                }}
            />
            <button type="submit">ADD</button>
        </form>
    )
}
