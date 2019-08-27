Feature: Testing the Login Scenario

  I want to test the login scenario of Community App

  Scenario Outline: Scenario Outline name: Testing the Login Scenario of Community App

    Given I am on the Login Page of Community Admin panel
    When I login using my "<email>" and "<password>"

    Examples:
      | email         | password |
      | sss@gmail.com | 123      |
      | abc@gmail.com | abcdef   |
