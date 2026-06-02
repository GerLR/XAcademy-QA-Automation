describe("Módulo Inventory", () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });

  it("TC07 - Verificar imágenes de productos", () => {
    cy.login("standard_user", "secret_sauce");

    cy.get(".inventory_item").should("have.length", 6);

    cy.get(".inventory_item_img img").should("have.length", 6);

    cy.get(".inventory_item_img img")
      .first()
      .should("be.visible")
      .and("have.attr", "src");
  });

  it("TC10 - Agregar un producto al carrito", () => {
    cy.login("standard_user", "secret_sauce");

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .scrollIntoView()
      .click();

    cy.get(".shopping_cart_badge").should("be.visible").and("have.text", "1");
  });
});
