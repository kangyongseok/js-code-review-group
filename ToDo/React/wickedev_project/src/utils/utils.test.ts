import { remove } from '~/utils/index'

describe('remove function', () => {
    it('should remove correctly', () => {
        const array = ['hello', 'my', 'name', 'is', 'ryan']
        remove('name').on(array)
        expect(array).toEqual(['hello', 'my', 'is', 'ryan'])
    })
})
