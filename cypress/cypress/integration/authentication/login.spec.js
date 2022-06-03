// happy case#1 - test successful login
it("user should login successfully", () => {
    cy.visit("http://localhost:3000/login").viewport(1500, 660);
    cy.get("#email").type("korn-supakorn@gmail.com");
    cy.get("#password").type("kornsupakorn");
    cy.get(".btn-primary").click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  //edge case#1- test unsuccessful login due to wrong username and password
  it("user should not be able to login", () => {
    cy.visit("http://localhost:3000/login").viewport(1500, 660);
    cy.get("#email").type("parn@gmail.com");
    cy.get("#password").type("eieieueue");
    cy.get(".btn-primary").click();
    cy.get(".form-actions > :nth-child(2)");
    cy.url().should("eq", "http://localhost:3000/login");
  });