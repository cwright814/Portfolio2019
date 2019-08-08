// https://docs.cypress.io/api/introduction/api.html

describe("Barebones Test Example", () => {
    it("Visits the app root url", () => {
        cy.visit("/");
        cy.contains("h1", "Christopher's Portfolio");
    });

    it("Visits the app /experience url", () => {
        cy.visit("/experience");
        cy.contains("h1", "My Experience");
    });

    it("Visits the app /demos url", () => {
        cy.visit("/demos");
        cy.contains("h1", "Demonstrations");
    });
});
