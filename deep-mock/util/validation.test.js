import { expect, describe, it } from 'vitest'
import { validateNotEmpty } from './validation';

describe('validateNotEmpty()', () => {
    it('should throw an error if provided an empty string', () => {
        const text = '';

        const fn = () => {
            validateNotEmpty(text);
        }

        expect(fn).toThrow()
    })

    it('should throw an error if provided a string only with blank spaces', () => {
        const text = ' ';

        const fn = () => {
            validateNotEmpty(text);
        }

        expect(fn).toThrow()
    })

    it('should throw an error with the provided error message', () => {
        const text = '';
        const errorMessage = 'Input cannot be empty';

        const fn = () => {
            validateNotEmpty(text, errorMessage);
        }

        expect(fn).toThrow()
    })

    it('shouldn\'t throw an error if passed a valid string', () => {
        const text = 'test';

        const fn = () => {
            validateNotEmpty(text);
        }

        expect(fn).not.toThrow()
    })

    it('should throw an error with the errorMessage if an invalid value is passed', () => {
        const errorMessage = 'Input cannot be empty';
        const value = 1

        const fn = () => {
            validateNotEmpty(value, errorMessage);
        }

        expect(fn).toThrow();
    })
})