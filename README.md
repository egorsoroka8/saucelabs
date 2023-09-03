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



<div align="center">
  <img src="https://github.com/egorsoroka8/content/raw/main/allure.gif" alt="Your GIF" />
</div>




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


Page     | Test                                                   | Number
-------- | ------------------------------------------------------ | ------
Login    | Success login into account                             | 1
         | Try to login with locked user                          | 2
         | Try to login with incorrect username                  | 3
         | Try to login with incorrect password                  | 4
         | Try to login with without username                    | 5
         | Try to login with without password                    | 6
         | Try to login without username and password            | 7
         | Try to close error message                            | 8
         | Login after error                                     | 9
Cart     | Open empty cart                                       | 10
         | Check that product in cart has all attributes         | 11
         | Remove product from cart                              | 12
         | Go to product page from cart                          | 13
         | Return to shopping list page from cart                | 14
         | Go to checkout page                                  | 15
Product  | Check that product page has all attributes            | 16
         | Add and remove product from cart in product page      | 17
         | Remove product from cart in product page              | 18
         | Return to list page                                  | 19
         | Add product in product page and remove in list page   | 20
List     | Check that all products have attributes               | 21
         | Open product page by click on image                   | 22
         | Open product page by click on title                   | 23
         | Check sorting selector                               | 24
         | Checking that default products sorting method is AZ   | 25
         | Checking the sorting of products by name ASC (AZ)     | 26
         | Checking the sorting of products by name DESC (ZA)    | 27
         | Checking the sorting of products by price ASC (LOHI)  | 28
         | Checking the sorting of products by price DESC (HILO) | 29
Checkout | Success checkout                                     | 30
         | Try to checkout without any data                      | 31
         | Try to checkout use only firstname                    | 32
         | Try to checkout without postal code                   | 33
         | Try to checkout without firstname                     | 34
         | Check that error message can be close                 | 35
         | Check that it allowed to go to overview after error   | 36
         | Check that checkout form store state                  | 37
         | Go to overview page                                  | 38
Overview | Check that it is possible to return to product list page | 39
         | Check that it is possible to go to complete page       | 40
         | Check that payment and shipping info are displayed    | 41
         | Open product page from overview page                  | 42
E2E      | Check that counter value equal to quantity of added products | 43
         | Check that cart counter save value throughout all pages | 44
         | Check that added to cart products stay added after logout -> login | 45
         | Check that all products added to cart displayed in cart and overview | 46
         | Check that all prices on overview page counted properly | 47



