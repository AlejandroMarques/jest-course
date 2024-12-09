import fs from 'fs'
import path from 'path'

import { expect, describe, it, vi, beforeEach, } from 'vitest'
import { Window } from 'happy-dom'
import { showError } from './dom'

const htmlDocPath = path.join(process.cwd(), 'index.html')
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString()

const window = new Window()
const document = window.document
vi.stubGlobal('document', document)

describe('showError()', () => {
    beforeEach(() => {
        document.body.innerHTML = ''
        document.write(htmlDocumentContent)
    })
    it('should output the provided message in the error paragraph', () => {
        const testErrorMessage = 'Test'
        showError(testErrorMessage)
        const errorElement = document.getElementById('errors')
        const paragraphElement = errorElement.firstElementChild

        expect(paragraphElement.textContent).toBe(testErrorMessage)
    })

    it('should add an error paragraph to the id=\'errors\' element', () => {
        showError('test')
        const errorElement = document.getElementById('errors')
        const paragraphElement = errorElement.firstElementChild

        expect(paragraphElement).not.toBeNull()
    })

    it('should not contain an error paragraph initially', () => {
        const errorElement = document.getElementById('errors')
        const paragraphElement = errorElement.firstElementChild

        expect(paragraphElement).toBeNull()
    })
})
