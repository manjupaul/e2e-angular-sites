# calculator.feature
Feature: Calculator

  A super calculator that performs operations on two numbers.

  Scenario: Add 1 and 2 numbers
    Given I have navigated to the calculator
    When I add two numbers "1" and "2"
    Then the displayed output should be "3"

  Scenario: Add 3 and 2 numbers
    Given I have navigated to the calculator
    When I add two numbers "3" and "2"
    Then the displayed output should be "8"
