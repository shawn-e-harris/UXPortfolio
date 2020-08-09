/// <reference types = "cypress"/>

describe('Our first suite', () => {
	it('first test', () => {
		cy.visit('/');

		cy.get('.homeDetailImage');
	});
});
