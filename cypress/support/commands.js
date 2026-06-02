Cypress.Commands.add("login", (username, password) => {
  cy.visit("https://www.saucedemo.com/");

  cy.get('[data-test="username"]').should("be.visible").type(username);

  cy.get('[data-test="password"]').should("be.visible").type(password);

  cy.get('[data-test="login-button"]').click();
});
