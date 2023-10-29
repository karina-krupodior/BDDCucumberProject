Feature: test login functionality

  Scenario Outline: test login with valid credentials
    Given user is on login page
    When user enters '<username>' and '<password>'
    And clicks on login button
    Then user is navigated to the homepage

    Examples: 
      | username | password |
      | test     | test     |
      | karina   | karina   |
      | here     | here     |
