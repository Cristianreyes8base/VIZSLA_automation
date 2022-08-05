export class signTests {
	testDataSignIsPrinted() {
		cy.wait(5000);
		cy.get(
			":nth-child(2) > .cardContent > .listContainer > :nth-child(1) > :nth-child(2)"
		).should("not.be.empty");
		cy.get(
			":nth-child(2) > .cardContent > .listContainer > :nth-child(2) > :nth-child(2)"
		).should("not.be.empty");
		cy.get(".dataText").should("not.be.empty");
		cy.get(
			":nth-child(3) > .cardContent > .listContainer > :nth-child(2) > :nth-child(2)"
		).should("not.be.empty");
		cy.get(
			":nth-child(3) > .cardContent > .listContainer > :nth-child(3) > :nth-child(2)"
		).should("not.be.empty");
		cy.get(
			":nth-child(3) > .cardContent > .listContainer > :nth-child(4) > :nth-child(2)"
		).should("not.be.empty");

		cy.get(
			":nth-child(4) > .cardContent > .listContainer > :nth-child(1) > :nth-child(2)"
		);
		cy.get(
			":nth-child(4) > .cardContent > .listContainer > :nth-child(2) > :nth-child(2)"
		);
		cy.get(
			":nth-child(4) > .cardContent > .listContainer > :nth-child(3) > :nth-child(2)"
		);
	}

	testCheckboxAreInvalid() {
		cy.get(":nth-child(1) > .control > .checkbox").should(
			"have.class",
			"ng-invalid"
		);
		cy.get(":nth-child(2) > .control > .checkbox").should(
			"have.class",
			"ng-invalid"
		);
		cy.get(":nth-child(3) > .control > .checkbox").should(
			"have.class",
			"ng-invalid"
		);
		cy.get(":nth-child(4) > .control > .checkbox").should(
			"have.class",
			"ng-invalid"
		);
	}

	testCheckboxAreClickeable() {
		cy.get(":nth-child(1) > .control > .control_indicator").click();
		cy.get(":nth-child(2) > .control > .control_indicator").click();
		cy.get(":nth-child(3) > .control > .control_indicator").click();
		cy.get(":nth-child(4) > .control > .control_indicator").click();
	}

	testCheckboxAreValid() {
		cy.get(":nth-child(1) > .control > .checkbox").should(
			"have.class",
			"ng-valid"
		);
		cy.get(":nth-child(2) > .control > .checkbox").should(
			"have.class",
			"ng-valid"
		);
		cy.get(":nth-child(3) > .control > .checkbox").should(
			"have.class",
			"ng-valid"
		);
		cy.get(":nth-child(4) > .control > .checkbox").should(
			"have.class",
			"ng-valid"
		);
	}

	typeSignature(name) {
		cy.get("#firm").should("be.empty");
		cy.get("#firm").type(name);
	}

	testFirmWasFilled(firm) {
		cy.get("#firm_text").should("have.text", firm);
	}

	testInitialsWasFilled(sign) {
		cy.get("#initials").should("have.text", sign);
	}
}
