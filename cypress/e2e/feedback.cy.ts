/// <reference types="cypress"/>
describe('Feedback test', () => {
	it('Should submit feedback form', () => {
		cy.visitFeedbackPage()
		cy.fixture('feedbackData').then((data) => {
			cy.submitFeetback(data.name, data.email, data.subject, data.message)
		})
	})
})
