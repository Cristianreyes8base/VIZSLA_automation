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



describe("Campaign_VIZSLA", () => {
	
    beforeEach(() => {
		cy.viewport(1600, 820)
	  });

    it("campaign_creation", () => {
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
    //   await driver.actions({ bridge: true }).moveToElement(element).perform()
    // }
    // {
    //   const element = await driver.findElement(By.CSS_SELECTOR, "body")
    //   await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    // }
    // await driver.findElement(By.id(":r13:")).click()
    // await driver.findElement(By.id(":r13:")).sendKeys("Automation test campaign")
    // await driver.findElement(By.id(":r14:")).sendKeys("Miami")
    // {
    //   const element = await driver.findElement(By.id("mui-component-select-state"))
    //   await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    // }
    // {
    //   const element = await driver.findElement(By.css("#menu-state > .MuiBackdrop-root"))
    //   await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    // }
    // await driver.findElement(By.css("body")).click()
    // await driver.findElement(By.css(".Mui-focusVisible")).click()
    // await driver.findElement(By.css(".MuiGrid-root:nth-child(1) > .MuiFormControl-root path")).click()
    // {

    //   const element = await driver.findElement(By.css(".MuiIconButton-edgeStart path"))
    //   await driver.actions({ bridge: true }).moveToElement(element).perform()
    // }
    // await driver.findElement(By.css(".MuiIconButton-edgeStart path")).click()
    // await driver.findElement(By.css(".MuiIconButton-edgeStart path")).click()
    // await driver.findElement(By.css(".MuiIconButton-edgeStart path")).click()
    // await driver.findElement(By.css(".MuiIconButton-edgeStart path")).click()
    // {
    //   const element = await driver.findElement(By.CSS_SELECTOR, "body")
    //   await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    // }
    // {
    //   const element = await driver.findElement(By.css(".css-mvmu1r:nth-child(5) > div:nth-child(5) > .MuiButtonBase-root"))
    //   await driver.actions({ bridge: true }).moveToElement(element).perform()
    // }
    // await driver.findElement(By.css(".css-mvmu1r:nth-child(5) > div:nth-child(5) > .MuiButtonBase-root")).click()
    // {
    //   const element = await driver.findElement(By.CSS_SELECTOR, "body")
    //   await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    // }
    // await driver.findElement(By.css(".MuiGrid-root:nth-child(2) > .MuiFormControl-root .MuiSvgIcon-root")).click()
    // await driver.findElement(By.css(".css-1umqo6f")).click()
    // await driver.findElement(By.css(".css-1umqo6f")).click()
    // {
    //   const element = await driver.findElement(By.css(".MuiGrid-root:nth-child(4) .MuiInputAdornment-root .MuiSvgIcon-root"))
    //   await driver.actions({ bridge: true }).moveToElement(element).perform()
    // }
    // await driver.findElement(By.css(".MuiGrid-root:nth-child(4) .MuiInputAdornment-root .MuiSvgIcon-root")).click()
    // {
    //   const element = await driver.findElement(By.CSS_SELECTOR, "body")
    //   await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    // }
    // await driver.findElement(By.css(".css-1umqo6f")).click()
    // await driver.findElement(By.css(".css-1umqo6f")).click()
    // {
    //   const element = await driver.findElement(By.css(".MuiGrid-root:nth-child(4) .MuiInputAdornment-root .MuiSvgIcon-root"))
    //   await driver.actions({ bridge: true }).moveToElement(element).perform()
    // }
    // await driver.findElement(By.css(".MuiGrid-root:nth-child(4) .MuiInputAdornment-root .MuiSvgIcon-root")).click()
    // {
    //   const element = await driver.findElement(By.CSS_SELECTOR, "body")
    //   await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    // }
    // {
    //   const element = await driver.findElement(By.css(".css-sfp64 > .MuiTypography-root"))
    //   await driver.actions({ bridge: true }).moveToElement(element).perform()
    // }
    // await driver.findElement(By.css(".css-sfp64 > .MuiTypography-root")).click()
    // {
    //   const element = await driver.findElement(By.CSS_SELECTOR, "body")
    //   await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    // }
    // {
    //   const element = await driver.findElement(By.css(".css-bydm9y"))
    //   await driver.actions({ bridge: true }).moveToElement(element).perform()
    // }
    // await driver.findElement(By.id(":r1a:")).click()
    // {
    //   const element = await driver.findElement(By.css(".jss151 > .MuiSvgIcon-root"))
    //   await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    // }
    // {
    //   const element = await driver.findElement(By.css(".jss151 > .MuiSvgIcon-root"))
    //   await driver.actions({ bridge: true }).moveToElement(element).perform()
    // }
    // {
    //   const element = await driver.findElement(By.css(".jss151 > .MuiSvgIcon-root"))
    //   await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    // }
    // await driver.findElement(By.css(".jss151 > .MuiSvgIcon-root")).click()
    // {
    //   const element = await driver.findElement(By.css(".jss151 > .MuiSvgIcon-root"))
    //   await driver.actions({ bridge: true}).doubleClick(element).perform()
    // }
    // await driver.findElement(By.css(".fsp-select-labels")).click()
    });

    it("people_CRM", () => {
      //console.log(url_bulk);
      //utils.login(user, password, url_bulk);
      //cy.get(':nth-child(6) > :nth-child(3) > .sidebar-link > .sidebar-link-label', { timeout: 5000 }).click();
      //cy.get('[class="addlink"]', { timeout: 2000 }).click();
      //const uploadfile = 'bulkprocess.csv';
      //cy.get('[name="file"]').attachFile(uploadfile);
      //cy.get('[name="_save"]').click();
      //cy.wait(25000);   //'@getSettings');
      //cy.tick(200000);
      //cy.get(':nth-child(1) > .field-status').should('have.text', 'SUCCESS'), { timeout: 12000 };
      //cy.get(':nth-child(1) > .field-id > a').click();
      //cy.get('.field-status > div > p').click();
      
    });
});