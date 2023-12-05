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
    cy.get("#Username").type(username)
    cy.get("Password").type(password)
    cy.get("login-button").click()
})