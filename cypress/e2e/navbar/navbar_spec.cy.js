/// <reference types="cypress" />

const { BASE_URL } = Cypress.env();

describe("MENU FUNCTIONALITY", () => {
    beforeEach(() => {
        cy.visit(`${BASE_URL}`);
    });
    it("Checking is page logo exists", () => {
        cy.get('[data-cy="pageLogo"]').should("have.text", "</ mKropidłowski.pl >");
    });
    it("Checking is navigation work", () => {
        cy.get('[data-cy="navLinks"]')
            .find("li")
            .each(($li) => {
                cy.wrap($li).click();
            });
    });

    it("Checking social links", () => {
        cy.get('[data-cy="socialLinks"]')
            .find("li > a")
            .each(($a) => {
                const href = $a.prop("href");
                cy.log(`Clicking link: ${href}`);
            });
    });
});
