import { util } from "chai";
import { it, describe } from "mocha";
import {Utils} from "../pages/origination/utils";
import 'cypress-file-upload';
let url = Cypress.config("originationLogin");
let url_leases = url +`/admin/`;
let user = Cypress.config("user");
let password = Cypress.config("password");
const utils = new Utils();
//const { Builder, By, Key, until } = require('selenium-webdriver')
//(alias) class By
//import By



describe("general_campaign", () => {
	
    beforeEach(() => {
		cy.viewport(1600, 820)
	  });

    it.skip("campaign_creation_successfull", () => {
      utils.login(user, password, url), {timeout: 20000};
      
      cy.get('[data-testid="FlagIcon"]').click(), {timeout: 20000};
      cy.wait(5000);
      cy.get('#\\:ru\\:').click().should("be.visible"); 
      cy.get('#\\:r16\\:').type("Automation Campaign");
      cy.get('#\\:r17\\:').type("Miami");
      cy.get('#mui-component-select-state').click();
      cy.get('#menu-state > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-rj51mi > ul > li:nth-child(10)').click();
      cy.get('#\\:r18\\:').type("Dec 31, 2022");   
      cy.get('#\\:r19\\:').type("06:00 AM");
      cy.get('#\\:r1a\\:').click();
      cy.get('#\\:r1a\\:').type(Cypress._.repeat('{backspace}', 12));
      cy.get('#\\:r1a\\:').type("Dec 31, 2022");
      cy.get('#\\:r1b\\:').type("06:00 PM");
      cy.get('#\\:r1b\\:').type('{Enter}');
      cy.get('#\\:r1d\\:').click().should("be.visible"), {force: true};
      cy.wait(5000);
  
      //Campaign images step
        const uploadfile = 'maxresdefault.jpg';
      //cy.get(':nth-child(2) > .MuiGrid-container > :nth-child(1) > .jss152').attachFile(uploadfile);
      cy.get('#\\:r1d\\:').click();
      cy.wait(5000);
      
      //Campaign goals
      cy.get('#\\:r1e\\:').type("10000");
      cy.get('#\\:r1f\\:').type("5000");
      cy.get('#\\:r1g\\:').type("10");
      cy.get('#\\:r1d\\:').click();
      cy.wait(3000);
      
      //Experiences pages
      cy.get('#\\:r1i\\:').type("Experience test");
      cy.get('#mui-component-select-experiences\\[0\\]\\.experienceCategory').click();
      cy.get('[data-value="Cycling"]').click();
      cy.get(':nth-child(4) > .MuiGrid-root > .MuiFormControlLabel-root > .MuiTypography-root').click();
      cy.get('#\\:r1d\\:').click();
      cy.wait(30000);
      cy.get('#\\:r1m\\:').click();
    //   const element = await driver.findElement(By.id(":rr:"))
      //Assertion for campaign created
      cy.get(':nth-child(8) > .MuiPaper-root > .MuiTypography-inherit > .css-1d3bbye > .MuiCardMedia-root').click();
        //cy.contains("Automation Campaign").click();
        });

    it("Campaign invalid format for URL", () => {
      utils.login(user, password, url), {timeout: 20000};
      
      cy.get('[data-testid="FlagIcon"]').click(), {timeout: 20000};
      cy.wait(5000);
      cy.get('#\\:ru\\:').click().should("be.visible"); 
      cy.get('#\\:r16\\:').type("Texas Mamma Jamma (test arina)");
      cy.get('#\\:r17\\:').type("Miami");
      cy.get('#mui-component-select-state').click();
      cy.get('#menu-state > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-rj51mi > ul > li:nth-child(10)').click();
      cy.get('#\\:r18\\:').type("Dec 31, 2022");   
      cy.get('#\\:r19\\:').type("06:00 AM");
      cy.get('#\\:r1a\\:').click();
      cy.get('#\\:r1a\\:').type(Cypress._.repeat('{backspace}', 12));
      cy.get('#\\:r1a\\:').type("Dec 31, 2022");
      cy.get('#\\:r1b\\:').type("06:00 PM");
      cy.get('#\\:r1b\\:').type('{Enter}');
      cy.get('#\\:r1a\\:').click();
      cy.get('#\\:r16\\:-helper-text').should('have.text', 'Campaign name is invalid format')
      
        });
    });
