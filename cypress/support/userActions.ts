declare namespace Cypress {
	interface Chainable {
		/**
		 * @param username - takes username or id
		 * @param username - takes user password
		 */
		login(username: string, password: string): Chainable<Element>
		/**
		 *
		 * @param name - test user name
		 * @param email - test user email
		 * @param subject - test user subject
		 * @param message - test user message
		 */
		submitFeetback(
			name: string,
			email: string,
			subject: string,
			message: string
		): Chainable<Element>
	}
}
Cypress.Commands.add('login', (username, password) => {
	cy.get('#input-email').type(username)
	cy.get('[data-testid="CookieBanner-AcceptCookiesButton"]').click()
	cy.get('[data-testid="LoginFormEmail-ContinueButton"]').click()
	cy.get('.sc-iyLcWo > input').type(password)
	cy.get('[data-testid="LoginFormPassword-ContinueButton"]').click()
})

Cypress.Commands.add('submitFeetback', (name, email, subject, message) => {
	cy.get('#name').type(name)
	cy.get('#email').type(email)
	cy.get('#subject').type(subject)
	cy.get('#comment').type(message)
	cy.get('[name="submit"]').click()
})
