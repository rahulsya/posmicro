import tokens from "../fixtures/tokens.json";
describe("profile pages", () => {
  beforeEach(() => {
    cy.SetLocalstorage("tokens", JSON.stringify(tokens));
  });

  it("visit profile pages", () => {
    cy.visit("/profile");
  });

  it("Mengubah Data Profil User", () => {
    cy.get('[data-testid="data-profile"]').should("be.visible");
    cy.get("#name").clear();
    cy.get("#name").type("admin");
    cy.get("#email").clear();
    cy.get("#email").type("admin@gmail.com");
    cy.get("#phone_number").clear();
    cy.get("#phone_number").type("08521872931");
    cy.get("#password").clear();
    cy.get("#password").type("qwerty12");
    cy.get(".py-2").click();
    cy.contains("Data profile updated").should("be.visible");

    cy.visit("/profile");
  });

  it("Menambahkan Data Alamat Baru", () => {
    cy.get('[data-testid="address-form"]').should("be.visible");
    cy.get('[data-testid="address-form"] > :nth-child(3)').click();
    cy.get('[data-testid="add_address"]').should("be.visible");

    // fill the from
    cy.get("form > .py-2").click();
    cy.get(':nth-child(1) > [data-testid="error-input"]').should("be.visible");
    cy.get(':nth-child(2) > [data-testid="error-input"]').should("be.visible");
    cy.get("#name_address").type("test address");
    cy.get("#detail_address").type("jln test address no20");
    cy.get("form > .py-2").click();
    // after add address success
    cy.contains("test address").should("be.visible");
  });

  it("Mengubah Data alamat Baru", () => {
    cy.get(".my-2 > .text-green-600").click();
    cy.get('[data-testid="address-form"] > :nth-child(5)').should("be.visible");
    cy.get(":nth-child(2) > #name").clear();
    cy.get(":nth-child(3) > #detail_address").clear();
    cy.get(":nth-child(2) > #name").type("edited address");
    cy.get(":nth-child(3) > #detail_address").clear("jln edited address");
    cy.get(":nth-child(5) > .py-2").click();
    cy.contains("edited address").should("be.visible");
  });

  it("Menghapus Data alamat baru", () => {
    cy.get(".my-2 > .flex > .cursor-pointer").click();
  });
});
