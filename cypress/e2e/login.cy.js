describe("Login testing", () => {
  it("should fill the login form and redirect to home pages", () => {
    cy.visit("/login");

    cy.contains("Login").click();
    cy.contains("email is Required");
    cy.contains("password is Required");

    cy.get("#email").type("rahuls@gmail.com");
    cy.get("#password").type("qwerty123");
    cy.contains("Login").click();
  });

  it("should be on index url(main page) ", () => {
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("should check tokens on local storage", () => {
    cy.checkToken(1);
  });

  it("should logout after login is successful", () => {
    cy.contains("Logout").click();
    cy.url().should("eq", "http://localhost:3000/login");
  });
  it("should localstorage is null (0)", () => {
    cy.checkToken(0);
  });
});
