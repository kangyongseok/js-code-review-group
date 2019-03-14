import { isEmpty } from 'lodash'
import React from 'react'
import { useContext } from 'react'
import { TodosContext } from '~/stores/todos'

export function TodoPlaceHolder() {
    const todos = useContext(TodosContext)
    return isEmpty(todos.list) ? <p>nothing any on todos</p> : null
}
