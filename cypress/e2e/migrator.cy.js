import { testScenarios } from '../fixtures/testScenarios'

describe('Cypress Migrator', () => {
  beforeEach(() => {
    cy.visit('https://migrator.cypress.io/')
    cy.get('.side-by-side.vs textarea')
      .as('textAreas')
      .first()
      .clear()
      .clear()
      .as('leftSideEditor')
  })

  testScenarios.forEach(scenario => {
    const {
      title,
      snippetToBeMigrated,
      migratedSnippet,
      cypressCommand
    } = scenario

    it(title, () => {
      cy.get('@leftSideEditor')
        .type(snippetToBeMigrated)

      cy.contains('button', 'Migrate to Cypress')
        .click()

      cy.get('@textAreas')
        .last()
        .scrollIntoView()
        .should($textArea => {
          expect($textArea[0].value).includes(migratedSnippet)
        })
      cy.get('[data-test="api-details"]')
        .should('contain', cypressCommand)
    })
  })
})
