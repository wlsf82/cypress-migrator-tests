# cypress-migrator-tests

Sample project to demonstrate how to test the [Cypress Migrator](https://migrator.cypress.io/) using Cypress itself.

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I used versions `v16.13.2` and `8.3.2` of Node.js and npm, respectively. I suggest you use the same or later versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

Run `npm test` (or `npm t` for the short version) to run the test in headless mode.

Or, run `npm run cy:open` to open Cypress in interactive mode.

### Running tests against a local environment

If you have the [cypress-migrator project](https://github.com/cypress-io/cypress-migrator) configured locally, run `npm run test:local` to run the tests in headless mode against it.

Or, run `npm run cy:open:local` to open Cypress in interactive mode.

### Tests' results summary

After running the tests in headless mode, you should see a summary like this:

```sh
(Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  migrator.cy.js                           00:51       31       31        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:51       31       31        -        -        -
```

## Support this project

If you want to support this project, leave a ⭐.

___

This project was created with 💚 by [Walmyr](https://walmyr.dev).
