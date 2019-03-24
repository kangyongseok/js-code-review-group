import { debounce } from 'lodash'
import React, { ChangeEventHandler, Key, useState } from 'react'
import styles from '~/views/components/ValidationInput.module.scss'

interface IProps {
    validationKey?: Key
    type?: string
    placeholder?: string
    name?: string
    value?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
    validation?: (value: string) => string
}

const vMap = new Map()

function lazyValidationFactory(
    key?: Key,
    validation?: (value: string) => string,
    callback?: (value: string) => void,
    wait: number = 500
) {
    if (!validation || !key) {
        return
    }

    if (vMap.has(key)) {
        return vMap.get(key)
    }

    const lazyValidation = debounce((value: string) => {
        if (!callback) {
            return
        }
        callback(validation(value))
    }, wait)

    vMap.set(key, lazyValidation)

    return lazyValidation
}

export function ValidationInput({
    validationKey,
    type,
    placeholder,
    name,
    value,
    onChange,
    validation
}: IProps) {
    const [error, setError] = useState('')
    const lazyValidation = lazyValidationFactory(
        validationKey,
        validation,
        setError
    )

    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value || ''}
                onChange={e => {
                    if (lazyValidation) {
                        lazyValidation(e.target.value)
                    }

                    if (onChange) {
                        onChange(e)
                    }
                }}
            />
            {error && <small className={styles.error}>{error}</small>}
        </>
    )
}
