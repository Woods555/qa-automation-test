Feature: Login
  As a SauceDemo user
  I want to authenticate into the application
  So that I can access the product inventory

@smoke
@successLoginPositive
  Scenario: Successful login with valid credentials
    Given I am on the SauceDemo login page
    When I login with username "standard_user" and password "secret_sauce"
    Then I should see the products page
@smoke
@sucessLoginNegative
  Scenario: Login fails with invalid credentials
    Given I am on the SauceDemo login page
    When I login with username "invalid_user" and password "wrong_password"
    Then I should see the login error message "Username and password do not match"

@failLoginExample
  Scenario: Login fails with invalid credentials to fail as example
    Given I am on the SauceDemo login page
    When I login with username "invalid_user" and password "wrong_password"
    Then I should see the login error message "intentionally incorrect message"
