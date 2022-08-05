export class apiTests {
	api200(url) {
		cy.request({
			url: ``,
			failOnStatusCode: false,
		}).then((resp) => {
			expect(resp.status).to.eq(200);
		});
	}

	api400() {
		cy.request({
			url: ``,
			failOnStatusCode: false,
		}).then((resp) => {
			expect(resp.status).to.eq(400);
		});
	}
}
