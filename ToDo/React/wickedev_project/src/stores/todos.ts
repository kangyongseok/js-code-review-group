import { observable } from 'mobx'
import React from 'react'
import { ITodo } from '~/entities/todo'
import { remove } from '~/utils'

export class Todos {
    @observable public list: ITodo[] = []

    public remove(todo: ITodo) {
        remove(this.list, todo)
    }
}

export const TodosContext = React.createContext(new Todos())
