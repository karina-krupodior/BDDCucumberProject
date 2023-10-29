import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
Given("user is on login page", () => {
  cy.visit("https://trytestingthis.netlify.app/");
});

When("user enters {string} and {string}", (username, password) => {
  cy.get("#uname").clear().type(username);
  cy.get("#pwd").clear().type(password);
});
When("clicks on login button", () => {
  cy.get('[type="submit"]').click();
});

Then("user is navigated to the homepage", () => {
  cy.contains("Login Successful :)");
});
