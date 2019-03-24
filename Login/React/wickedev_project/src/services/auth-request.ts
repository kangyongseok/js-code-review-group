import { Server } from '~/infra/server'
import { IUser } from '~/models/entities/user'
import { Nullable } from '~/utils'

function findUsers(users: IUser[], username: string): Nullable<IUser> {
    for (const user of users) {
        if (user.username === username) {
            return user
        }
    }

    return null
}

export class AuthRequest {
    constructor(private readonly server: Server) {}

    public async fetchSignIn(
        username: string,
        password: string
    ): Promise<IUser> {
        // NOTICE! this is fake implementation. Don't do like this in production authentication
        const users: IUser[] = await this.server.get('users')

        const user = findUsers(users, username)

        if (!user) {
            throw new Error(`(${username}) sign in failed.`)
        }

        return user
    }

    public async fetchSignUp(
        username: string,
        password1: string,
        password2: string
    ): Promise<IUser> {
        // NOTICE! this is fake implementation. Don't do like this in production authentication
        return this.server.post('users', {
            password1,
            password2,
            username
        })
    }
}
