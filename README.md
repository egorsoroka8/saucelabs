# 🎭 Playwright Auto Tests Portfolio for [Sauce Labs](https://www.saucedemo.com) Website

## Overview

This repository contains an automated test portfolio using Playwright, written in JavaScript, to test the Sauce Labs website using the Page Object Model (POM) design pattern. The tests aim to ensure the functionality and user experience of the Sauce Labs website are consistent and robust.

### Test cases list : [Link](https://docs.google.com/spreadsheets/d/1vs6KSUmPfyK0fu7_9oqWkiXgbCE1V9HeJe7JC3Cjuiw/edit?usp=sharing)

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project's root directory using the terminal or command prompt.
3. Install the project dependencies by running the following command:

```bash
npm install
```
4. Install browsers by running the following command:
```bash
npx playwright install
```

## Configuration

You can change configuration in playwright.config.js

## Running the Tests

To execute the test cases against the Sauce Labs website, simply run the following command:

check tests on correct web-site :
```bash
npm run test:success
```

check tests on broken web-site :
```bash
npm run test:fail
```

## Running the Tests

To generate Allure report run:

```bash
npm run allure-report
```

<p align="center">
  <img src="https://github.com/egorsoroka8/content/raw/main/allure.gif" alt="Your GIF" />
</p>

## Test Directory Structure

The tests are organized using the Page Object Model design pattern to enhance readability and maintainability. Here's an overview of the directory structure:
```
tests
├── classes
│   └── general.js
├── fixture
│   └── fixture.js
├── pages
│   ├── cart.page.js
│   ├── checkout.page.js
│   ├── complete.page.js
│   ├── footer.page.element.js
│   ├── header.page.element.js
│   ├── login.page.js
│   ├── overview.page.js
│   ├── product.page.js
│   └── productList.page.js
├── tests-data
│   ├── error-data.js
│   ├── summary-data.js
│   └── user-data.js
└── tests
    ├── cart.spec.js
    ├── checkout.spec.js
    ├── e2e.spec.js
    ├── login.spec.js
    ├── overview.spec.js
    ├── product.spec.js
    └── productList.spec.js
```


## Continuous Integration (Optional)

You can integrate this test suite with your preferred CI/CD tool (e.g., Jenkins, CircleCI) to run the tests automatically on each code commit or deployment.

## Contributing

Feel free to contribute to this test portfolio by opening pull requests or reporting issues. Your contributions and feedback are highly appreciated!

Happy testing!
