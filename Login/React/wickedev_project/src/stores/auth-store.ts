import { action, computed, observable } from 'mobx'
import React from 'react'
import { Server } from '~/infra/server'
import { IUser } from '~/models/entities/user'
import { AuthRequest } from '~/services/auth-request'
import { delay, Nullable } from '~/utils'

export class AuthStore {
    @observable private backedUser: Nullable<IUser> = null

    @computed
    get user(): Nullable<IUser> {
        return this.backedUser
    }

    set user(user: Nullable<IUser>) {
        this.backedUser = user
        localStorage.setItem('user', JSON.stringify(user))
    }

    constructor(private readonly authRequest: AuthRequest) {
        const data = localStorage.getItem('user')
        if (!data) {
            return
        }
        this.user = JSON.parse(data)
    }

    @computed
    public get isLoggedIn() {
        return this.user
    }

    @action
    public async signIn(username: string, password: string) {
        await delay(1000)
        this.user = await this.authRequest.fetchSignIn(username, password)
    }

    @action
    public async signUp(
        username: string,
        password1: string,
        password2: string
    ) {
        await delay(1000)
        await this.authRequest.fetchSignUp(username, password1, password2)
        this.user = await this.authRequest.fetchSignIn(username, password1)
    }

    @action
    public signOut() {
        this.user = null
    }
}

function authStoreFactory(baseUrl: string): AuthStore {
    const server = new Server(baseUrl)
    const authRequest = new AuthRequest(server)
    return new AuthStore(authRequest)
}

export const AuthContext = React.createContext(
    authStoreFactory('https://koreanjson.com/')
)
