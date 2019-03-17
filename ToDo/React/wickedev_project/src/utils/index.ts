export function remove<T>(target: T): { on: (array: T[]) => void } {
    return {
        on: (array: T[]) => {
            const idx = array.indexOf(target)
            array.splice(idx, 1)
        }
    }
}

export function moveUp<T>(target: T): { on: (array: T[]) => void } {
    return {
        on: (array: T[]) => {
            const fromIdx = array.indexOf(target)
            const toIdx =
                0 <= fromIdx && fromIdx < array.length ? fromIdx - 1 : fromIdx
            move(array, fromIdx, toIdx)
        }
    }
}

export function moveDown<T>(target: T): { on: (array: T[]) => void } {
    return {
        on: (array: T[]) => {
            const fromIdx = array.indexOf(target)
            const toIdx =
                0 <= fromIdx && fromIdx < array.length ? fromIdx + 1 : fromIdx

            move(array, fromIdx, toIdx)
        }
    }
}

function move<T>(array: T[], from: number, to: number) {
    if (from === to) {
        return
    }

    array.splice(to, 0, array.splice(from, 1)[0])
}
