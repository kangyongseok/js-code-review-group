import React, { Component } from 'react'
import styles from '~/App.module.scss'
import { TodoList } from '~/views/components/TodoList'

class App extends Component {
    public render() {
        return (
            <div className={styles.container}>
                <TodoList />
            </div>
        )
    }
}

export default App
