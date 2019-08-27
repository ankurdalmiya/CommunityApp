Feature: Testing the Login Scenario

  I want to test the login scenario of Community App

  Scenario: Testing the Login Scenario of Community App

    Given I am on the Login Page of Community Admin panel
    When I login using my <email> and <password>

    Examples:
    | email | password | Header 3 |
    | sss@gmail.Com  |   | Value 3  |
    