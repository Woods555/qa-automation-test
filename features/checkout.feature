Feature: Checkout
  As a SauceDemo user
  I want to buy a product
  So that I can complete an order successfully

@regression
@buySingleProductPositive
  Scenario: Complete checkout for a single product
    Given I am logged into SauceDemo as "standard_user"
    When I add the product "Sauce Labs Backpack" to the cart
    And I open the cart
    And I proceed to checkout
    And I complete checkout information with first name "Ignacio", last name "Heredia" and postal code "5000"
    And I finish the order
    Then I should see the order confirmation message "Thank you for your order!"
