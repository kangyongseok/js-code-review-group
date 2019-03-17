import { observable } from 'mobx'
import React from 'react'
import { ITodo } from '~/models/entities/todo'
import { moveDown, moveUp, remove } from '~/utils'

export class Todos {
    @observable public readonly list: ITodo[] = []

    public remove(todo: ITodo) {
        remove(todo).on(this.list)
    }

    public moveDown(todo: ITodo) {
        moveUp(todo).on(this.list)
    }

    public moveUp(todo: ITodo) {
        moveDown(todo).on(this.list)
    }
}

export const TodosContext = React.createContext(new Todos())
