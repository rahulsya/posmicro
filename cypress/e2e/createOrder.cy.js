describe("testing create order", () => {
  // beforeEach(() => {
  // });
  // login first
  it("should redirect to login pages ", () => {
    cy.visit("http://localhost:3000/");
    cy.url().should("eq", "http://localhost:3000/Login");
  });
  // fill the login form
  it("fill login form", () => {
    cy.get("#email").type("rahuls@gmail.com");
    cy.get("#password").type("qwerty123");
    cy.contains("Login").click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("should to have data product", () => {
    // should render 8 items /page
    cy.get('[data-testid="product-item"]').should("have.length", 8);
  });

  it("should click item product & create order ", () => {
    cy.get(".grid > :nth-child(1)").click();
    cy.get(".grid > :nth-child(2)").click();
    cy.get('[data-testid="cart-item"]').should("have.length", 2);
    cy.get('[data-testid="button-test"]').should("be.visible");
    cy.get('[data-testid="button-test"]').click();
  });

  it("should click item product & create order with paymentt ", () => {
    cy.get(".grid > :nth-child(1)").click();
    cy.get(".grid > :nth-child(2)").click();
    cy.get('[data-testid="cart-item"]').should("have.length", 2);
    cy.get('[data-testid="button-test"]').should("be.visible");
    cy.contains("Non Cash").click();
    cy.get('[data-testid="button-test"]').click();
    cy.get("#snap-midtrans").should("be.visible");
  });
});
