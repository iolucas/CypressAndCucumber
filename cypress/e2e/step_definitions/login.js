import { Given, When, Then, } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the login page', () => {
  cy.visit('https://loginxp.vercel.app')
})
When("I submit my credentials with {string} and {string}", function (user, password) {
  user 
    ? cy.get('input[name="user"]').type(user)
    : cy.log('User is empty')
  password
    ? cy.get('input[name="pass"]').type(password)
    : cy.log('Password is empty')
  cy.contains('button', 'Entrar').click()
})
Then('I should be authenticated on the application', () => {
  cy.get('.swal2-html-container')
    .should('be.visible')
    .should('have.text', 'Suas credenciais são válidas :)')
})
Then('I should see an error message {string}', function (notice) {
  cy.contains(notice)
})