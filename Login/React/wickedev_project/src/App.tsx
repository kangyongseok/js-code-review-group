import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styles from '~/App.module.scss'
import { PrivateRoute } from '~/views/components/PrivateRoute'
import { SignInPage } from '~/views/pages/SignInPage'
import { SignUpPage } from '~/views/pages/SignUpPage'
import { UserInfoPage } from '~/views/pages/UserInfoPage'

export class App extends Component {
    public render() {
        return (
            <Router>
                <div className={styles.container}>
                    <Route path={'/sign-in'} e component={SignInPage} />
                    <Route path={'/sign-up'} e component={SignUpPage} />
                    <PrivateRoute path={'/'} component={UserInfoPage} />
                </div>
            </Router>
        )
    }
}
