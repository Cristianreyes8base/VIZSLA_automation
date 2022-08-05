const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //extends: "./cypress.json",
  url: "https://staging.vizsla.com/auth/login",

  originationLogin: "https://staging.vizsla.com/auth/login",
  user: "arina.doroganova+test4@8base.com",
  password: "arina.doroganova+test4@8base.com",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
