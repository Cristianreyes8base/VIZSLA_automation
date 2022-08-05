export class rataFlow {
	signatureNavigate(url, id) {
		cy.visit(url + "?signature_id=" + id);
	}

	webNavigate(url) {
		cy.visit(url);
	}
}
