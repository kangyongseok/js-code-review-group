import { isEmpty } from 'lodash'
import React, { useContext, useState } from 'react'
import useReactRouter from 'use-react-router'
import { AuthContext } from '~/stores/auth-store'
import { validationPassword, validationUsername } from '~/utils/auth-validation'
import { ProgressBar } from '~/views/components/ProgressBar'
import { ValidationInput } from '~/views/components/ValidationInput'
import styles from '~/views/pages/SignUpPage.module.scss'

export function SignUpPage() {
    const [input, setInput] = useState({
        password1: '',
        password2: '',
        username: ''
    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [valid, setValid] = useState(false)
    const auth = useContext(AuthContext)
    const { history } = useReactRouter()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        // @ts-ignore
        setInput({ ...input, [name]: value })
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!valid) {
            return
        }

        const { username, password1, password2 } = input
        setLoading(true)

        try {
            await auth.signUp(username, password1, password2)
            history.push('/')
        } catch (e) {
            setError(e.message.toString())
            setLoading(false)
        }
    }

    return (
        <form className={styles.container} onSubmit={onSubmit}>
            <h2 className={styles.title}>Sign Up</h2>
            {loading ? (
                <ProgressBar />
            ) : (
                <div className={styles.inputContainer}>
                    <ValidationInput
                        validationKey={'username-input'}
                        type={'text'}
                        placeholder={'username'}
                        name={'username'}
                        value={input.username}
                        onChange={handleInputChange}
                        validation={(value: string) => {
                            const validation = validationUsername(value)
                            setValid(isEmpty(validation))
                            if (isEmpty(value)) {
                                return ''
                            }
                            return validation
                        }}
                    />
                    <ValidationInput
                        validationKey={'password1-input'}
                        type={'password'}
                        placeholder={'password1'}
                        name={'password1'}
                        value={input.password1}
                        onChange={handleInputChange}
                        validation={(value: string) => {
                            const validation = validationPassword(value)
                            setValid(isEmpty(validation))
                            if (isEmpty(value)) {
                                return ''
                            }
                            return validation
                        }}
                    />
                    <ValidationInput
                        validationKey={'password2-input'}
                        type={'password'}
                        placeholder={'password2'}
                        name={'password2'}
                        value={input.password2}
                        onChange={handleInputChange}
                        validation={(value: string) => {
                            const validation = validationPassword(value)
                            setValid(isEmpty(validation))
                            if (isEmpty(value)) {
                                return ''
                            }
                            return validation
                        }}
                    />
                </div>
            )}
            {error && <small className={styles.error}>{error}</small>}
            <div className={styles.buttonContainer}>
                <button
                    className={styles.button}
                    onClick={e => {
                        e.preventDefault()
                        history.push('/sign-in')
                    }}
                >
                    Back to Sign In
                </button>
                <button className={styles.button}>Sign Up</button>
            </div>
        </form>
    )
}
