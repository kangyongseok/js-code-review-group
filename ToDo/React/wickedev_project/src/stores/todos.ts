import { observable } from 'mobx'
import React from 'react'
import { ITodo } from '~/models/entities/todo'
import { remove } from '~/utils'

export class Todos {
    @observable public readonly list: ITodo[] = []

    public remove(todo: ITodo) {
        remove(todo).on(this.list)
    }
}

export const TodosContext = React.createContext(new Todos())
