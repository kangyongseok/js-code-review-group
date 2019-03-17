import { moveDown, moveUp, remove } from '~/utils/index'

describe('remove function', () => {
    it('should remove correctly', () => {
        const array = ['hello', 'my', 'name', 'is', 'ryan']
        remove('name').on(array)
        expect(array).toEqual(['hello', 'my', 'is', 'ryan'])
    })

    it('should moveUp correctly', () => {
        const array = ['hello', 'my', 'name', 'is', 'ryan']
        moveUp('name').on(array)
        expect(array).toEqual(['hello', 'name', 'my', 'is', 'ryan'])
    })

    it('should moveDown correctly', () => {
        const array = ['hello', 'my', 'name', 'is', 'ryan']
        moveDown('name').on(array)
        expect(array).toEqual(['hello', 'my', 'is', 'name', 'ryan'])
    })
})
