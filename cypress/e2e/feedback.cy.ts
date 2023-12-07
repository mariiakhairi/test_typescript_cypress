/// <reference types="cypress"/>
describe('Feedback test', () => {
  it('Should submit feedback form', () => {
    cy.visitFeedbackPage()
    cy.submitFeetback("Mariia", "test@email.com", "My subject", "Feedback test")
  })
})