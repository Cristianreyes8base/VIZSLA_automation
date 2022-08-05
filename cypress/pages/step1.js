export class step1 {
	logo_url =
		"https://staging.vizsla.com/auth/login";

	localHostNavigate(id) {
		cy.visit("http://localhost:4200/signature?signature_id=" + id);
	}

	webNavigate(url) {
		cy.visit(url);
	}
    //test first loader  
	testSignatureLoader() {
		cy.get('[data-cy="signature-loader"]').should("be.visible",{ force: true });
		cy.tick(6000);
		cy.get('[data-cy="signature-loader"]').should("be.hidden",{ force: true });
	}

	testPmLoader() {
		cy.get('[data-cy="logo-loader"]').should("be.visible",{ force: true });
		cy.tick(6000);
		cy.get('[data-cy="logo-loader"]', { timeout: 30000 }).should("be.hidden", {force:true});
	}

	validateLogo() {
		cy.wrap({ src: "bar" }).its("src").should("eq", this.logo_url);
	}

	testApi() {
		cy.request("");
	}
}
