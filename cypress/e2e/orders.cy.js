import tokens from "../fixtures/tokens.json";
describe("order history", () => {
  beforeEach(() => {
    cy.SetLocalstorage("tokens", JSON.stringify(tokens));
  });

  it("Menampilkan Halaman Riwayat Order", () => {
    cy.visit("/order-history");
    cy.url().should("eq", "http://localhost:3000/order-history");
  });
  it("Menampilkan data riwayat order yang dilakukan user", () => {
    cy.get('[data-testid="orderhistory-item"]').should("be.visible");

    // click status order
    cy.get(":nth-child(3) > :nth-child(3)").click();
    cy.get(":nth-child(3) > :nth-child(4)").click();
    cy.get(":nth-child(3) > :nth-child(5)").click();

    cy.get(
      ".mt-4 > .bg-white > :nth-child(1) > :nth-child(3) > :nth-child(2)"
    ).click();
    cy.get(":nth-child(1) > .flex > :nth-child(2) > .px-4").click();
  });

  it("Mengubah Status Order Pesanan yang dilakukan user", () => {
    cy.url().should("eq", "http://localhost:3000/detail-order/60");
    cy.get("#status_order").select("SUCCESS").should("have.value", "SUCCESS");
    cy.get("#courier_number").type("666111");
    cy.get(".text-center").click();
    cy.get(".Toastify__toast-body").should("be.visible");
  });
});
