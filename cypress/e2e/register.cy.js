describe("register test", () => {
  beforeEach(() => {
    cy.visit("/register");
  });

  it("should show alert error when form is not filled", () => {
    cy.contains("Register").click();
    cy.get('[data-testid="error-input"]').should(($item) => {
      expect($item.eq(0)).to.contain("name is Required");
      expect($item.eq(1)).to.contain("email is Required");
      expect($item.eq(2)).to.contain("password is Required");
    });
  });

  it("fill form register account", () => {
    cy.get("#name").type("testing123");
    cy.get("#email").type("testItem@gmail.com");
    cy.get("#password").type("secret12345");

    cy.get('[data-testid="error-input"]').should("have.length", 0);
    cy.contains("Register").click();

    cy.url().should("eq", "http://localhost:3000/Login");
  });
});
