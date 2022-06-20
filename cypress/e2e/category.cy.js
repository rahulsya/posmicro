describe("categories", () => {
  beforeEach(() => {
    cy.fixture("tokens.json", { encoding: null }).as("datatokens");
    cy.SetLocalstorage("tokens", JSON.stringify("@datatokens"));
  });

  it("visit page products", () => {
    cy.visit("/products");
  });
  it("open form category", () => {
    cy.contains("Manage Categories").click();
    cy.get('[data-testid="categories-card"]').should("be.visible");
  });

  it("add new category", () => {
    cy.get("form > .py-2").click();
    cy.get('[data-testid="error-input"]').should("be.visible");
    cy.get("#category").type("test category");
    cy.get("form > .py-2").click();
  });

  it("edit category", () => {
    cy.get(":nth-child(7) > .py-4 > div > .bg-blue-500").click();
    cy.get("#name").clear();
    cy.get("#name").type("edited category");
    cy.get(".mt-4 > .py-2").click();
  });

  it("delete category", () => {
    cy.contains("edited category").should("be.visible");
    cy.get(":nth-child(7) > .py-4 > div > .bg-red-400").click();
  });
});
