describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.url().should("contain", "example")
  })
})