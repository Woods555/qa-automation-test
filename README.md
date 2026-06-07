# QA Automation Technical Test

## Overview

This project contains automated end-to-end UI tests built using **WebdriverIO**, **Cucumber**, and **TypeScript** following the **Page Object Model (POM)** design pattern.

The goal of this project is to demonstrate automation framework design, maintainability, and test implementation for critical user workflows.

## Application Under Test

For this technical assessment, I selected SauceDemo (https://www.saucedemo.com/) as the application under test.

## Why SauceDemo?

SauceDemo is a public e-commerce testing application specifically designed for automation practice and UI testing. It provides stable test data, predictable behavior, and realistic user workflows that allow automation engineers to demonstrate framework design and testing best practices.

## Technology Stack

* WebdriverIO
* Cucumber (BDD)
* TypeScript
* Allure Reports
* Node.js

## Automated Scenarios

### Login

#### Successful Login

Validates that a registered user can successfully authenticate and access the products page.

#### Invalid Login

Validates that the application displays the expected error message when invalid credentials are provided.

#### Intentional Failure Example

A test designed to fail intentionally allows for a simulation of a test failing in the Allure Report metrics.

### Checkout

#### Complete Purchase Flow

Validates the complete purchase workflow:

* Login
* Login fail just as example
* Product selection
* Add to cart
* Checkout
* Order confirmation

## Framework Design

The framework follows the Page Object Model pattern to improve maintainability and reduce duplication.

### Project Structure

```text
features/
├── checkout.feature
├── login.feature

src/
├── helpers/
│   ├── assertion-helper.ts
│   ├── environment-helper.ts
│   ├── screenshot-helper.ts
│   └── test-data.ts
│
├── pages/
│   ├── login.page.ts
│   ├── inventory.page.ts
│   ├── cart.page.ts
│   └── checkout.page.ts
│
├── step-definitions/
│   ├── login.steps.ts
│   └── checkout.steps.ts
│
└── support/
    └── hooks.ts
```

### Design Decisions

* **Page Objects** encapsulate UI interactions.
* **Step Definitions** contain business-readable test steps.
* **Helpers** centralize assertions, screenshots, environment configuration, and test data.
* **Hooks** manage test lifecycle events and failure screenshots.
* **Environment configuration** supports multiple execution environments.

## Environment Configuration

The framework supports environment-based execution using `.env` files.

Available environments:

```text
.env.qa
.env.staging
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd qa-automation-test
```

Install dependencies:

```bash
npm install
```
Note: Tested in node 22 and 24.

## Running Tests

Execute all tests:

```bash
npm test
```

Execute tests using QA configuration:

```bash
npm run test:qa
```but both are the same because is the same url, this is just an example for different environments

Execute tests using Staging configuration:

```bash
npm run test:staging
```but both are the same because is the same url, this is just an example for different environments

## Test Execution by Tags

Examples:

```bash
npx wdio run wdio.conf.ts --cucumberOpts.tags="@smoke"
```

```bash
npx wdio run wdio.conf.ts --cucumberOpts.tags="@regression"
```

## Allure Reporting

Generate report:

```bash
npm run report:generate
```

Open report:

```bash
npm run report:open
```

The framework automatically captures screenshots when a scenario fails.


## Author

Ignacio Heredia
QA Automation Engineer
