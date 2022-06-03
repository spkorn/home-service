// import {buildUser} from "../../support/generate.js";

// happy case#1 - test successful registration (intended version)
// it("user should register successfully", () => {
// const user = buildUser();
// 	cy.visit("http://localhost:3000/register").viewport(1500, 660);
//     cy.request({
//     url: "http://localhost:4000/auth/register",
//     method: "POST",
//     body: user
//     });
//     cy.get("#name").type(user.name);
//     cy.get("#phoneNumber").type(user.phoneNumber);
//     cy.get("#email").type(user.email);
//     cy.get("#password").type(user.password);
//     cy.get("#conditionAndPrivacy").click();
//     cy.get(".btn-primary").click();
//     cy.url().should("eq", "http://localhost:3000/login");
// });

// happy case #1.1 - test successful registration (hard code version)
// it("user should register successfully", () => {
//   cy.visit("http://localhost:3000/register").viewport(1500, 660);
//   cy.get("#name").type("Chadchart Sittipun");
//   cy.get("#phoneNumber").type("0879316420");
//   cy.get("#email").type("Chadchart@sittipun.com");
//   cy.get("#password").type("Chat888Chard");
//   cy.get("#conditionAndPrivacy").click();
//   cy.get(".btn-primary").click();
//   cy.url().should("eq", "http://localhost:3000/login");
// });

// edge case #1 - test unsuccessful registration due to incomplete filling
it("user should not be able to register because of one missing filling", () => {
  cy.visit("http://localhost:3000/register").viewport(1500, 660);
  cy.get("#name").type("Chadchart Sittipun");
  cy.get("#phoneNumber").type("0879316420");
  cy.get("#email").type("Chadchart@sittipun.com");
  cy.get("#password").type("Chat888Chard");
  cy.get(".btn-primary").click();
  cy.get(".form-actions > .text-red")
  cy.url().should("eq", "http://localhost:3000/register");
});


// edge case #2 - test unsuccessful registration due to incomplete filling
it("user should not be able to register", () => {
  cy.visit("http://localhost:3000/register").viewport(1500, 660);
  cy.get("#name").type("Chadchart");
  cy.get("#phoneNumber").type("0879316428768768768700000");
  cy.get("#email").type("Chadchartsittipun.com");
  cy.get("#password").type("1234");
  cy.get("#conditionAndPrivacy").click();
  cy.get(".btn-primary").click();
  cy.get(":nth-child(2) > label > .text-xs");
  cy.get(":nth-child(3) > label > .text-xs");
  cy.get(":nth-child(4) > label > .text-xs");
  cy.get(":nth-child(5) > :nth-child(1) > .text-xs");
  cy.get(".form-actions > .text-red");
  cy.url().should("eq", "http://localhost:3000/register");
});



