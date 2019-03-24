import React, { useContext } from 'react'
import useReactRouter from 'use-react-router'
import { AuthContext } from '~/stores/auth-store'
import styles from '~/views/pages/UserInfoPage.module.scss'

export function UserInfoPage() {
    const auth = useContext(AuthContext)
    const { history } = useReactRouter()
    const onClickSignOut = () => {
        auth.signOut()
        history.push('/')
    }

    return (
        <div className={styles.container}>
            <pre>{JSON.stringify(auth.user, null, 4)}</pre>
            <button onClick={onClickSignOut}>Sign Out</button>
        </div>
    )
}
