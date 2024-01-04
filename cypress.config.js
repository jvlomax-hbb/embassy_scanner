const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "bqinpp",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
