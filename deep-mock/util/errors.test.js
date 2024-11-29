import { expect, describe, it } from 'vitest'
import { HttpError, ValidationError } from './errors';

describe('HttpError', () => {
    it('should assign props correctly', () => {
        const statusCode = 'testStatusCode'
        const message = 'testMessage'
        const data = {id: 1, name: 'error'}

        const newError = new HttpError(statusCode, message, data)

        expect(newError.statusCode).toBe(statusCode)
        expect(newError.message).toBe(message)
        expect(newError.data).toEqual(data)
    })

    it('shouldn\'t have props defined if no props are passed in', () => {
        const newError = new HttpError()
        expect(newError.statusCode).toBeUndefined()
        expect(newError.message).toBeUndefined()
        expect(newError.data).toBeUndefined()
    })
})

describe('ValidationError', () => {
    it('should assign correct message', () => {
        const message = 'testMessage'

        const newError = new ValidationError(message)

        expect(newError.message).toBe(message)
    })

    it('shouldn\'t have props defined if no props are passed in', () => {
        const newError = new ValidationError()
        expect(newError.message).toBeUndefined()
    })
})