import React from 'react'
import styles from '~/views/components/ProgressBar.module.scss'

export function ProgressBar() {
    return (
        <div className={styles.container}>
            <div className={styles['indeterminate-circle']}>
                <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                >
                    <path
                        className={styles.indeterminate}
                        d="M12 3.25A8.75 8.75 0 1 1 3.25 12"
                        fill="none"
                        strokeWidth="2.5"
                        strokeLinecap="square"
                        stroke="#2A3F54"
                    />
                </svg>
            </div>
        </div>
    )
}
