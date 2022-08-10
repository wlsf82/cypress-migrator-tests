import { testScenarios } from '../fixtures/testScenarios'

describe('Cypress Migrator', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.side-by-side.vs textarea')
      .as('textAreas')
      .first()
      .type('{selectall}')
      .clear()
      .then($textArea => {
        if ($textArea[0].value.length) {
          cy.log('clearing again...')
          cy.wrap($textArea).clear()
        }
      })
      .as('leftSideEditor')
  })

  testScenarios.forEach(scenario => {
    const {
      title,
      snippetToMigrate,
      migratedSnippet,
      cypressCommands
    } = scenario

    it(`migrates Protractor's ${title}`, () => {
      cy.get('@leftSideEditor')
        .type(snippetToMigrate)

      cy.contains('button', 'Migrate to Cypress')
        .click()

      cy.get('@textAreas')
        .last()
        .scrollIntoView()
        .should($textArea => {
          expect($textArea[0].value).includes(migratedSnippet)
        })
      cypressCommands.forEach(cmd => {
        cy.get('[data-test="api-details"]')
          .should('contain', cmd)
      })
    })
  })
})
