describe("Módulo Checkout", () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });

  it("TC13 - Completar checkout con datos válidos", () => {
    cy.login("standard_user", "secret_sauce");

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get(".shopping_cart_link").click();

    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type("Juan");

    cy.get('[data-test="lastName"]').type("Perez");

    cy.get('[data-test="postalCode"]').type("5000");

    cy.get('[data-test="continue"]').click();

    cy.url().should("include", "checkout-step-two");

    cy.get('[data-test="finish"]').scrollIntoView().click();

    cy.contains("Thank you for your order!").should("be.visible");
  });

  it("TC14 - Checkout sin completar campos obligatorios", () => {
    cy.login("standard_user", "secret_sauce");

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get(".shopping_cart_link").click();

    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "First Name is required");
  });
});
