# Playwright E-Commerce Automation Framework

## Overview

This project is an end-to-end test automation framework built with Playwright and TypeScript. It automates key user journeys in an e-commerce application (from SauceLab), including authentication, product browsing, cart management, and checkout-related workflows.

The framework follows clean automation practices using reusable page modules, helper functions, and maintainable test structures.

## Features

* End-to-End UI Testing
* Cross-Browser Execution
* Page Object Model (POM) Architecture
* Reusable Components and Utilities
* Automated Assertions and Validations
* CI/CD Integration with GitHub Actions
* HTML Test Reporting
* TypeScript Support

## Test Coverage

### Authentication

* Successful user login
* Failed user login
* Login validation
* Post-login verification

### Product Catalog

* Product listing validation
* Product detail navigation
* Product information verification

### Shopping Cart

* Add products to cart
* Verify cart contents
* Validate product details in cart

### Navigation

* Product page navigation
* URL validation
* UI element verification

## Tech Stack

* Playwright
* TypeScript
* Node.js
* GitHub Actions
* Playwright HTML Reports

## Project Structure

```text
project-root/
│
├── tests/
│   ├── login-flow.spec.ts
│   ├── product-flow.spec.ts
│
├── pages/
│   ├── Login.ts
│   ├── Products.ts
│   ├── Cart.ts
│
├── playwright.config.ts
├── package.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/marielyeng/playwright-ecommerce-automation-framework.git
```

Navigate to the project directory:

```bash
cd playwright-ecommerce-automation
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test product-flow.spec.ts
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests in debug mode:

```bash
npx playwright test --debug
```

## Test Reports

Generate and open the Playwright report:

```bash
npx playwright show-report
```

Reports include:

* Test execution summary
* Pass/Fail statistics
* Screenshots (if configured)
* Error details and stack traces

## CI/CD

This project supports automated execution through GitHub Actions.

Pipeline capabilities include:

* Dependency installation
* Playwright browser installation
* Automated test execution
* Report generation
* Continuous validation on pull requests and code merges

## Automation Design Principles

This framework was designed with the following goals:

* Maintainability
* Reusability
* Scalability
* Readability
* Reliable test execution

Reusable page modules and helper functions reduce code duplication and make new test scenarios easier to implement.

## Future Enhancements

* API testing integration
* Visual regression testing
* Data-driven test execution
* Parallel execution optimization
* Advanced reporting dashboards
* Test data management utilities

## Author

Created as part of my Quality Assurance Automation portfolio to demonstrate modern UI test automation practices using Playwright and TypeScript.
