Feature: Login

    As a regular user I want to login to the application
    So that I can access my account and exclusive features of the application

    Background:
        Given I am on the login page

    Scenario: Login with valid credentials
        When I submit my credentials with "qa" and "xperience"
        Then I should be authenticated on the application
    
    Scenario Outline: Login attempts

        When I submit my credentials with "<username>" and "<password>"
        Then I should see an error message "<message>"

        Examples:
            | username | password | message                        |
            | qa       | abc123   | Oops! Credenciais inválidas :( |
            | teste    | abc123   | Oops! Credenciais inválidas :( |
            |          | 123456   | Informe o seu nome de usuário! |
            | qa       |          | Informe a sua senha secreta!   |

