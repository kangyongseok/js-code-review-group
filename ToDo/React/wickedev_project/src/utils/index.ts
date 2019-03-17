export function remove<T>(target: T): { on: (array: T[]) => void } {
    return {
        on: (array: T[]) => {
            const idx = array.indexOf(target)
            array.splice(idx, 1)
        }
    }
}
