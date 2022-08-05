import { it, describe } from "mocha";
import { step1 } from "../pages/step1";
import { signTests } from "../pages/sign";
import { reviewTests } from "../pages/review";
import { apiTests } from "../general/apiTests";
import { rataFlow } from "../general/rataFlow";

//npx cypress run --config-file local.config.js
//npx cypress open --config-file local.config.js

let id = Cypress.config("id");
let url = Cypress.config("url") + "/signature";
const stepOne = new step1();
const review = new reviewTests();
const sign = new signTests();
const apiTest = new apiTests();
const general = new rataFlow();

describe("Campaign flow test flow test", () => {
	beforeEach(() => {
		
	});

	/* RUN THIS TEST ONLY IF USER IS EXPIRE */
	it("test if user is expired, show the expire window", () => {});

	it("test 404 page if dosn't have id", () => {
		apiTest.api200();
		cy.visit(url);
		stepOne.testSignatureLoader();
		cy.get('[data-cy="loader-404"]').should("be.visible", { force: true });

	});

	it("Is the footer accurate?", () => {
		general.signatureNavigate(url, id);
		apiTest.api200();
		stepOne.testSignatureLoader();
		cy.get(".footerMainContent").should("be.visible", { force: true });
		cy.get(".footerList > :nth-child(1) > a").should(
			"have.text",
			"TERMS OF USE",
			{ force: true }
		);
		cy.get(".footerList > :nth-child(2) > a").should(
			"have.text",
			"PRIVACY POLICY",
			{ force: true }
		);
		cy.get(":nth-child(3) > a").should("have.text", "ABOUT US", {
			force: true,
		});
		cy.get(".footerCopyright > p").should("be.visible");
		cy.get(".firstCol > img").should("be.visible");
		cy.get(".firstCol > h5").should("be.visible");
	});

	it.skip("Continue and back flow works", () => {
		general.signatureNavigate(url, id);
		apiTest.api200();
		stepOne.testSignatureLoader();
		//stepOne.testPmLoader();
		cy.tick(3000);
		cy.get(".offerSection").should("be.visible");
		cy.get('[data-cy="goToReview"]').click({ force: true });
		cy.get('[data-cy="reviewContent"]', { timeout: 10000 }).should(
			"be.visible", { force: true }
		);
		cy.get('[data-cy="goToSign"]').click({ force: true });
		cy.get('[data-cy="signContent"]', { timeout: 20000 }).should("be.visible", {
			force: true,
		});
		cy.get('[data-cy="backToReview"]', { timeout: 20000 }).click({
			force: true,
		});
		cy.get('[data-cy="reviewContent"]', { timeout: 10000 }).should(
			"be.visible",
			{
				force: true,
			}
		);
		cy.get('[data-cy="backToOffer"]', { timeout: 3000 }).click({
			force: true,
			timeout: 10000,
		});
		cy.get(".offerSection", { timeout: 10000 }).should("be.visible", {
			force: true,
		});
	});

	it.skip("Check if review error messages shows when form is empty", () => {
		general.signatureNavigate(url, id);
		stepOne.testSignatureLoader();
		//stepOne.testPmLoader();
		cy.get(".offerSection").should("be.visible");
		cy.get('[data-cy="goToReview"]').click({ force: true });
		cy.get('[data-cy="reviewContent"]', { timeout: 10000 }).should(
			"be.visible"
		);
		review.clearDataReview();
		cy.get('[data-cy="reviewContent"]').click({ force: true });
		review.testErrorsShow();
		cy.get('[data-cy="backToOffer"]').click({ force: true });
	});

	it("test if checkboxes and signature are empty cant continue", () => {
		general.signatureNavigate(url, id);
		apiTest.api400;
		stepOne.testSignatureLoader();
		//stepOne.testPmLoader();

		cy.get(".offerSection").should("be.visible");
		cy.get('[data-cy="goToReview"]').click({ force: true });

		cy.get('[data-cy="reviewContent"]', { timeout: 10000 }).should(
			"be.visible"
		);
		cy.get('[data-cy="goToSign"]').click({ force: true });

		cy.get('[data-cy="signContent"]', { timeout: 20000 }).should("be.visible", {
			force: true,
		});
		cy.get('[data-cy="goToCongrats"]', { timeout: 1000 }).click({
			force: true,
		});
		cy.get('[data-cy="checkboxError"]').should("be.visible", { force: true });
		cy.get('[data-cy="firmErrorMsg"]').should("be.visible", {
			force: true,
			timeout: 3000,
		});

		cy.get('[data-cy="backToReview"]', { timeout: 20000 }).click({
			force: true,
			timeout: 5000,
		});
		cy.get('[data-cy="reviewContent"]', { timeout: 10000 }).should(
			"be.visible",
			{
				force: true,
			}
		);
		cy.get('[data-cy="backToOffer"]', { timeout: 3000 }).click({
			force: true,
			timeout: 10000,
		});
     	cy.get('[data-cy="offerSection"]', { timeout: 10000 }).should(
			"be.visible",
			{
				force: true,
			}
		);
	});

	it.skip("Is the information on the form correct? are the signatures displayed correctly?", () => {});

	it.skip("Can I edit information on a revisited step of the process?", () => {});

	it.skip("check the flow of the rata flow if everything is ok", () => {
		stepOne.webNavigate(url);
		/*
		step.testSignatureLoader();
		step.testPmLoader();
		*/
		cy.wait(5000);

		//STEP 1

		cy.get(".offerSection").should("be.visible");
		cy.get(".propertyLogo").should("be.visible");
		cy.get("strong").should("exist");
		cy.scrollTo("bottom");
		cy.get(".parentButton").click();
		cy.get("#flush-collapseOne > :nth-child(1)").should("be.visible");
		cy.scrollTo(0, 500);
		cy.scrollTo("top");
		cy.get(".continueButton").click();
		//stepOne.testPmLoader();
		cy.get(".contentContainer").should("be.visible");

		//STEP 2

		review.testDataReviewIsPrinted();
		review.testPassToSign();

		//STEP 3
		sign.testDataSignIsPrinted();
		cy.scrollTo(0, 500);
		cy.scrollTo("bottom");
		sign.testCheckboxAreInvalid();
		sign.testCheckboxAreClickeable();
		sign.testCheckboxAreValid();
		cy.clearCookies();
	});
});
