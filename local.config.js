const { defineConfig } = require("cypress");

module.exports = defineConfig({
	extends: "./cypress.json",
	url: "http://localhost:4200",
	id: "",
	originationLogin:"http://localhost:4200",
	user:"",
	password:""
});



