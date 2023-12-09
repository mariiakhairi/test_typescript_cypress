/// <reference types="cypress"/>

describe('Exhamples of the simple tests', () => {
	it('Sould login to the app', () => {
		cy.visitLoginPage()
		cy.login(`${Cypress.env('email')}`, `${Cypress.env('password')}`)
	})
})
