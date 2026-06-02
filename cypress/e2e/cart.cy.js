describe("Módulo Cart", () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });

  it("TC11 - Agregar múltiples productos y verificar contador", () => {
    cy.login("standard_user", "secret_sauce");

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
      .scrollIntoView()
      .click();

    cy.get(".shopping_cart_badge").should("have.text", "3");
  });

  it("TC12 - Eliminar un producto desde el carrito", () => {
    cy.login("standard_user", "secret_sauce");

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get(".shopping_cart_link").click();

    cy.get(".cart_item").should("have.length", 1);

    cy.get('[data-test="remove-sauce-labs-backpack"]').click();

    cy.get(".cart_item").should("not.exist");
  });
});
