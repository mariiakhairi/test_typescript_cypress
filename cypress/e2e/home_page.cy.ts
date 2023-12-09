describe('template spec', () => {
	it('passes', () => {
		cy.visitHomePage()
		cy.waitForSeconds(5000)
	})
})
