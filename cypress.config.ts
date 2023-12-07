import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video:false,
  defaultCommandTimeout: 10000,
  watchForFileChanges:false,
  env:{
    email:"test@mailinator.com",
    password:"Test1234*",
  },
  e2e: {
    specPattern: 'cypress/e2e/*.cy.ts',	
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    
  },
});
