const { defineConfig } = require("cypress");

module.exports = defineConfig({
  numTestsKeptInMemory: 0,
  experimentalMemoryManagement: true,
  defaultCommandTimeout: 10000,
  responseTimeout: 30000,
  pageLoadTimeout: 30000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
