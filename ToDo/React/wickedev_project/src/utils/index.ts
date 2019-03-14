export function remove(array: any[], target: any) {
    const idx = array.indexOf(target)
    array.splice(idx, 1)
}
