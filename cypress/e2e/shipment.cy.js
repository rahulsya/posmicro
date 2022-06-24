import tokens from "../fixtures/tokens.json";
describe("shipment", () => {
  beforeEach(() => {
    cy.SetLocalstorage("tokens", JSON.stringify(tokens));
  });

  it("visit the prodcuts pages", () => {
    cy.visit("/");
    cy.url().should("eq", "http://localhost:3000/");
  });
  it("select products items", () => {
    cy.get('[data-testid="product-item"]:nth-child(1)').click();
    cy.get('[data-testid="product-item"]:nth-child(2)').click();
    cy.get('[data-testid="cart-item"]').should("have.length", 2);
    cy.get('[data-testid="button-test"]').should("be.visible");
  });
  it("select shipping method", () => {
    cy.contains("Courier Service").click();
    cy.get('[data-testid="button-test"]').click();
  });
  it("select fill form shipping", () => {
    cy.get("#province")
      .select("6.DKI Jakarta")
      .should("have.value", "6.DKI Jakarta");
    cy.get("#city").should("be.visible");
    cy.get("#city")
      .select("154.Jakarta Timur")
      .should("have.value", "154.Jakarta Timur");
    //   select alaamt
    cy.get(":nth-child(5) > .cursor-pointer").should("be.visible");
    cy.get(":nth-child(5) > .cursor-pointer").click();

    // select courier
    cy.get(".mb-3 > :nth-child(2)").should("be.visible");
    cy.get(".mb-3 > :nth-child(2)").click();
    cy.get(":nth-child(13) > :nth-child(2)").should("be.visible");
    cy.get(":nth-child(13) > :nth-child(2)").click();
    cy.get('[data-testid="button-test"]').click();
    cy.get("#snap-midtrans").should("be.visible");
  });
});
