declare namespace Cypress{
    interface Chainable{
        /** 
         * @param username - takes username or id
         * @param username - takes user password
        */
        login(username:string, password:string):Chainable<Element>
    }  
}
Cypress.Commands.add("login", (username, password) =>{
    cy.get('#input-email').type(username)
    cy.get('[data-testid="CookieBanner-AcceptCookiesButton"]').click()
    cy.get('[data-testid="LoginFormEmail-ContinueButton"]').click()
    cy.get('.sc-iyLcWo > input').type(password)
    cy.get('[data-testid="LoginFormPassword-ContinueButton"]').click()
})