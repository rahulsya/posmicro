import tokens from "../fixtures/tokens.json";
describe("testing create order", () => {
  beforeEach(() => {
    cy.SetLocalstorage("tokens", JSON.stringify(tokens));
  });

  it("menampilkan halaman utama web", () => {
    cy.visit("/");
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("Ditampilkan data produk pada halaman utama", () => {
    // should render 8 items /page
    cy.get('[data-testid="product-item"]').should("have.length", 8);
  });

  it("memilih item produk dan membuat order dengan pembayaran secara cash ", () => {
    cy.get(".grid > :nth-child(1)").click();
    cy.get(".grid > :nth-child(2)").click();
    cy.get('[data-testid="cart-item"]').should("have.length", 2);
    cy.get('[data-testid="button-test"]').should("be.visible");
    cy.get('[data-testid="button-test"]').click();
  });

  it("memilih item produk dan membuat order dengan pembayaran secara non cash ", () => {
    cy.get(".grid > :nth-child(1)").click();
    cy.get(".grid > :nth-child(2)").click();
    cy.get('[data-testid="cart-item"]').should("have.length", 2);
    cy.get('[data-testid="button-test"]').should("be.visible");
    cy.contains("Non Cash").click();
    cy.get('[data-testid="button-test"]').click();
    //menampilkan pop up midtrans
    cy.get("#snap-midtrans").should("be.visible");
  });
});
