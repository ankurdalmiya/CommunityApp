Feature: Testing the Login Scenario

  I want to test the login scenario of Community App

  Scenario: Testing the Login Scenario of Community App

    Given I am on the Login Page of Community Admin panel
    When I login using my <email> and <password>

    Examples:
    | email | Header 2 | Header 3 |
    | Value 1  | Value 2  | Value 3  |
    