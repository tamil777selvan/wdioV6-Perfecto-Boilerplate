Feature: Calculator

  Scenario: Add two numbers
    Given I start "Calculator" application
    When I add "5" and "5"
    Then I should get "10" as result