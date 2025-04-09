const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "cur7qn",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true, //grava os testes em video
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"}
  },
});
