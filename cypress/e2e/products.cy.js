describe("products testing", () => {
  beforeEach(() => {
    cy.fixture("tokens.json", { encoding: null }).as("datatokens");
    cy.SetLocalstorage("tokens", JSON.stringify("@datatokens"));
    cy.visit("/products");
  });
  it("should have data products", () => {
    // should render 8 items /page
    cy.get('[data-testid="product-item"]').should("have.length", 8);
  });

  it("should can edit data product", () => {
    // click btn
    cy.get(":nth-child(1) > .flex > .bg-blue-400").click();
    cy.get('[data-testid="edit-form"]').should("be.visible");
    // it("should have value in each input form", () => {
    cy.get("#name").invoke("val").should("not.be.empty");
    cy.get("#price").invoke("val").should("not.be.empty");
    cy.get("#amount_stock").invoke("val").should("not.be.empty");
    cy.get("#cateogry_id").select("7").should("have.value", "7");

    cy.get('[data-testid="edit-form"] > :nth-child(2) > .py-2').click();
    cy.contains("update product success").should("be.visible");
    cy.get('[data-testid="edit-form"] > .flex > .px-4').click();
  });
  //   cy.visit("/product");

  it("Add new data product", () => {
    cy.contains("Add Product").click();
    cy.get('[data-testid="input-form-product"]').should("be.visible");
    cy.get("#name").type("product test");
    cy.get("#price").type(1000);
    cy.get("#amount_stock").type(10);
    cy.get("#cateogry_id").select("7").should("have.value", "7");
    cy.fixture("dummyimage.jpg", { encoding: null }).as("myFixture");
    cy.get("#image").selectFile("@myFixture");
    cy.get("form > .py-2").click();
    cy.contains("success add new product").should("be.visible");
  });

  it("delete data product", () => {
    cy.contains("product test").should("be.visible");
    cy.get(":nth-child(1) > .flex > .bg-red-400").click();
  });
});
