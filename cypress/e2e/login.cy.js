describe("Módulo Login", () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });

  it("TC04 - Login con usuario bloqueado", () => {
    cy.visit("https://www.saucedemo.com/");

    cy.get('[data-test="username"]').as("userInput");

    cy.get('[data-test="password"]').as("passwordInput");

    cy.get("@userInput").type("locked_out_user");

    cy.get("@passwordInput").type("secret_sauce");

    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "locked out");
  });

  it("TC05 - Logout desde menú hamburguesa", () => {
    cy.login("standard_user", "secret_sauce");

    cy.url().should("include", "/inventory");

    cy.get("#react-burger-menu-btn").click();

    cy.get("#logout_sidebar_link").should("be.visible").click();

    cy.url().should("eq", "https://www.saucedemo.com/");

    cy.get('[data-test="username"]').should("be.visible");
  });
});
