import { expect, it } from 'vitest'
import { add } from './math'
it('should sum all numbers in an array', () => {
    const numbers = [1, 2, 3, 4, 5]
    const result = add(numbers)
    expect(result).toBe(15)
})
