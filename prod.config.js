const { defineConfig } = require("cypress");

module.exports = defineConfig({
	extends: "./cypress.json",
	baseUrl: "https://www.prod.com",
	id: "id",
});
