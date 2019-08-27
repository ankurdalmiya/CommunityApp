Feature: Testing the Login Scenario

  I want to test the login scenario of Community App

  Scenario: Testing the Login Scenario of Community App

    Given I am on the Login Page of Community Admin panel
    When I enter email as "<email>" and password as "<password>"

    Examples:
      | email         | password | sts
      | abc@gmail.com | 123456   |
      | sss@gmail.com | 123      |

    Then After clicking on Login button
    Then I should <status>










