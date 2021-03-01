describe("books page", () => {
  beforeEach(() => {
    cy.intercept("/data.json", {
      books: [
        {
          isbn: 1,
          title: "Tome 1",
          cover: "tome1.jpg",
          price: 35,
        },
      ],
    }).as("getBooks");
  });
  it("loader", () => {
    cy.visit("/");
    cy.contains("loader...");
  });

  it("loader", () => {
    cy.wait("@getBooks");
    cy.contains("Tome 1");
  });
});
