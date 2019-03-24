import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import { AuthContext } from '~/stores/auth-store'

export function PrivateRoute({
    component,
    ...rest
}: {
    path: string
    component: React.ComponentType<any>
}) {
    const auth = useContext(AuthContext)
    const Component = component

    return (
        <Route
            {...rest}
            exact={true}
            render={props =>
                auth.isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/sign-in',
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    )
}
