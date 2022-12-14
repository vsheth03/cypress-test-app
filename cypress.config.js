// import codeCoverageTask from "@cypress/code-coverage/task";

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      require('@cypress/code-coverage/task')(on, config)
      return config
    },
    pageLoadTimeout: 3000,
    baseUrl: "http://localhost:3000",
  },
});
