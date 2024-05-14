import { Given, When, Then, } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the login page', () => {
  cy.visit('https://loginxp.vercel.app')
})
Then('I should be authenticated on the application', () => {
  cy.get('.swal2-html-container')
    .should('be.visible')
    .should('have.text', 'Suas credenciais são válidas :)')
})
Then('I should see an error message {string}', function (notice) {
  cy.contains(notice)
})
When('I submit my credentials:', function (dataTable) {
  const user = dataTable.rowsHash()
  user.username
    ? cy.get('input[name="user"]').type(user.username)
    : cy.log('User is empty')
  user.password
    ? cy.get('input[name="pass"]').type(user.password)
    : cy.log('Password is empty')
  cy.contains('button', 'Entrar').click()
})