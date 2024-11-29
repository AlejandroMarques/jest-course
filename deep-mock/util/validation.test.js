import { expect, describe, it } from 'vitest'
import { validateNotEmpty } from './validation';

describe('validateNotEmpty()', () => {
    it('shouldm\'t throw an error if passed a valid string', () => {
        const errorMessage = 'Input cannot be empty';
        const text = 'test';

        const fn = () => {
            validateNotEmpty(text, errorMessage);
        }

        expect(fn).not.toThrow()
    })


    it('should throw an error with the errorMessage if passed an empty string', () => {
        const errorMessage = 'Input cannot be empty';
        const text = '';

        const fn = () => {
            validateNotEmpty(text, errorMessage);
        }

        expect(fn).toThrow()
    })

    it('should throw an error with the errorMessage if no text is passed', () => {
        const errorMessage = 'Input cannot be empty';

        const fn = () => {
            validateNotEmpty(undefined, errorMessage);
        }

        expect(fn).toThrow()
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