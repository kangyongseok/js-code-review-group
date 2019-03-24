export function isSafePassword(password: string): boolean {
    return 0 < password.length && 8 <= password.length
}

export function isValidUsername(username: string): boolean {
    return 0 < username.length && 8 <= username.length
}

export function validationPassword(password: string): string {
    return !isSafePassword(password) ? 'password is too short' : ''
}

export function validationUsername(username: string): string {
    return !isValidUsername(username) ? 'username is too short' : ''
}
