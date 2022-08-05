export class reviewTests {
	testDataReviewIsPrinted() {
		cy.tick(5000);
		cy.get('[data-cy="firstNameInput"]').invoke("val").should("not.be.empty");
		cy.get('[data-cy="lastNameInput"]').invoke("val").should("not.be.empty");
		cy.get('[data-cy="adressInput"]').invoke("val").should("not.be.empty");
		cy.get('[data-cy="stateInput"]').invoke("val").should("not.be.empty");
		cy.get('[data-cy="cityInput"]').invoke("val").should("not.be.empty");
		cy.get('[data-cy="zipInput"]').invoke("val").should("not.be.empty");
		cy.get('[data-cy="emailInput"]').invoke("val").should("not.be.empty");
		cy.get('[data-cy="phoneInput"]').invoke("val").should("not.be.empty");
	}

	testPassToSign() {
		cy.get(".continueButton").click();
		step.testPmLoader();
		cy.get(".contentContainer").should("be.visible");
	}

	clearDataReview() {
		cy.wait(5000);
		cy.get('[data-cy="firstNameInput"]').clear({ force: true });
		cy.get('[data-cy="lastNameInput"]').clear({ force: true });
		cy.get('[data-cy="adressInput"]').clear({ force: true });
		cy.get('[data-cy="stateInput"]').clear({ force: true });
		cy.get('[data-cy="cityInput"]').clear({ force: true });
		cy.get('[data-cy="zipInput"]').clear({ force: true });
		cy.get('[data-cy="emailInput"]').clear({ force: true });
		cy.get('[data-cy="phoneInput"]').clear({ force: true });
	}

	testErrorsShow() {
		cy.tick(5000);
		cy.get('[data-cy="firstNameInputError"]').should("be.visible");
		cy.get('[data-cy="lastNameinputError"]').should("be.visible");
		cy.get('[data-cy="adressInputError"]').should("be.visible");
		cy.get('[data-cy="stateInputError"]').should("be.visible");
		cy.get('[data-cy="cityInputError"]').should("be.visible");
		cy.get('[data-cy="zipInputError"]').should("be.visible");
		cy.get('[data-cy="emailInputError"]').should("be.visible");
		cy.get('[data-cy="phoneInputError"]').should("be.visible");
	}

	testReviewValidationForm() {
		cy.get(".continueButton").click();
	}
}
