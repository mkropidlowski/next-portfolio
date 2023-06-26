/// <reference types="cypress" />

const { BASE_URL } = Cypress.env();

describe("Checking Contact Form", () => {
    beforeEach(() => {
        cy.visit(`${BASE_URL}`);
    });

    it("Typing incorrect data/empty input", () => {
        cy.get('[data-cy="contactForm"]').scrollIntoView();

        cy.get('[data-cy="userName"]').type("Jan Kowalski", { delay: 100, force: true });
        cy.get('[data-cy="submitFormButton"]').click({ force: true });
        cy.get('[data-cy="userName"]').clear();
        cy.get(".contactForm_errorText__zmUut").eq(0).should("have.text", "Pole imię i nazwisko jest wymagane.");

        cy.get('[data-cy="emailAdress"]').type("test@test.pl", { delay: 100, force: true });
        cy.get('[data-cy="submitFormButton"]').click({ force: true });
        cy.get('[data-cy="emailAdress"]').clear();
        cy.get(".contactForm_errorText__zmUut").eq(1).should("have.text", "Pole email jest wymagane.");

        cy.get('[data-cy="userMessage"]').type("Example message", { delay: 100, force: true });
        cy.get('[data-cy="submitFormButton"]').click({ force: true });
        cy.get('[data-cy="userMessage"]').clear();
        cy.get(".contactForm_errorText__zmUut").eq(2).should("have.text", "Pole wiadomość jest wymagane.");
    });
    it("Sending correct data", () => {
        cy.get('[data-cy="contactForm"]').scrollIntoView();

        cy.get('[data-cy="userName"]').type("Jan Kowalski", { delay: 100, force: true });
        cy.get('[data-cy="emailAdress"]').type("test@test.pl", { delay: 100, force: true });
        cy.get('[data-cy="userMessage"]').type("Example message", { delay: 100, force: true });
        cy.get('[data-cy="submitFormButton"]').click({ force: true });
    });
});
