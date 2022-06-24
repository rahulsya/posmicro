import tokens from "../fixtures/tokens.json";
describe("dashboard page test", () => {
  beforeEach(() => {
    cy.SetLocalstorage("tokens", JSON.stringify(tokens));
  });

  it("should visit dashboard page", () => {
    cy.visit("/dashboard");
    cy.url().should("eq", "http://localhost:3000/dashboard");
  });

  it("show reports cards", () => {
    cy.get(".grid > :nth-child(1)").should("be.visible");
    cy.get(".grid > :nth-child(2)").should("be.visible");
    cy.get(".grid > :nth-child(3)").should("be.visible");
  });

  it("should search order report by invoice id, and press enter key", () => {
    // input text
    // invoice number 221550905
    cy.get(".pt-2 > :nth-child(1) > .w-full").type(`221550905{enter}`);
    cy.contains("221550905").should("be.visible");
    // reset button click
    cy.get(".text-center").click();
    // search by date
    cy.get(".pt-2 > :nth-child(3) > .w-full").type(`2022-05-13`);
    cy.get(".pt-2 > :nth-child(1) > .w-full").type(" {enter}"); //err
  });

  it("filter reports by status order", () => {
    // success
    cy.get(".items-center > :nth-child(3)").click();
    cy.contains("SUCCESS").should("be.visible");
    // error
    cy.get(".items-center > :nth-child(4)").click();
    cy.contains("PROCESS").should("be.visible");
    // cancel
    cy.get(".items-center > :nth-child(5)").click();
    cy.contains("CANCEL").should("be.visible");

    // reset button click
    cy.get(".text-center").click();
  });
});
