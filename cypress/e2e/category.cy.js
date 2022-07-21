describe("categories", () => {
  beforeEach(() => {
    cy.fixture("tokens.json", { encoding: null }).as("datatokens");
    cy.SetLocalstorage("tokens", JSON.stringify("@datatokens"));
  });

  it("Menampilkan halaman produk", () => {
    cy.visit("/products");
  });
  it("Menampilkan komponen data kategori", () => {
    cy.contains("Manage Categories").click();
    cy.get('[data-testid="categories-card"]').should("be.visible");
  });

  it("Menambahkan data kategori baru", () => {
    cy.get("form > .py-2").click();
    cy.get('[data-testid="error-input"]').should("be.visible");
    cy.get("#category").type("test category");
    cy.get("form > .py-2").click();
  });

  it("Mengubah data kategori", () => {
    cy.get(":nth-child(7) > .py-4 > div > .bg-blue-500").click();
    cy.get("#name").clear();
    cy.get("#name").type("edited category");
    cy.get(".mt-4 > .py-2").click();
  });

  it("Menghapus data kategori", () => {
    cy.contains("edited category").should("be.visible");
    cy.get(":nth-child(7) > .py-4 > div > .bg-red-400").click();
  });
});
