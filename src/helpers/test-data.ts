export const users = {
  standard: {
    username: 'standard_user',
    password: 'secret_sauce'
  },
  invalid: {
    username: 'invalid_user',
    password: 'wrong_password'
  }
} as const;

export const checkoutCustomer = {
  firstName: 'Ignacio',
  lastName: 'Heredia',
  postalCode: '5000'
} as const;

export const products = {
  backpack: 'Sauce Labs Backpack'
} as const;

export const expectedMessages = {
  inventoryTitle: 'Products',
  checkoutConfirmation: 'Thank you for your order!',
  invalidLogin: 'Username and password do not match'
} as const;
