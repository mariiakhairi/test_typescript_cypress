import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video:false,
  defaultCommandTimeout: 10000,
  watchForFileChanges:false,
  env:{
    email:"test@mailinator.com",
    password:"zKYN$2SVxgGy2p7",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    
  },
});
