/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare namespace Cypress{
    interface Chainable{
        /**
         * Navigates to the home page
         */
        visitHomePage(): Chainable<Element>
        visitAboutPage(): Chainable<Element>
        visitCarouselPage():Chainable<Element>
    }
}
Cypress.Commands.add('visitHomePage',() =>{
    cy.visit("https://practice-automation.com/")
})

Cypress.Commands.add('visitAboutPage',() =>{
    cy.visit("https://automatenow.io/about/")
})
Cypress.Commands.add('visitCarouselPage',() =>{
    cy.visit("https://practice-automation.com/carousel/")
})