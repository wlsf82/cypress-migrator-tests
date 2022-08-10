const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://migrator.cypress.io',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});
