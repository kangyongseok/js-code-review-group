import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import useReactRouter from 'use-react-router'
import { AuthContext } from '~/stores/auth-store'
import { isSafePassword } from '~/utils/auth-validation'
import { ProgressBar } from '~/views/components/ProgressBar'
import styles from '~/views/pages/SignInPage.module.scss'

export const SignInPage = observer(() => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const auth = useContext(AuthContext)
    const { history } = useReactRouter()

    const validation = (): boolean => {
        if (username === '') {
            setError('username is empty')
            return false
        }

        if (!isSafePassword(password)) {
            setError('password is not valid')
            return false
        }

        return true
    }

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setError('')

        if (!validation()) {
            return
        }

        setLoading(true)

        try {
            await auth.signIn(username, 'password')
            history.push('/')
        } catch (e) {
            setError(e.message.toString())
            setLoading(false)
        }
    }

    function onClickSignUp(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        history.push('/sign-up')
    }

    return (
        <form className={styles.container} onSubmit={onSubmit}>
            <h2 className={styles.title}>Sign In</h2>
            {loading ? (
                <ProgressBar />
            ) : (
                <div className={styles.inputContainer}>
                    <input
                        className={styles.input}
                        type={'text'}
                        placeholder={'username'}
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        className={styles.input}
                        type={'password'}
                        placeholder={'password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
            )}
            {error && <small className={styles.error}>{error}</small>}
            <div className={styles.buttonContainer}>
                <button className={styles.button}>Sign In</button>
                <button className={styles.button} onClick={onClickSignUp}>
                    Sign Up
                </button>
            </div>
        </form>
    )
})
