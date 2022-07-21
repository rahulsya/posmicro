describe("Login testing", () => {
  it("Melengkapi form login dan mengarahkan pada halaman utama", () => {
    cy.visit("/login");

    cy.contains("Login").click();
    cy.contains("email is Required");
    cy.contains("password is Required");

    //input invaid data
    cy.get("#email").type("rahuls@gmail.com");
    cy.get("#password").type("qwerty1234");
    cy.contains("Login").click();

    cy.contains("user not found").should("be.visible");

    // input valid data
    cy.get("#email").clear();
    cy.get("#email").type("rahuls@gmail.com");
    cy.get("#password").clear();
    cy.get("#password").type("qwerty123");
    cy.contains("Login").click();
  });

  it("Ditampilkan Alamat utama setelah login ", () => {
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("check data token yang tersimpan pada localstorage setelah login", () => {
    cy.checkToken(1);
  });

  it("Melakukan logout dan diarahkan pada halaman login kembali", () => {
    cy.contains("Logout").click();
    cy.url().should("eq", "http://localhost:3000/login");
  });
  it("data token yang tersimpan pada localstorage sudah null", () => {
    cy.checkToken(0);
  });
});
